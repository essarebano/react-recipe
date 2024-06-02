import { Link, useLocation } from "react-router-dom"

const Links = [
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

interface NavLinksProps {
  isVertical?: boolean
  hide?: boolean
}

function NavLinks({
  isVertical,
  hide
}: NavLinksProps) {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className={`flex items-center justify-center ${isVertical ? 'flex-col' : 'flex-row md:block hidden'}`}>
      <ul className={`flex ${isVertical ? 'flex-col space-y-2' : 'flex-row space-x-4' }`}>
        {Links.map(link => {
          return (
            <li key={`nav-link_${link.label.toLowerCase()}`}>
              <Link
                to={link.to} className={`block p-2
                ${isActive(link.to) ? 'text-yellow-500' : 'text-white'} uppercase
                hover:text-yellow-500 font-semibold`}
              >
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavLinks