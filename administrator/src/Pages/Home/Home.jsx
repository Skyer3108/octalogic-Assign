
import Sidebar from "../../Component/Sidebar/Siderbar"
import { useState } from "react"

import './Home.css'

const Home = () => {

    const [enrolment, setEnriolment] = useState([])


    return (
        <div className="app-content">

            <Sidebar />



            <div className="hom">

                <h1>Overview</h1>

                <div className="container content">

                    <div className="row">

                        <div className="col-md-3">

                            <div className="card dis">

                                <div>
                                    <img src='#' alt='' />
                                </div>


                                <div>
                                    <p class='price'>164</p>
                                    <p class='price-info'>total number of students</p>
                                    <p class='view'>View</p>
                                </div>



                            </div>

                        </div>

                        <div className="col-md-3">

                            <div className="card dis">

                            <div>
                                    <img src='#' alt='' />
                                </div>

                                <div>
                                <p class='price'>12</p>
                                    <p class='price-info'>Toal number of courses</p>
                                    <p class='view'>View</p>
                                </div>



                            </div>

                        </div>



                        <div className="col-md-3">

                            <div className="card dis">

                            <div>
                                    <img src='#' alt='' />
                                </div>

                                <div>
                                <p class='price'>$ 2000</p>
                                    <p class='price-info'>Toal amount earnde</p>
                                    <p class='view'>View</p>
                                </div>



                            </div>

                        </div>

                        <div className="col-md-3">

                            <div className="card dis">

                            <div>
                                    <img src='#' alt='' />
                                </div>
                                <div>
                                <p class='price'>Guitar</p>
                                    <p class='price-info'>best performing course</p>
                                    <p class='view'>View</p>
                                </div>



                            </div>

                        </div>
                    </div>



                </div>

                <div className="table">

                    <div class='title'>
                        <div>
                        <h2>LATEST ENROLMENTS</h2>

                        </div>
                        <div>
                            <p>View All courses</p>
                        </div>
                   
                    </div>

                    

                    <div className="container">

                        <div className="list-table-formate title">
                            <b>Enr.No</b>
                            <b>S.Name</b>
                            <b>C.Name</b>
                            <b>Fees</b>
                            <b>Enr.Date</b>
                        </div>


                        <div className="list-table-formate">

                            <p>1563124</p>
                            <p>John Doe</p>
                            <p>Percussion</p>

                            <p>$120</p>
                            <p>12-08-2023</p>


                        </div>

                        <div className="list-table-formate">

                            <p>1563124</p>
                            <p>John Doe</p>
                            <p>Percussion</p>

                            <p>$120</p>
                            <p>12-08-2023</p>


                        </div>

                        <div className="list-table-formate">

                            <p>1563124</p>
                            <p>John Doe</p>
                            <p>Percussion</p>

                            <p>$120</p>
                            <p>12-08-2023</p>


                        </div>

                        <div className="list-table-formate">

                            <p>1563124</p>
                            <p>John Doe</p>
                            <p>Percussion</p>

                            <p>$120</p>
                            <p>12-08-2023</p>


                        </div>






                    </div>

                </div>


                <div className="table">

                <div class='title'>
                        <div>
                        <h2>BEST STUDENTS</h2>

                        </div>
                        <div>
                            <p>View All students</p>
                        </div>
                   
                    </div>

                    <div className="container">

                        <div className="list-table-formate-2 title">
                            <b>Reg.No</b>
                            <b>F.Name</b>
                            <b>L.Name</b>
                            <b>Course #</b>
                            <b>Total Fees</b>
                            <b>Req.Data</b>

                        </div>

                        <div className="list-table-formate-2">

                            <p>43422</p>
                            <p>John</p>
                            <p>Doe</p>

                            <p>$300</p>
                            <p>01-6-2023</p>

                        </div>

                        <div className="list-table-formate-2">

                            <p>43422</p>
                            <p>John</p>
                            <p>Doe</p>

                            <p>$300</p>
                            <p>01-6-2023</p>





                        </div>

                        <div className="list-table-formate-2">

                            <p>43422</p>
                            <p>John</p>
                            <p>Doe</p>

                            <p>$300</p>
                            <p>01-6-2023</p>





                        </div>





                    </div>

                </div>






            </div>

        </div>










    )
}

export default Home