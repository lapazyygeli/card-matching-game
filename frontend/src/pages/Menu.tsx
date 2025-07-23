export function Menu() {
  return (
    <div className="h-full bg-gray-50 flex justify-center items-center p-2">
      <div className="flex flex-col items-center w-max mb-[25vh]">
        <button className="w-56 py-3 mb-11 bg-green-500 hover:bg-green-600 rounded shadow cursor-pointer text-white font-semibold hover:scale-105 transition-transform duration-300">
          Play the game
        </button>
        <button className="w-56 py-3 mb-3 bg-green-500 hover:bg-green-600 rounded shadow cursor-pointer text-white font-semibold hover:scale-105 transition-transform duration-300">
          Options
        </button>
        <button className="w-56 py-3 bg-green-500 hover:bg-green-600 rounded shadow cursor-pointer text-white font-semibold hover:scale-105 transition-transform duration-300">
          About
        </button>
      </div>
    </div>
  )
}
