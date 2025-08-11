type Props = {
  avatar: string
}

export function Card({ avatar }: Props) {
  return (
    <div>
      <img src={avatar} alt="avatar" />
    </div>
  )
}
