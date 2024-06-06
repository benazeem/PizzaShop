import React from 'react'

function Clock(css) {
  return (
    <>
    <svg width="22" height="22" viewBox="0 0 22 22"  className={css.css } xmlns="http://www.w3.org/2000/svg">
<path d="M10.9999 20.2669C16.0626 20.2669 20.1666 16.346 20.1666 11.5092C20.1666 6.67245 16.0626 2.75146 10.9999 2.75146C5.9373 2.75146 1.83325 6.67245 1.83325 11.5092C1.83325 16.346 5.9373 20.2669 10.9999 20.2669Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
<path d="M10.8797 6.42358L10.8791 11.6824L14.7653 15.3952" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1 3.38847L4.5 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 3.38847L17.5 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</>
  )
}

export default Clock

