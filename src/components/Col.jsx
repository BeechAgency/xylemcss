import React from 'react'

export default function Col({ xy, children }) {
  return (
    <div data-xy={`col ${xy}`}>
        {children}
    </div>
  )
}
