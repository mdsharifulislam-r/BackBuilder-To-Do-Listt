import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Tamplate from './Tamplate'
import Home from '../Home/Home'
import Register from '../../page/Register'
import Login from '../../page/Login'
import AuthUser from '../authUser/AuthUser'

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Tamplate/>}>

            <Route path='/' element={<AuthUser/>}>
            <Route index element={<Home/>}/>
            </Route>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
        </Route>
    )
)

export default Router