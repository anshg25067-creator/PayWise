import "../styles/modal.css"

function LoginModal({ closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h1 className="top">Hello! </h1>
        <p className="started">Sign In to get started</p>

        <button className="close-btn" onClick={closeModal}>
          X
        </button>

        <h2 className="log">Login</h2>

        <input type="text" placeholder="👤 Username" />

        <input type="password" placeholder="🔒 Password" />

        <button className="login-btn">
          Log In
        </button>

        <button className="register">Register</button>

 
      </div>
    </div>
    
  )
}

export default LoginModal