import { useNavigate,Link } from "react-router-dom"
import { useState } from "react"


const Register=()=>{


    const navigate=useNavigate()


    const [currentState, setCurrentState] = useState("Login")

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })


    const onChangeHandler = (event) => {

        const name = event.target.name
        const value = event.target.value
    
        setData(data=>({...data,[name]:value}))
        

    }

    const handleSubmit = (e) => {

        e.preventDefault()

        localStorage.setItem('user', JSON.stringify(data))

        navigate('/login')

    }


    return(
         <div>



       
<div className='login-popup min-vh-100 container d-flex justify-content-center align-items-center'>



<form onSubmit={handleSubmit} className="login-popup-container">
    <div className="login-pop-tittle">
        <h2>Register</h2>

        {/* <img onClick={() => setShowLogin(false)} src={assets.cross_icon} /> */}
    </div>

    <div className='login-popup-input'>

        <div className="mb-3">
        <input className="form-control" name='name' onChange={onChangeHandler} value={data.name} placeholder='Enter Your Name' type='text' required />
        </div>



          <div className="mb-3">
          <input className="form-control"  name='email' onChange={onChangeHandler} value={data.email} placeholder='Enter Your Email' type='email' required />
          </div>

          <div className="mb-3">
          <input className="form-control"  name='password' onChange={onChangeHandler} value={data.password} placeholder='Enter Your Password' type='password' required />
          </div>
       


        

       
    </div>

    <button type='submit' className='btn btn-primary'>{currentState === 'Sign Up' ? "Create Account" : "Login"}</button>

    <div className="login-popup-condition">
        <input type="checkbox" required />
        <p>By continuing, i agree to the terms of use & privacy policy</p>
    </div>

    <p>Have already an Account ?
    <Link to='/login'>
    <span>Login here</span>
    </Link>
</p>
    {/* {
currentState === 'Login' ? <p>Create a new account ? <span onClick={() => setCurrentState('Sign Up')}>Click Here</span></p>
: <p>Already have a account ? <span onClick={() => setCurrentState('Login')}>Login here</span></p>
} */}


</form>


</div>

       </div>





    )
}

export default Register