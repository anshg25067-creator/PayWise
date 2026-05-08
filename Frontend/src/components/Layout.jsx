import { useState } from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"
import AppRoutes from "../routes/AppRoutes"
import LoginModal from "./LoginModal"

function Layout() {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Navbar openModal={() => setShowModal(true)} />

      <AppRoutes />

      <Footer />

      {
        showModal && (
          <LoginModal
            closeModal={() => setShowModal(false)}
          />
        )
      }
    </>
  )
}

export default Layout