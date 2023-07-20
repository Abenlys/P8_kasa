import React from 'react'
import "./_Tags.scss";

export default function Tags({tags}) {
    
  return (
    <div className='tags'>
        {tags.map((tag, index) => (
            <div className='tags__items' key={index}>{tag}</div>
        ))}
    </div>
  )
}
