import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import './style.scss'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {
  const  currentUser  = useContext(AuthContext)
  console.log("from app",currentUser)

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login" />
    }else{
      return (
        <Home />
      )
    }
  }


  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={
            <ProtectedRoute />
          } />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

      </Routes>

    </Router>


    // <Register />
    // <Login />
    // <Home />
  )
}

export default App;
