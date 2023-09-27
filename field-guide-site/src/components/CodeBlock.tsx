
import { useState, useEffect } from 'react'
import { usePython } from 'react-py'

type CodeBlockProps = {
    defaultCode?: string;
}

function CodeBlock({ defaultCode = '' }: CodeBlockProps) {
  const [input, setInput] = useState(defaultCode);

  // Use the usePython hook to run code and access both stdout and stderr
  const { runPython, stdout, stderr, isLoading, isRunning } = usePython();

  useEffect(() => {
    // If defaultCode prop changes, update the input state
    setInput(defaultCode);
  }, [defaultCode]);

  return (
    <>
      {isLoading ? <p>Loading...</p> : <p>Ready!</p>}
      <form>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your code here"
        />
        <input
          type="submit"
          value={!isRunning ? 'Run' : 'Running...'}
          disabled={isLoading || isRunning}
          onClick={(e) => {
            e.preventDefault();
            runPython(input);
          }}
        />
      </form>
      <p>Output</p>
      <pre>
        <code>{stdout}</code>
      </pre>
      <p>Error</p>
      <pre>
        <code>{stderr}</code>
      </pre>
    </>
  );
}

export default CodeBlock;
