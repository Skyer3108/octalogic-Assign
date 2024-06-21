import {NavLink} from 'react-router-dom'
import './Sidebar.css'
//import {assets} from '../../assets'



import { useNavigate } from 'react-router-dom'

const Sidebar=()=>{

    const navigate=useNavigate()

    const handleLogout=()=>{
         localStorage.removeItem('loggedin')
 
         navigate('/login')
 
     }

    return(
        <div className='sidebar'>

            <div className='siderbar-options'>
   <div className='logo'>
    <img src='' alt='logo'/>
       </div>
            <NavLink to='/' className="sidebar-option">
                <p>Home</p>
            </NavLink>

            <NavLink to='/course' className="sidebar-option">
                <p>CourseList</p>
            </NavLink>

           

            </div>

            <button className='logout btn' onClick={handleLogout}>Logout</button>

            

        </div>
    )
}

export default Sidebar