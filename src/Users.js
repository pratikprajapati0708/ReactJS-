import React,{forwardRef} from 'react'

export default function Users(props,ref) {
  return (
    <div>
      <input type='text'ref={ref}></input>
    </div>
  )
}
