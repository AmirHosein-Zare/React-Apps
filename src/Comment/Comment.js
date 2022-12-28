import './Comment.css'
import React from 'react'

export default function Comment() {
  return (
    <div className='Comment'>
        <div id='about-top-box' className='ww'>
            <div>
                <h1 id='about-title'>بازخورد ها</h1>
                <div id='title-line'>
                    <div id='title-line-circle'></div>
                </div>
            </div>
            <p id='about-text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        </div>
        <div id='Comment-box' className='ww'>
            <div className='Comment-img'><img src="image/1.jpg" alt="" className="Comment-image" /></div>
            <h3 id='Comment-box-title'>علی شکری</h3>
            <p className='about-box-text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
            <p className='about-box-text'>تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید. این نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است</p>
            <p className='about-box-text'>این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند</p>
        </div>
    </div>
  )
}
