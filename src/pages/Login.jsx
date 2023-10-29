import axios from "axios"
import React, { useState } from "react"
import { dburl } from "../utils/constants"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [token, setToken] = useState("")

  const handleFormChange = (e) => {
    const { name, value } = e.target
    if (name === "username") {
      setUsername(value)
    }
    if (name === "password") {
      setPassword(value)
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const formData = {
      username,
      password,
    }
    // console.log(formData)
    axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(formData),

      url: `${dburl}/user/login`,
    })
      .then((res) => {
        const token = res.data.token
        localStorage.setItem("token", token)
        setMessage(res.data.message)
        setToken(res.data.token)
      })
      .catch((error) => setMessage(error))
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onChange={handleFormChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleFormChange} />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
      <p>{message}</p>
      <p>Token: {token}</p>
      <hr />
    </div>
  )
}

export default Login
