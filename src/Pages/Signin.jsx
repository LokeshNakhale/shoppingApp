import React, { useState } from 'react'
import "./loginsignup.css"
import { Link, useNavigate } from 'react-router-dom'
const Signin = () => {


  const userDetail={
    name:'',
    email:'',
    password:''
  }
  const [data, setData] = useState(userDetail)

  const nagivate =useNavigate()

  const handleInput=(event)=>{
  const name = event.target.name
  const value = event.target.value

    setData({...data,[name]:value})
  }
  
  const handleSubmit=(event)=>{
  //  event.preventDefault()
   if(data.name==''|| data.email==''||data.password==''){
    alert('please enter your email')
   }else{
        const getData= JSON.parse(localStorage.getItem('user')||'[]')
      let arr = []
        arr= [...getData]
        arr.push(data)

   localStorage.setItem('user',JSON.stringify(arr));
   alert('Sign up sucessfully')
   nagivate('/Men')
   }
   
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} action="">
         <div>
           <p>Sign Up</p>
         </div>
          <div className="account">
            <input type="text"  name='name' placeholder='enter your name' onChange={handleInput} />
            <input type="email"  name='email' placeholder='enter your email' onChange={handleInput} />
            <input type="password"  name='password' placeholder='enter your password' onChange={handleInput} />
            <p>Already have an account <Link to="/Login">Login</Link> </p>
          </div>
          <button id='Fbtn' >SignUp</button>
        </form>
      </div>
    </div>
  )
}

export default Signin
