type CardProps = {
  id: number
  avatar: string
  isOpen: boolean
  openCard: (cardId: number) => void
}

export function Card({ id, avatar, isOpen, openCard }: CardProps) {
  return isOpen ? (
    <img src={avatar} alt="avatar" />
  ) : (
    <div
      onClick={() => openCard(id)}
      className="h-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition-[background-color] duration-300"
    />
  )
}
