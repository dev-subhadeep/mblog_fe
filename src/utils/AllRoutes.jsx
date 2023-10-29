import React from "react"
import { Routes, Route } from "react-router-dom"
import ShowPosts from "../pages/ShowPosts"
import Login from "../pages/Login"
import Register from "../pages/Register"
import CreatePost from "../pages/CreatePost"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ShowPosts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<CreatePost />} />
    </Routes>
  )
}

export default AllRoutes
