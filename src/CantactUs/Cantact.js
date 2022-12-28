import './Cantact.css'
import React from 'react'
import Icon from './Icon'

export default function Cantact() {
  return (
    <div className='Cantact'>
        <div id='about-top-box' className='ww'>
            <div>
                <h1 id='about-title'>تماس با ما</h1>
                <div id='title-line'>
                    <div id='title-line-circle'></div>
                </div>
            </div>
            <p id='about-text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        </div>
        <div className="Cantact-container">
            <div className="Cantact-right">
                <input className='cantact-item cantact-item1' type="text" placeholder='نام' name="" id="" />
                <input className='cantact-item cantact-item2' type="text" placeholder='نام خانوادگی' name="" id="" />
                <input className='cantact-item cantact-item3' type="text" placeholder='ایمیل' name="" id="" />
                <input className='cantact-item cantact-item4' type="text" placeholder='تلفن' name="" id="" />
                <textarea className='cantact-item cantact-item5' placeholder='توضیحات' name="" id="" cols="30" rows="10"></textarea>
                <button className='Cantact-btn cantact-item6'>ارسال</button>
            </div>
            <div className="Cantact-left">
                <Icon icon="fa-solid fa-location-dot" text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان " title="آدرس"></Icon>
                <Icon icon="fa-solid fa-location-dot" text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم" title="آدرس"></Icon>
                <Icon icon="fa-solid fa-location-dot" text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم" title="آدرس"></Icon>
                <Icon icon="fa-regular fa-envelope" text="test@test.com" title="ایمیل"></Icon>
                <Icon icon="fa-solid fa-phone" text="021-1111-1111" title="شماره تماس"></Icon>
            </div>
        </div>
    </div>
  )
}
