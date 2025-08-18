import { useState } from 'react'
import { CardList } from './CardList'
import { getRandomCards } from '../utils/cards'

export function Gameboard({}) {
  // const [cardCount, (setCardCount)] = tähä custom hook,
  // joka hakee sen Optionsseista
  const cardCount = 10

  const [cards, setCards] = useState(() => {
    return getRandomCards(cardCount)
  })

  const openCard = (id: number) => {
    setCards((prev) => {
      return prev.map((card) =>
        card.id === id ? { ...card, isOpen: true } : card
      )
    })
  }

  return (
    <div>
      <div className="flex justify-center py-8">
        <div className="w-full max-w-2xl p-4 bg-white">
          <div className="flex gap-4 mr-2 justify-end pb-6 text-[0.8rem]">
            <p className=" text-gray-700">Attempts left:</p>
            <p className="text-gray-700">Elapsed time:</p>
          </div>
          <CardList cards={cards} openCard={openCard} />
        </div>
      </div>
    </div>
  )
}
