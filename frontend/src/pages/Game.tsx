import { useState } from 'react'
import { Gameboard } from '../components/Gameboard'
import { Navbar } from '../components/Navbar'

export function Game() {
  // key to force remount Gameboard for refresh
  const [key, setKey] = useState(0)

  const handleRestart = () => {
    setKey((prev) => prev + 1)
  }

  return (
    <div className="min-h-full bg-gray-200">
      <Navbar handleRestart={handleRestart} />
      <Gameboard key={key} />
    </div>
  )
}
