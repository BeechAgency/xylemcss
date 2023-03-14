import React from 'react'

export default function Section({xy, classes, children}) {
  return (
    <section className={classes} data-xy={xy}>
        {children}
    </section>
  )
}
