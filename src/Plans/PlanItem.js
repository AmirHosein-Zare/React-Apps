import './PlanItem.css'
import React from 'react'

export default function PlanItem(props) {
  return (
    <div className='PlanItem'>
        <div className="PlanItem-content">
            <div id='PlanItem-container'>
                <i class={props.class} id='PlanItem-icon'></i>
                <h3 className='PlanItem-title'>{props.title}</h3>
            </div>
            <p className='PlanItem-text'>{props.text}</p>
        </div>
        <div className='PlanItem-feature'>
          <div className="PlanItem-item">
            <i class="fa-regular fa-circle-check"></i>
            <p className='PlanItem-item-text'>مخاطب نامحدود</p>
          </div>
          <div className="PlanItem-item">
            <i class="fa-regular fa-circle-check"></i>
            <p className='PlanItem-item-text'>استفاده 2 کاربر</p>
          </div>
          <div className="PlanItem-item">
            <i class="fa-regular fa-circle-check"></i>
            <p className='PlanItem-item-text'>مقاله آموزشی</p>
          </div>
          <div className="PlanItem-item">
            <i class="fa-regular fa-circle-check"></i>
            <p className='PlanItem-item-text'>نمایش عمومی</p>
          </div>
          <div className="PlanItem-item">
            <i class="fa-regular fa-circle-check"></i>
            <p className='PlanItem-item-text'>اشتراک گذاری عمومی</p>
          </div>
        </div>
        <div  className='PlanItem-text-feature'>
          <p id='PlanItem-text-feature'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        </div>
        <div className='PlanItem-price'>
          <del>290,000تومان</del><h2 className='PlanItem-price-text'>190,000تومان</h2>
        </div>
        <button className='PlanItem-order'>سفارش دهید</button>
    </div>
  )
}
