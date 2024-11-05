import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useAppDispatch } from '../../lib/hooks/hooks'
import { setChange } from '../../lib/store/features/userSlice'
export interface content{
    primary_id:string,
    task:string,
    time:string,
    success:boolean,
    user_id:string
}
export default function TodoBox({content}:{content:content}) {
  const dispatch = useAppDispatch()
    const [formData,setFormData]=useState({
        task:"",
        time:"",
        success:false
    })
    useEffect(()=>{
        setFormData({
            task:content?.task,
            time:content?.time,
            success:content?.success
        })
    },[])

    const success = async ()=>{
      setFormData({...formData,success:!formData?.success})
      console.log(formData);
      
      const res = await fetch(`https://back-builder.vercel.app/api/user/7/9/todo/${content?.primary_id}`,{
        method:"PUT",
        body:JSON.stringify({
          ...formData,
          success:!formData?.success,
          user_id:content?.user_id
        })
      })
      const data = await res.json()
      if(data?.success){
        dispatch(setChange())
        toast.success("Task Completed")
      }else{
        toast.error(data?.message)
      }
    }
    const Delete = async ()=>{
  

      
      const res = await fetch(`https://back-builder.vercel.app/api/user/7/9/todo/${content?.primary_id}`,{
        method:"DELETE",
      
      })
      const data = await res.json()
      if(data?.success){
        dispatch(setChange())
        toast.success("Task Deleted")
      }else{
        toast.error(data?.message)
      }
    }
  return (
    <div className='flex gap-3'>
      <div className='bg-blue-50 flex justify-between w-[70%] py-2 px-3 rounded-md'>
        <div className='flex place-items-center text-slate-500 gap-4'>
            <input onChange={success} type="checkbox" checked={formData?.success} className=' accent-green-500 peer/check' />
            <label htmlFor="" className='peer-checked/check:line-through'>{formData?.task}</label>
        </div>
        <span className='text-xl cursor-pointer' onClick={Delete}>x</span>
      </div>
      <div className='w-[30%] text-sm px-2 text-slate-500 bg-blue-50 flex justify-center place-items-center rounded-md'>
        {formData?.time}
      </div>
    </div>
  )
}
