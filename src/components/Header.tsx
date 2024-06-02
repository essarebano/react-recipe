import { Link, useLocation } from "react-router-dom"

const navLinks = [
  {
    to: '/',
    label: 'Home'
  },
  {
    to: '/recipes',
    label: 'Recipes'
  },
  {
    to: '/about',
    label: 'About'
  },
  {
    to: '/contact-us',
    label: 'Contact Us'
  },
]

interface HeaderProps {
  onToggleSidePanel: () => void
}

function Header({ onToggleSidePanel }: HeaderProps) {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <div
        className="bg-cover bg-center hidden md:h-96 md:block"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080')" }}
      >
        <div className="flex justify-center items-center h-full">
          <img
              src="https://placehold.co/150x150"
              alt="Just Cook Logo"
              className="w-40 h-40"
            />
        </div>
      </div>

    <header className="sticky top-0 z-50 bg-[#423736]">
    <nav className="container mx-auto py-4 px-2 space-x-4 flex md:justify-center justify-end items-center ">
      <div className="md:hidden">
        <button onClick={onToggleSidePanel} className="text-[#f3c70c] focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div className="md:flex md:items-center justify-center hidden">
        <ul className="flex flex-col md:flex-row md:space-x-4">
          {navLinks.map(navLink => {
            return (
              <li key={`nav-link_${navLink.label.toLowerCase()}`}>
                <Link
                  to={navLink.to} className={`block p-2
                  ${isActive(navLink.to) ? 'text-yellow-500' : 'text-white'} uppercase
                  hover:text-yellow-500 font-semibold`}
                >
                  {navLink.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      </nav>
    </header>
    </>
  );
}

export default Header;