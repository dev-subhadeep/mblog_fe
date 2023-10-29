import axios from "axios"
import React, { useEffect, useState } from "react"

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [message, setMessage] = useState("")
  const [token, setToken] = useState(localStorage.getItem("token"))

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleBody = (e) => {
    setBody(e.target.value)
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    const blog = {
      title,
      body,
    }
    // console.log(blog)
    axios({
      method: "post",
      url: "https://fair-gear-hen.cyclic.app/posts/create",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify(blog),
    })
      .then((res) => setMessage(res.data.post.title))
      .catch((error) => console.log(error))
  }
  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
        </div>
        <div>
          <input type="text" name="title" onChange={handleTitle} />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
        </div>
        <div>
          <input
            type="text"
            name="body"
            style={{ height: "100px" }}
            onChange={handleBody}
          />
        </div>
        <div>
          <button>Post</button>
        </div>
      </form>
      <p>Created new blog: {message}</p>
      <hr />
    </div>
  )
}

export default CreatePost
