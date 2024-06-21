import { createContext, useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Login from './Component/Login'
import Register from './Component/Register'
import ProtectedRoute from './Services/protectedRoutes'


import Course from './Pages/Course/Course'


export const store=createContext()


function App() {

  const [couseData,setCourseData]=useState([
    // {
    //   name:'boppanisai',
    //   description:'Learn music',
    //   instuctor:'Kittu',
    //   dayof:'22-6-1999',
    //   price:'2300'
    // },
    // {
    //   name:'boppanisai',
    //   description:'Learn music',
    //   instuctor:'Kittu',
    //   dayof:'22-6-1999',
    //   price:'2300'
    // },
    // {
    //   name:'boppanisai',
    //   description:'Learn music',
    //   instuctor:'Kittu',
    //   dayof:'22-6-1999',
    //   price:'2300'
    // },
    // {
    //   name:'boppanisai',
    //   description:'Learn music',
    //   instuctor:'Kittu',
    //   dayof:'22-6-1999',
    //   price:'2300'
    // }

  ])

  

  


  return (


    <>
    
<store.Provider value={[couseData,setCourseData]}>
    <BrowserRouter>


<Routes>

  <Route path='/login' element={<Login />} />

  <Route path='/register' element={<Register />} />

  <Route path='/' element={<ProtectedRoute />}>

           <Route path='/' element={<Home />} />

           <Route path='/course' element={<Course/>}/>

           </Route>
</Routes>


   


</BrowserRouter>
</store.Provider>
   
      


    </>
  )
}

export default App
