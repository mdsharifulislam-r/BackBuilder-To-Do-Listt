import  { ChangeEvent, FormEvent, useState } from 'react'
import toast from 'react-hot-toast'

import { Link, useNavigate } from 'react-router-dom'




export default function Register() {
  const navigate = useNavigate()

  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:""
  })
  const addValue = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target
    setFormData({...formData,[name]:value})
  }
  const handleSubmit = async (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const {email,password} = formData
    if(!email || !password ){
      toast.error('Fill All field')
      return
    }
    const res = await fetch('https://back-builder.vercel.app/api/account/7/9/users/register',{
      method:"POST",
      body:JSON.stringify(formData)
    })
    const data = await res.json()
    if(data?.success){
     
      toast.success('Login Successfull')

      setFormData({
       name:"",
        email:"",
        password:""
      })
     
      navigate("/login")
    }else{
      toast.error(data?.message)
    }
  }
  return (
    <div className='w-full min-h-screen bg-blue-100'>
      <div className="container mx-auto flex justify-center place-items-center min-h-screen flex-col">
        <h1 className='text-2xl font-bold text-slate-500 mb-5'>Register Form By Backbuilder</h1>
        <form onSubmit={handleSubmit} action="" className="form w-[90%] md:w-[40%] bg-white p-5 rounded-md">
        <div className='flex flex-col'>
                <label htmlFor="name" className='text-slate-500'>Email Address</label>
                <input type="text" value={formData.name} onChange={addValue} name='name' id='name' placeholder='Name' className='px-3 py-1 border rounded-md my-2 focus:outline-none focus:shadow-lg'  />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="email" className='text-slate-500'>Email Address</label>
                <input type="email" value={formData.email} onChange={addValue} name='email' id='email' placeholder='Email' className='px-3 py-1 border rounded-md my-2 focus:outline-none focus:shadow-lg'  />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="password" className='text-slate-500'>Password</label>
                <input type="password" value={formData.password} onChange={addValue} name='password' id='password' placeholder='Password' className='px-3 py-1 border rounded-md my-2 focus:outline-none focus:shadow-lg'  />
            </div>
            <div>
              <button className='w-full py-1.5 mt-2 bg-slate-600 text-white rounded-md'>Login</button>
            </div>
            <div className='text-slate-600 my-2'>
              I already have a account <Link className='text-orange-500' to={"/login"}>Login Now</Link>
            </div>
        </form>
      </div>
    </div>
  )
}
