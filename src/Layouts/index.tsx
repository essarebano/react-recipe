import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import SidePanel from "../components/SidePanel"
import { useEffect, useRef, useState } from "react"

function Layout() {
  const [isToggled, setIsToggled] = useState<boolean>(false)

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

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100">
      <Header onToggleSidePanel={handleOnToggleSidePanel} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <SidePanel
        ref={panelRef}
        open={isToggled}
        onToggle={handleOnToggleSidePanel}
        isRight
      />
    </div>
  )
}

export default Layout