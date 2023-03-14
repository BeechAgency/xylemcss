import React from 'react'

export default function CodeBlock({children}) {
  return (
    <pre className="codeblock"><code>{children}</code></pre>
  )
}
