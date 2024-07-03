import React, { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext';

const Login = () => {
    const [username,setUserName] = useState(null);
    const [password,setpassword] = useState(null);

    const {setUser} = useContext(UserContext)

    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div>
      <input type='text' placeholder='username' value={username} onChange={(e)=>setUserName(e.target.value)}/>
      <input type='text' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
      <button type='button' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
