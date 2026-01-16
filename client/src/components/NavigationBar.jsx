import { useNavigate } from "react-router-dom";
import "../styles/NavigationBar.css";

const NavigationBar = () => {
  const navigate = useNavigate();


  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <button onClick={() => navigate("/")} className="logo-btn">
              Logo
            </button>
          </div>
          <div className="nav-menu">
            <button
              onClick={() => navigate("/login")}
              className="nav-btn login-btn"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="nav-btn signup-btn"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>



    </>
  );
};

export default NavigationBar;
