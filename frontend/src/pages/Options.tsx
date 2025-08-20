import { Link } from 'react-router'
import { useOptions } from '../contexts/optionsContext'

export function Options() {
  const [options, setOptions] = useOptions()

  const handleClickOnCardCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptions({ cardCount: Number(e.target.value) })
  }

  const cardCount = [8, 12, 14, 18]

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
            {/* CARD COUNT Labels */}
            <div className="flex justify-between border-b-2 pb-1 border-gray-400">
              <p className="hidden sm:block w-1/5">CARD COUNT:</p>
              {cardCount.map((count) => (
                <label
                  key={count}
                  htmlFor={`count-${count}`}
                  className="w-1/5 text-center"
                >
                  {count}
                </label>
              ))}
            </div>

            {/* Radio Inputs */}
            <div className="flex justify-between pt-4">
              <p className="hidden sm:block w-1/5">SELECT:</p>
              {cardCount.map((count) => (
                <input
                  key={count}
                  id={`count-${count}`}
                  name="count"
                  type="radio"
                  className="w-1/5"
                  value={count}
                  checked={options.cardCount === count}
                  onChange={handleClickOnCardCount}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center pt-12">
            <Link
              to="/"
              className="text-center w-full sm:w-80 mt-4 py-3 border border-green-500 text-green-600 hover:text-white font-semibold rounded hover:bg-green-500 transition"
            >
              Back to menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
