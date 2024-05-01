import React from 'react'

const LoginPage = () => {
  const [userData, setuserData] = useState({})
  const handleSubmit=(e)=>{
e.preventDefault();
    console.log(userData)
  }

  const handleChange=(e)=>{
const  {name,value}=e.target
    setuserData({
      ...userData,
      name:value
    })
  }
  return (
    <div>
      <div>
        <label>email</label>
        <input name="email" onChange={handleChange} />
      </div>   
      <div>
        <label>password</label>
        <input name="password" onChange={handleChange} />
      </div>
<button onClick={handleSubmit} >Login</button>
    </div>
  )
}




export default LoginPage
