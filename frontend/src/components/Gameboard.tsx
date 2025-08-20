import { useEffect, useState } from 'react'
import { CardList } from './CardList'
import { getRandomCards, type Card } from '../utils/cards'
import { useOptions } from '../contexts/OptionsContext'

type GameState = 'playing' | 'won' | 'lost'

export function Gameboard({}) {
  const [options] = useOptions()
  const [cards, setCards] = useState(() => getRandomCards(options.cardCount))
  const [flippedCards, setFlippedCards] = useState<Card[]>([])
  const [attemptsLeft, setAttemptsLeft] = useState(3)
  const [gameState, setGameState] = useState<GameState>('playing')

  useEffect(() => {
    if (flippedCards.length === 2 && gameState === 'playing') {
      checkMatch()
    }
  }, [flippedCards])

  const resetGame = () => {
    setCards(getRandomCards(options.cardCount))
    setFlippedCards([])
    setAttemptsLeft(3)
    setGameState('playing')
  }

  const closeCards = (flipped: Card[]) => {
    const [first, second] = flipped
    setCards((prev) =>
      prev.map((card) =>
        card.id === first.id || card.id === second.id
          ? { ...card, isOpen: false }
          : card
      )
    )
  }

  const checkMatch = () => {
    const [first, second] = flippedCards
    if (first.avatar === second.avatar) {
      setAttemptsLeft(3)
      const allMatched = cards.every(
        (card) => card.isOpen || flippedCards.some((f) => f.id === card.id)
      )
      if (allMatched) setGameState('won')
    } else {
      if (attemptsLeft === 1) setGameState('lost')
      setAttemptsLeft((prev) => prev - 1)
      setTimeout(() => closeCards(flippedCards), 1000)
    }
    setFlippedCards([])
  }

  const openCard = (id: number) => {
    setCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, isOpen: true } : card))
    )
    setFlippedCards((prev) => {
      const newCard = cards.find((card) => card.id === id)
      return newCard ? [...prev, newCard].slice(-2) : prev
    })
  }

  return (
    <div>
      {/* Overlay for win/lose */}
      {gameState !== 'playing' && (
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4 z-10">
          {gameState === 'won' ? (
            <h2 className="text-2xl font-bold mb-2">
              🎉 Congratulations, you won!
            </h2>
          ) : (
            <h2 className="text-2xl font-bold mb-2">💀 You lost!</h2>
          )}
          <p className="mb-4">
            {gameState === 'won'
              ? 'You matched all the cards. Play again!'
              : 'Try again!'}
          </p>
          <button
            onClick={resetGame}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
          >
            Restart
          </button>
        </div>
      )}
      <div className="flex justify-center py-8">
        <div className="w-full max-w-2xl p-4 bg-white">
          <div className="flex gap-4 mr-2 justify-end pb-6 text-[0.8rem]">
            <p className=" text-gray-700">Attempts left: {attemptsLeft}</p>
            {/*<p className="text-gray-700">Elapsed time:</p>*/}
          </div>
          <CardList cards={cards} openCard={openCard} />
        </div>
      </div>
    </div>
  )
}
