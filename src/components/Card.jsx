import React from 'react'

function Card({children}) {
  return (
    <div className='bg-slate-950 p-8 m-10 shadow-2xl text-white'>{children}</div>
  )
}

export default Card