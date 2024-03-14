import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<h1>HELLO</h1>} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
