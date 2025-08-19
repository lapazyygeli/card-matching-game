import { Link } from 'react-router'

export function Options() {
  return (
    <div className="min-h-full bg-gray-200 font-mono">
      <h2 className="text-2xl text-center text-green-600 font-semibold py-[6vh]">
        Options
      </h2>
      <div className="flex justify-center text-gray-700">
        <div className="max-w-80 sm:max-w-2xl p-6 sm:p-8 bg-white border-gray-300 shadow">
          <p className="pb-8 leading-relaxed first-letter:text-2xl first-letter:font-light">
            Choose how many cards you want to play with. The more cards you
            pick, the bigger the challenge.
          </p>
          <div className="text-gray-600">
            <div className="flex justify-between border-b-2 pb-1 border-gray-400">
              <p className="hidden sm:block w-1/5">CARD COUNT:</p>
              <label htmlFor="count-8" className="w-1/5 text-center">
                8
              </label>
              <label htmlFor="count-12" className="w-1/5 text-center">
                12
              </label>
              <label htmlFor="count-16" className="w-1/5 text-center">
                16
              </label>
              <label htmlFor="count-24" className="w-1/5 text-center">
                24
              </label>
            </div>
            <div className="flex justify-between pt-4">
              <p className="hidden sm:block w-1/5">SELECT:</p>
              <input id="count-8" className="w-1/5" type="radio" />
              <input id="count-12" className="w-1/5" type="radio" />
              <input id="count-16" className="w-1/5" type="radio" />
              <input id="count-24" className="w-1/5" type="radio" />
            </div>
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
