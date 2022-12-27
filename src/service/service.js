import './service.css'
import Item from './Item'
import React, { Component } from 'react'

export default class service extends Component {
  render() {
    return (
      <div className='service'>
         <div id='about-top-box' className='ww'>
              <div>
                  <h1 id='about-title'>خدمات ما</h1>
                  <div id='title-line'>
                      <div id='title-line-circle'></div>
                  </div>
              </div>
              <p id='about-text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
          </div>
          <div className="service-content">
            <Item class="fa-solid fa-snowflake" />
            <Item class="fa-solid fa-snowflake" />
            <Item class="fa-solid fa-snowflake" />
            <Item class="fa-solid fa-snowflake" />
            <Item class="fa-solid fa-snowflake" />
            <Item class="fa-solid fa-snowflake" />
          </div>
      </div>
    )
  }
}
