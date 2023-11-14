import React from 'react'
import style from './custome.module.css'
export default function NewStyle() {
  return (
    <div>
        <h1 className='primary'>Style type in React 1</h1>
        <h1 style={{backgroundColor:"cyan",color:"blue"}}>Style type in React 2</h1>
        <h1 className={style.success}>Style type in React 3</h1>
    </div>
  )
}
