import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Quiz from "./components/Quiz"

export default function App() {
  const [start, setStart] = useState(false)
  return (
    <>
      <Header />
      {start ? <Quiz /> : <Home onStart={() => setStart(true)} />}
      <Footer />
    </>
  )
}
