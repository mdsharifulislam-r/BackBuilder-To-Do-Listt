

import { useState } from "react"

export default function DateTime() {
    const date = new Date()
    const [time,setTime]=useState('')
    setTimeout(()=>{
        setTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    },1000)

  return (
    <div className='flex justify-between text-slate-500 font-semibold'>
      <span>{date.toDateString()}</span>
      <span>{time}</span>
    </div>
  )
}
