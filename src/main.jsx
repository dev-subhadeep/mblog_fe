import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import ShowPosts from "./pages/ShowPosts.jsx"
import CreatePost from "./pages/CreatePost.jsx"
import Layout from "./layout.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<ShowPosts />} />
      <Route path="create" element={<CreatePost />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  // <App />
  <RouterProvider router={router} />
  // </BrowserRouter>
)
