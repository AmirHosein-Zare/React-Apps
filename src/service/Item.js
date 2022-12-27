import './Item.css'
import React from 'react'

export default function Item(props) {
  return (
    <div className='Item_service'>
        <i class={props.class} id='service-item-icon'></i>
        <h3 className='service-item-title'>لورم ایپسوم</h3>
        <p className='service-item-content'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>        
    </div>
  )
}
