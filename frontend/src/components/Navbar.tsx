import { Link } from 'react-router'

type NavbarProps = {
  handleRestart: () => void
}

export function Navbar({ handleRestart }: NavbarProps) {
  return (
    <nav className="bg-white border-b-2 border-gray-300">
      <ul className="flex flex-wrap gap-x-4 gap-y-1 justify-center text-gray-700">
        <li>
          <Link
            to="/"
            className="block p-5 border-b-2 border-transparent hover:border-green-500 cursor-pointer whitespace-nowrap hover:text-gray-950"
          >
            Back to menu
          </Link>
        </li>
        <li>
          <button
            onClick={handleRestart}
            className="block p-5 border-b-2 border-transparent hover:border-green-500 cursor-pointer whitespace-nowrap hover:text-gray-950"
          >
            Restart
          </button>
        </li>
      </ul>
    </nav>
  )
}
