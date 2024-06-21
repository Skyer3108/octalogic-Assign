import { useState } from "react"

import { useNavigate,Link } from "react-router-dom"


const Login = () => {

    const navigate=useNavigate()

    const [data, setData] = useState({
        
        email: "",
        password: ""
    })


    const onChangeHandler = (event) => {

        const name = event.target.name
        const value = event.target.value
    
        setData(data=>({...data,[name]:value}))
        

    }

    const handleLogin=(e)=>{

        e.preventDefault()

        const loggedUser=JSON.parse(localStorage.getItem('user'))

        if(data.email===loggedUser.email&&data.password===loggedUser.password){

            localStorage.setItem('loggedin',true)
            navigate('/')

        }
        else{
            alert('Worng Email or Password')
        }

    }


    

    return (
        <div className='login-popup min-vh-100 container d-flex justify-content-center align-items-center'>

<form onSubmit={handleLogin}>

    <div>
    <h1>Login</h1>
    </div>

    <div className="mb-3">
    <input className="form-control" name='email' onChange={onChangeHandler} value={data.email} placeholder='Enter Your Email' type='email' required />
    </div>


<div className="mb-3">
<input className="form-control" name='password' onChange={onChangeHandler} value={data.password} placeholder='Enter Your Password' type='password' required />
</div>



<button className="btn btn-primary" type='submit'>Login</button>

<p>Don't have an Account ?
    <Link to='/register'>
    <span>Register here</span>
    </Link>
</p>


 </form>

        </div>
    )
}

export default Login