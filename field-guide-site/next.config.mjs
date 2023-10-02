/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import("./src/env.mjs");

import nextMDX from '@next/mdx';
import withTM from 'next-transpile-modules';

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});

// Specify modules to transpile
const withTranspileModules = withTM(['react-py']); // Replace 'react-py' with your module(s)

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

    /**
     * If you are using `appDir` then you must comment the below `i18n` config out.
     *
     * @see https://github.com/vercel/next.js/issues/41980
     */
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },

    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

// Nest the configurations: withTranspileModules(withMDX(config))
export default withTranspileModules(withMDX(config));

