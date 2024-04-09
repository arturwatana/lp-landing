import { useEffect, useState } from 'react'
import MainSection from './Components/MainSection'
import SecondSection from './Components/SecondSection'
import ThirdSection from './Components/ThirdSection'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <MainSection/>
      <SecondSection/>
      <ThirdSection/>
    </>
  )
}

export default App
