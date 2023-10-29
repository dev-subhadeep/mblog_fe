import axios from "axios"
import React, { useEffect, useState } from "react"
import Post from "../components/Post"

const ShowPosts = () => {
  const [posts, setPosts] = useState([])
  const [token, setToken] = useState(localStorage.getItem("token"))

  useEffect(() => {
    axios({
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: "https://fair-gear-hen.cyclic.app/posts/",
    })
      .then((res) => {
        if (Array.isArray(res.data.posts)) {
          setPosts(res.data.posts)
        } else {
          console.error("Response data is not an array:", res.data)
        }
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <div>
      <h2>My Posts</h2>
      {posts?.map((post) => (
        <Post title={post.title} body={post.body} key={post._id} />
      ))}
    </div>
  )
}

export default ShowPosts
