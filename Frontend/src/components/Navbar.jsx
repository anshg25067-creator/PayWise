import { Link } from "react-router-dom"

import "../styles/navbar.css"

function Navbar({ openModal }) {

  return (
    <nav className="navbar">

      <h2>₹ Pay Wise</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/friends">Friends</Link>

        <Link to="/dashboard">Dashboard</Link>

        <button
          className="login-nav-btn"
          onClick={openModal}
        >
          Login
        </button>

      </div>

    </nav>
  )
}

export default Navbar