import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-yellow-500 text-white py-2 px-4 rounded">
        Go back to Home
      </Link>
    </div>
  )
}

export default NotFound