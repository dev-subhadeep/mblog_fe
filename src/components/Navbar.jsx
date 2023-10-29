import React from "react"

const Navbar = () => {
  return (
    <div>
      {/* <ul>
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
      </ul> */}

      <ul>
        <li>
          <a href="/">My Posts</a>
        </li>
        <li>
          <a href="/create">New + </a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
