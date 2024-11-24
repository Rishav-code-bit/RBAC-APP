import React from "react";
import { BrowserRouter as Router,Routes,Route,Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import Admin from "./components/admin"; // Import Admin component
import User from "./components/user"; // Import User component

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn"); // Check if logged in
  const role = window.localStorage.getItem("role"); // Get user type (Admin/User)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/User" element={<User />}/>
          <Route path="/Admin" element={<Admin />}/>
          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
