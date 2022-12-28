import './Icon.css'
import React from 'react'

export default function Icon(props) {
  return (
    <div className='Icon'>
        <div>
            <i class={props.icon} id="Icon-icon"></i>
            <h3 className='Icon-title'>{props.title}</h3>
        </div>
        <div className='Icon-text'>
            <p className='Icon-address'>{props.text}</p>
        </div>
    </div>
  )
}
