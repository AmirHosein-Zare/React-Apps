import './content.css'
import React from 'react'

export default function content(props) {
  return (
    <div className='Info-content'>
        <h1 className='Info-content-number'>{props.num}</h1>
        <p className="Info-content-title">{props.title}</p>
    </div>
  )
}
