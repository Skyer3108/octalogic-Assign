import Sidebar from "../../Component/Sidebar/Siderbar"
import { useState } from "react"
import './Course.css'
import { useContext } from "react"
import { store } from "../../App"
import AddCourse from "../AddCourse/AddCourse"
const Course = () => {

   const [couseData,setCourseData]=useContext(store)

    const [showAdd,setShowAdd]=useState(false)

    const [ser,setSer]=useState('')


    const [status,setStatus]=useState('Active')

    const addCourse=()=>{


        setShowAdd(true)


    }

   //const courseArr=JSON.parse(localStorage.getItem('data'))

    // console.log(courseList)

    //const courseList= JSON.parse(localStorage.getItem('data'))

    const filteredCourses = couseData.filter((course) => {
        return (
            course?.name?.toLowerCase().includes(ser.toLowerCase())
            || course?.instrunment?.toLowerCase().includes(ser.toLowerCase())
            || course?.dayof?.toLowerCase().includes(ser.toLowerCase())
            || course?.instuctor?.toLowerCase().includes(ser.toLowerCase())
        )
    })

   

    

    const onChangeStatus=(e)=>{


        e.preventDefault()
        
    //  if(key===couseData.)
        setStatus(e.target.value)





    }

    return (

        <div>

       

        {showAdd?<AddCourse setShowAdd={setShowAdd}/>:<></>}

        <div className="app-content">

            

            <Sidebar />

            <div className="course">

                <h1>Courses</h1>

                <div className="course-list">

                    <div className="cour-title">

                        <h4>COURSE LIST</h4>
                        <div onChange={(e)=>setSer(e.target.value.toLowerCase())}  className="ser">
                            <button  className="btn">
                                ser
                            </button>
                            <input placeholder="Search" />
                        </div>

                    </div>


                    <div className="table">



                        <div className="container list-container">

                            <div className="list-table-course">
                                <b>Name</b>
                                <b>Description</b>
                                <b>Instuctor</b>
                                <b>Instrument</b>
                                <b>Day of Week</b>
                                <b>#Of Students</b>
                                <b>Price</b>
                                <b>Status</b>
                                <b>Actions</b>




                            </div>

                            {

                          filteredCourses?filteredCourses.map((item,index)=>{

                            return (
                                <div key={index} className="list-table-formate-2">

                                    <p>{item.name}</p>
                                    <p>{item.description}</p>
                                    <p>{item.instuctor}</p>
                                    <p>{item. instrunment}</p>
                                    <p>{item. dayof}</p>
                                    <p>{index}</p>
                                    <p>{item.price}</p>
                                    <p>{status}</p>

                                    <div><select key={index} onChange={onChangeStatus}>
                                        <option>Active</option>
                                        <option>Closed</option>
                                        <option>Archived</option>
                                        </select></div>
                        
                                </div>
                            )
                        

                          }) :couseData.map((item, index) => {

                                    return (
                                        <div key={index} className="list-table-formate-2">

                                            <p>{item.name}</p>
                                            <p>{item.description}</p>
                                            <p>{item.instuctor}</p>
                                            <p>{item. instrunment}</p>
                                            <p>{item. dayof}</p>
                                            <p>{index}</p>
                                            <p>{item.price}</p>
                                            <p>{status}</p>

                                            <div><select key={index} onChange={onChangeStatus}>
                                                <option>Active</option>
                                                <option>Closed</option>
                                                <option>Archived</option>
                                                </select></div>
                                
                                        </div>
                                    )
                                })
                            }





                        </div>

                    </div>

                </div>

                <div onClick={addCourse} className="add-btn btn">

                    + Add Course
                    
                </div>

                

            </div>

            

            
        </div>

        </div>
    )
}
export default Course