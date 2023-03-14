import React from 'react'

export default function Col({ xy, children, classes }) {
  return (
    <div data-xy={`col ${xy}`} className={classes}>
        {children}
    </div>
  )
}
