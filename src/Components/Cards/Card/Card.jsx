import React from 'react'

export default function Card({title, cover}) {
  return (
    <div className='card-organisation'>
        <div>{title}</div>
        <div>{cover}</div>
    </div>
    
  )
}
