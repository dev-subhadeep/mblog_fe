import axios from "axios"
import React, { useState } from "react"

const Register = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
  }
  const [formData, setFormData] = useState(initialState)
  const [message, setMessage] = useState("")

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    axios({
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      data: JSON.stringify(formData),
      url: "https://fair-gear-hen.cyclic.app/user/create",
    })
      .then((res) => setMessage(res.data.message))
      .catch((error) => setMessage(error))
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onChange={handleFormChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleFormChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleFormChange} />
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
      <p>{message}</p>
      <hr />
    </div>
  )
}

export default Register
