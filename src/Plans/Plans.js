import './Plans.css'
import React from 'react'
import PlanItem from './PlanItem'

export default function Plans() {
  return (
    <div className='Plans'>
        <div id='about-top-box' className='ww'>
            <div>
                <h1 id='about-title'>پلن ها</h1>
                <div id='title-line'>
                    <div id='title-line-circle'></div>
                </div>
            </div>
            <p id='about-text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        </div>
        <div className="Plans-content">
            <PlanItem class="fa-solid fa-user" title="عادی" text="ارزان و به صرفه" />
            <PlanItem class="fa-solid fa-users" title="اقتصادی" text="قیمت مناسب" />
            <PlanItem class="fa-solid fa-user-group" title="حرفه ای" text="مناسب حرفه ای ها" />
        </div>
    </div>
  )
}
