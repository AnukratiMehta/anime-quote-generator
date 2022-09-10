import Quote from "./components/Quote"
import React, { useState } from "react"
import Header from "./components/Header"
import Icons from "./components/Icons"

export default function App() {
  const [quote, setQuote] = useState({
    anime: "",
    character: "",
    quote: ""
  })


  const fetchQuote = async() => {
    return await fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
  }

  async function fetchData() {
        setQuote(await fetchQuote())
    }

  // useEffect(() => {
  //   async function fetchData() {
  //     setQuote(await fetchQuote())
  //   } return fetchData()
  // }, [])


  return (
    <div className="App">
      <Header />
      <Icons />
      <Quote card={quote}/>

      <button onClick={fetchData}>New Quote</button>
      
      
    </div>
  )
}