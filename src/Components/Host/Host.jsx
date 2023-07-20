import React from 'react'
import "./_Host.scss";

export default function Host({hostname, hostpicture}) {
  return (
    <div className='host'>
        <div className="host__name">  {hostname.split(" ").map((part, index) => (
    <React.Fragment key={part}>
      {index === 1 ? <span className="second-word">{part}</span> : part}
      <br />
    </React.Fragment>
  ))} <br /></div>
        <img className='host__picture' src={hostpicture} alt={hostname} />
    </div>
  )
}
