type ImageModuleNamespaceObject = { default: string }
const avatarModules = import.meta.glob<ImageModuleNamespaceObject>(
  // The <Type> syntax tells the compiler
  // what the types of the object’s values are.
  '../assets/cards/*.png',
  { eager: true }
)

function getAvatars() {
  return Object.values(avatarModules).map(
    (modNamespaceObj) => modNamespaceObj.default
  )
}

function getRandomAvatars(count: number) {
  return getAvatars()
    .sort(() => 0.5 - Math.random())
    .filter((_, i) => i < count)
}

export type Card = {
  id: number
  avatar: string
  isOpen: boolean
}
export function getRandomCards(count: number): Card[] {
  const randomAvatars = getRandomAvatars(count / 2)
  const pairedAvatars = [...randomAvatars, ...randomAvatars]
  const shuffled = pairedAvatars.sort(() => 0.5 - Math.random())
  return shuffled.map((avatar, i) => ({
    id: i,
    avatar,
    isOpen: false,
  }))
}
