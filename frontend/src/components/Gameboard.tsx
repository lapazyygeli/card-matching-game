export function Gameboard() {
  return (
    <div>
      <div className="flex justify-center pt-8">
        <div className="w-full max-w-2xl p-4 bg-white">
          <div className="flex gap-4 mr-2 justify-end pb-6 text-[0.8rem]">
            <p>Attempts left:</p>
            <p>Elapsed time:</p>
          </div>
          <div className="grid justify-center grid-cols-[repeat(2,80px)] sm:grid-cols-[repeat(4,90px)]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 12, 13, 14, 15, 16].map(
              (card, i) => (
                <div className="aspect-square" key={i}>
                  {card}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
