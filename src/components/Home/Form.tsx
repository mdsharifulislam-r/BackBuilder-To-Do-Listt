import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { useAppDispatch, useAppSelector } from '../../lib/hooks/hooks'
import { setChange } from '../../lib/store/features/userSlice'

export default function Form() {
  const user = useAppSelector(state=>state.user)
  const dispatch = useAppDispatch()
  const [task,setTask]=useState("")
  const submit = async (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    const res = await fetch('https://back-builder.vercel.app/api/user/7/9/todo',{
      method:"POST",
      body:JSON.stringify({
        task,
        time:new Date().toDateString(),
        success:false,
        user_id:user?.primary_id
      })
    })
    const data = await res.json()
    if(data?.success){
      setTask("")
      dispatch(setChange())
      toast.success("Task Add Successfully")
    }else{
      toast.error(data?.message)
    }
  }
  return (
    <div>
      <form action="" onSubmit={submit} className='flex gap-2'>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} className='w-[70%] py-2 border border-slate-300 rounded-md px-3' placeholder='Task..'/>
        <button className='w-[30%] bg-slate-500 text-white rounded-md '>Add Task</button>
      </form>
    </div>
  )
}
