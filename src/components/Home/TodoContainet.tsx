import { useEffect, useState } from 'react'
import TodoBox, { content } from './TodoBox'

import { useAppSelector } from '../../lib/hooks/hooks'
import toast from 'react-hot-toast'

export default function TodoContainet() {
  const user = useAppSelector(state=>state.user)
  const [todos,setTodos]=useState<content[]>([])
  const change = useAppSelector(state=>state.change)
  useEffect(()=>{
    fetch(`https://back-builder.vercel.app/api/user/7/9/todo?user_id=${user?.primary_id}`).then(res=>res.json()).then(data=>{
      if(data?.success){
        setTodos(data?.data)
      }else{
        toast.error(data.message)
      }
    })
  },[change])
  const todoItem = todos?.map(item=>(
    <TodoBox
    content={item}
    key={item?.primary_id}
    />
  ))
  return (
    <div className='flex flex-col gap-2 my-2'>
      {todoItem}
    </div>
    
  )
}
