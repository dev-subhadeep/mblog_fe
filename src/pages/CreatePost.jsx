import axios from "axios"
import React, { useState } from "react"

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [message, setMessage] = useState("")

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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN1YmhhZGVlcCIsInVzZXJJRCI6IjY1M2RmZmQwODIwOTRiZjdmZDNlYzVhMiIsImlhdCI6MTY5ODU2MzE2MiwiZXhwIjoxNzAwOTgyMzYyfQ.qC7ua6IogLgs0qrIAMmSH1s_IAg1mcOWYzRMi7NGkEE",
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
