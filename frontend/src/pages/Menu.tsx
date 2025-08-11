import { Link } from 'react-router'

export function Menu() {
  return (
    <div className="h-full bg-gray-50 flex justify-center items-center p-2">
      <div className="flex flex-col items-center w-max mb-[25vh]">
        <Link
          to="/game"
          className="block w-56 py-3 mb-11 bg-green-500 hover:bg-green-600 rounded shadow cursor-pointer text-white font-semibold hover:scale-105 transition-transform duration-300 text-center"
        >
          Play game
        </Link>
        <Link
          to="/options"
          className="block w-56 py-3 mb-3 bg-green-500 hover:bg-green-600 rounded shadow cursor-pointer text-white font-semibold hover:scale-105 transition-transform duration-300 text-center"
        >
          Options
        </Link>
        <Link
          to="/about"
          className="block w-56 py-3 bg-green-500 hover:bg-green-600 rounded shadow cursor-pointer text-white font-semibold hover:scale-105 transition-transform duration-300 text-center"
        >
          About
        </Link>
      </div>
    </div>
  )
}
