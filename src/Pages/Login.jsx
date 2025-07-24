import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const [msg, setMsg] = useState('')

const handelInput=(event)=>{
    const value = event.target.value
    const name= event.target.name
    // ise email ke ander email hi jai ga or password ke ander pass.. hi jai ga
    if('email'== name){
        setEmail(value)
    }
    if('password'== name){
        setpassword(value)
    }

}
const handleSubmit=(event)=>{
event.preventDefault()
let getDetails = JSON.parse(localStorage.getItem('user'))
console.log(getDetails);
// .map se jo hai vo data seperate hoke milara 
getDetails.map((curValue)=>{ 
    console.log(curValue);
    let storeEmail = curValue.email;
    let storePassword = curValue.password

    if(storeEmail == email && storePassword == password){
        alert('login sucessfully')
    }else{
      return  setMsg('invalid email or password')
    }
    
})

}
  return (
    <div>
      <div>
        
        <form onSubmit={handleSubmit}>
         <div>
           <p>LogIn</p>
         </div>
          <div className="account">
            
            <input type="email"  name='email' placeholder='enter your email' onChange={handelInput} />
            <input type="password"  name='password' placeholder='enter your password' onChange={handelInput} />
            <p>Create an account <Link to="/Singin">SinUp</Link> </p>
          </div>
           <button id='Fbtn' > SignUp</button>
          <p className='wrong'> {msg} </p>
        </form>
      </div>
    </div>
  )
}

export default Login
