import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout