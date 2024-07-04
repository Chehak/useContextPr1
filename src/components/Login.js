import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext';

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext);
    const handleSubmit=()=>{
        setUser({username,password})
    }

    


  return (
    <div>
      <input type='text' value={username} placeholder='Enter Username' onChange={(e)=>setUsername(e.target.value)} />
      <input type='text' value={password} placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
