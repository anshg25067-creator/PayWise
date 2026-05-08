import "../styles/modal.css"

function LoginModal({ closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <button className="close-btn" onClick={closeModal}>
          X
        </button>

        <h2>Login</h2>

        <input type="text" placeholder="Enter email" />

        <input type="password" placeholder="Enter password" />

        <button className="login-btn">
          Login
        </button>

      </div>
    </div>
  )
}

export default LoginModal