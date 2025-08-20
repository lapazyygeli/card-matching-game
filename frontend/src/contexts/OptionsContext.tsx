import { createContext, useContext, useState, type ReactNode } from 'react'

type Options = {
  cardCount: number
}

export const OptionsContext = createContext<{
  options: Options
  setOptions: (opts: Options) => void
}>({
  options: { cardCount: 8 },
  setOptions: () => {},
})

export function OptionsContextProvider({ children }: { children: ReactNode }) {
  const [options, setOptions] = useState<Options>({ cardCount: 8 })

  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      {children}
    </OptionsContext.Provider>
  )
}

export function useOptions(): [Options, (opts: Options) => void] {
  const { options, setOptions } = useContext(OptionsContext)
  return [options, setOptions]
}
