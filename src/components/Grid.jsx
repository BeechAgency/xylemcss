import React from 'react'

export default function Grid({xy, children}) {
  return (
    <div data-xy={`grid ${xy}`}>
        {children}
    </div>
  )
}
