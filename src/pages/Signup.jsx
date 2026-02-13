import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Login"); 
  };

  return (
    <>
      <div className="register-page">
        <h1>Register Page</h1>

        <form onSubmit={handleSubmit}>
          <div>
            Name: <input type="text" placeholder="Enter your name" />
          </div>
          <br />

          <div>
            Email: <input type="email" placeholder="Enter your email" />
          </div>
          <br />

          <div>
            Password: <input type="password" placeholder="Enter your password" />
          </div>
          <br />

          <div>
            Phone Number: <input type="tel" placeholder="Enter your phone number" />
          </div>
          <br />

          <button type="submit">Register</button>

          <p>
            Old user? <Link to="/Login">Login here</Link>
          </p>
        </form>
      </div>

      <div className="footer-clg1">
        <footer>
          <p>&copy; 2026 KSRM COLLEGE OF Engineering.</p>
        </footer>
      </div>
    </>
  );
}

export default Signup;
