import { Link } from 'react-router'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <img src="/logo.svg" alt="Logo" className="w-12 h-auto" />

      <div className="flex flex-col font-montserrat dark:text-white transition-colors duration-200">
        <span className="text-sm tracking-wider">HORVATTI</span>
        <span className="text-xl font-bold tracking-wide">CHAMP</span>
      </div>
    </Link>
  )
}
