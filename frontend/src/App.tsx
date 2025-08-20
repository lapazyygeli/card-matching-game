import { RouterProvider } from 'react-router'
import { router } from './routes.tsx'
import { OptionsContextProvider } from './contexts/OptionsContext.tsx'

function App() {
  return (
    <OptionsContextProvider>
      <RouterProvider router={router} />
    </OptionsContextProvider>
  )
}

export default App
