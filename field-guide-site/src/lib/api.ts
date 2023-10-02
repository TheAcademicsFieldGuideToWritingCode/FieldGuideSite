import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')
const coursesDirectory = join(process.cwd(), '_courses')

export function getPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  // Filter out subdirectories
  return fileNames.filter((fileName) => {
    const fullPath = join(postsDirectory, fileName);
    // Return true if it's a file, false if it's a subdirectory
    return fs.statSync(fullPath).isFile();
  });
}


export function getCourseSlugs() {
  const fileNames = fs.readdirSync(coursesDirectory)
  // Filter out subdirectories
  return fileNames.filter((fileName) => {
    const fullPath = join(coursesDirectory, fileName);
    // Return true if it's a file, false if it's a subdirectory
    return fs.statSync(fullPath).isFile();
  });
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}


export function getCoursesBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(coursesDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => {
      if (!post1?.date) return 1; // or return -1 depending on how you want to handle undefined
      if (!post2?.date) return -1; // or return 1 depending on how you want to handle undefined
      return post1.date > post2.date ? -1 : 1;
    })
  return posts;
}

export function getAllCourses(fields: string[] = []) {
  const slugs = getCourseSlugs()
  const posts = slugs
    .map((slug) => getCoursesBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => {
      if (!post1?.date) return 1; // or return -1 depending on how you want to handle undefined
      if (!post2?.date) return -1; // or return 1 depending on how you want to handle undefined
      return post1.date > post2.date ? -1 : 1;
    })
  return posts;
}


