import type { Card as CardType } from '../utils/cards'
import { Card } from './Card'

type CardListProps = {
  cards: CardType[]
  openCard: (id: number) => void
}

export function CardList({ cards, openCard }: CardListProps) {
  return (
    <div className="grid gap-4 justify-center grid-cols-[repeat(auto-fill,_minmax(80px,_1fr))] ">
      {cards.map((card) => (
        <div className="aspect-square" key={card.id}>
          <Card
            id={card.id}
            avatar={card.avatar}
            isOpen={card.isOpen}
            openCard={openCard}
          />
        </div>
      ))}
    </div>
  )
}
