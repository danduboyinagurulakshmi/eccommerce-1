import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate("/Products"); 
  };

  
  
  return (
    <>
    <div className="login-page">
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        Username: <input type="text" placeholder="Username"/><br/>
        <br/>
        Password: <input type="password" placeholder="password"/><br/>
        <br/>
        <button>Login</button>
        <br/>
      </form>
      <p>New user?<Link to="/Signup">Signup</Link></p>
    </div>
     <div className="footer-clg1">
            <footer>
                <p>&copy; 2026 KSRM COLLEGE OF Engineering.</p>
            </footer>

        </div>
    </>
  );
}

export default Login;




