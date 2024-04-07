import { useEffect, useState } from 'react'
import MainSection from './Components/MainSection'
import SecondSection from './Components/SecondSection'
import { Flex } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <MainSection/>
      <SecondSection/>
    </>
  )
}

export default App
