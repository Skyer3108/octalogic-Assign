import { useContext, useEffect, useState } from "react"

import { store } from "../../App"

import './AAddCourse.css'

const AddCourse=({setShowAdd})=>{


    const [couseData,setCourseData]=useContext(store)

      //const [addedData,setAddData]=useState([])

   

    const [data,setData]=useState({
        name:'',
        description:'',
        instuctor:'',
        instrunment:'',
        dayof:'',
        price:''

    })



    const onAddHandler = (event) => {

        const name = event.target.name
        const value = event.target.value
    
        setData(data=>({...data,[name]:value}))

        

    }

   

    const addData=(e)=>{

        console.log(data)

        

        e.preventDefault()

      

       
       //setCourseData([...couseData,data])

       setCourseData([...couseData,data])
     
   
       localStorage.setItem('data', JSON.stringify(couseData))

       const courseList= JSON.parse(localStorage.getItem('data'))

      

       
       

      
       console.log(courseList,'edd')


     

        setShowAdd(false)





    }

    useEffect(()=>{
         console.log(couseData)
    },[couseData])
    return(


        <div className='add-popup'>

<form onSubmit={addData} className="add-popup-cointainer">

    <div>
    <h1>Add Course</h1>
    </div>

    <div className="mb-3">
    <input className="form-control" name='name' onChange={onAddHandler} value={data.name} placeholder='Course Name' type='text' required />
    </div>


<div className="mb-3">
<input className="form-control" name='description' onChange={onAddHandler} value={data.description} placeholder='Description' type='text' required />
</div>

<div className="mb-3">
<input className="form-control" name='instuctor' onChange={onAddHandler} value={data.instuctor} placeholder='Instructor' type='text' required />
</div>
<div className="mb-3">
<input className="form-control" name='instrunment' onChange={onAddHandler} value={data.instrunment} placeholder='Instrument' type='text' required />
</div>
<div className="mb-3">
<input className="form-control" name='dayof' onChange={onAddHandler} value={data.dayof} placeholder='Day of the Week' type='date' required />
</div>



<div className="mb-3">
<input className="form-control" name='price' onChange={onAddHandler} value={data.price} placeholder='Price' type='test' required />
</div>

<div>
    <button onClick={()=>setShowAdd(false)} className="">Cancel</button>
<button className="btn " type='submit'>Add Course</button>
</div>





 </form>

        </div>
    )
}

export default AddCourse