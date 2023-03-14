import React from 'react'

export default function Header({children}) {
  return (
    <header data-xy="flex flex-column justify-center items-start">
        <h1>Xylem CSS</h1>
        <p>An opinionated attribute based responsive grid framework.</p>
        {children}
    </header>
  )
}
