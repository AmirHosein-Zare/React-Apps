import './Sample.css'
import React from 'react'

export default function Sample() {
  return (
    <div className='Sample'>
        <div id='about-top-box' className='ww'>
            <div>
                <h1 id='about-title'>نمونه کارها</h1>
                <div id='title-line'>
                    <div id='title-line-circle'></div>
                </div>
            </div>
            <p id='about-text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        </div>
        <div id="Sample-image">
            <img className="Sample-image" src="image/1.jpg" alt="" />
            <img className="Sample-image" src="image/2.jpg" alt="" />
            <img className="Sample-image" src="image/3.jpg" alt="" />
            <img className="Sample-image" src="image/4.jpg" alt="" />
            <img className="Sample-image" src="image/5.jpg" alt="" />
            <img className="Sample-image" src="image/6.jpg" alt="" />
        </div>
    </div>
  )
}
