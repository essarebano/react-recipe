import { Outlet, useLocation } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import SidePanel from "../components/SidePanel"
import { useEffect, useRef, useState } from "react"
import Banner from "../components/Banner"
import NavLink from "../components/NavLinks"

function Layout() {
  const [isToggled, setIsToggled] = useState<boolean>(false)
  const location = useLocation()

  const panelRef = useRef<HTMLDivElement>(null)

  const handleOnToggleSidePanel = () => {
    setIsToggled(toggled => !toggled)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsToggled(!isToggled)
      }
    };

    if (isToggled) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isToggled]);

  useEffect(() => {
    setIsToggled(false)
  }, [location])

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100">
      <Banner />
      <Header onToggleSidePanel={handleOnToggleSidePanel} >
        <NavLink />
      </Header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <SidePanel
        ref={panelRef}
        open={isToggled}
        onToggle={handleOnToggleSidePanel}
        isRight
      >
        <NavLink isVertical/>
      </SidePanel>
    </div>
  )
}

export default Layout