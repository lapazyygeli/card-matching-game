import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router'

export function About() {
  return (
    <div className="min-h-full bg-gray-200 font-mono">
      <h2 className="text-2xl text-center text-green-600 font-semibold py-[6vh]">
        About
      </h2>
      <div className="flex justify-center text-gray-700">
        <div className="max-w-80 sm:max-w-2xl p-6 sm:p-8 bg-white border-gray-300 shadow">
          <p className="pb-8 leading-relaxed first-letter:text-2xl first-letter:font-light">
            Welcome to the Memory card game! Test your focus and memory by
            flipping cards and finding matching pairs. It’s simple, addictive,
            and perfect for players of all ages.
          </p>
          <div className="flex justify-center sm:justify-start items-center">
            <ul className="flex flex-col gap-y-2">
              {[
                'Flip two cards to reveal their faces',
                'If the cards match, you get them',
                'If not, they flip back. Three consecutive wrong guesses cause a loss',
                'Keep going until all cards are matched',
              ].map((text, i) => (
                <li key={i} className="flex gap-x-4">
                  <ArrowLongRightIcon className="w-5 h-5 shrink-0 mt-[4px] text-green-500" />
                  <p className="grow">{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center pt-12">
            <Link
              to="/"
              className="text-center w-full sm:w-80 mt-4 py-3 border border-green-500 text-green-600 hover:text-white font-semibold hover rounded hover:bg-green-500 transition"
            >
              Back to menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
