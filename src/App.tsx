import { useEffect, useState } from 'react'
import MainSection from './Components/MainSection'
import SecondSection from './Components/SecondSection'
import ThirdSection from './Components/ThirdSection'
import Footer from './Components/Footer'
import Header from './Components/Header'
import FourthSection from './Components/FourthSection'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header/>
      <MainSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <Footer/>
    </>
  )
}

export default App
