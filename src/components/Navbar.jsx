import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Show My Posts</Link>
        </li>
        <li>
          <Link to="/create">Create New Post</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link>Logout</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
