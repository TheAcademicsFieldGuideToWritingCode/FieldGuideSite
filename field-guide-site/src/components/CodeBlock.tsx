
import { useState, useEffect } from 'react'
import { usePython } from 'react-py'
import Editor from '@monaco-editor/react';


const packages = {
  official: ['asciitree'],
  micropip: ['orjson', 'python-cowsay', 'requests'],
}


function CodeBlock({ defaultCode = '' }) {
  const [input, setInput] = useState(defaultCode);
  const { runPython, stdout, stderr, isLoading, isRunning } = usePython();



  useEffect(() => {
    setInput(defaultCode);
  }, [defaultCode]);

  const handleEditorChange = (value:any , event:any) => {
    setInput(value);
  };

  return (
    <div className="p-4 bg-slate-800 text-white rounded-md w-full">
      {isLoading ? (
        <p className="text-yellow-500">Loading...</p>
      ) : (
        <p className="text-green-500">Ready!</p>
      )}
      <div className="mt-4">
        <Editor
          height="50vh"
          defaultLanguage="python"
          defaultValue={input}
          onChange={handleEditorChange}
          theme="vs-dark"
          options={{
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            readOnly: isRunning,
          }}
        />
      </div>
      <button
        className="w-full mt-2 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isLoading || isRunning}
        onClick={() => runPython(input)}
      >
        {!isRunning ? 'Run' : 'Running...'}
      </button>
      <p className="mt-4 text-yellow-500">Output</p>
      <pre className="p-2 bg-slate-700 rounded-md overflow-x-auto">
        <code className="break-all">{stdout}</code>
      </pre>
      <p className="mt-4 text-red-500">Error</p>
      <pre className="p-2 bg-slate-700 rounded-md overflow-x-auto">
        <code className="break-all">{stderr}</code>
      </pre>
    </div>
  );
}

export default CodeBlock;
