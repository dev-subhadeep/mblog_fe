import Navbar from "./components/Navbar"
import CreatePost from "./pages/CreatePost"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ShowPosts from "./pages/ShowPosts"

function App() {
  return (
    <>
      <Register />
      <Login />
      <CreatePost />
      <ShowPosts />
    </>
  )
}

export default App
