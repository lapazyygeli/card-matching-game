import { Card } from './Card'

type ImageModuleNamespaceObject = { default: string }
const avatarModules = import.meta.glob<ImageModuleNamespaceObject>(
  // The <Type> syntax tells the compiler
  // what the types of the object’s values are.
  '../assets/cards/*.png',
  { eager: true }
)
const avatars = Object.values(avatarModules).map(
  (modNamespaceObj) => modNamespaceObj.default
)

export function Gameboard() {
  return (
    <div>
      <div className="flex justify-center py-8">
        <div className="w-full max-w-2xl p-4 bg-white">
          <div className="flex gap-4 mr-2 justify-end pb-6 text-[0.8rem]">
            <p>Attempts left:</p>
            <p>Elapsed time:</p>
          </div>
          <div className="grid gap-4 justify-center grid-cols-[repeat(2,80px)] sm:grid-cols-[repeat(4,90px)]">
            {avatars.map((avatar, i) => (
              <div className="aspect-square" key={i}>
                <Card avatar={avatar} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
