import './Info.css'
import React from 'react'
import Content from './content'

export default function Info() {
  return (
    <div className='Info'>
        <Content num={1158} title="کاربران ما" />
        <Content num={1670} title="پروژه ها" />
        <Content num={20} title="سال های تجربه" />
        <Content num={18} title="جوایز" />
    </div>
  )
}
