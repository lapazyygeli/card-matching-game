import { Gameboard } from '../components/Gameboard'
import { Navbar } from '../components/Navbar'

export function Game() {
  return (
    <div className="min-h-full bg-gray-200">
      <Navbar />
      <Gameboard />
    </div>
  )
}
