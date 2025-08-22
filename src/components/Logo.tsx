import { Link } from 'react-router'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img src="/logo.svg" alt="Logo" className="w-20" />
    </Link>
  )
}
