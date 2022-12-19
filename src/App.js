import Quote from "./components/Quote"
import React, { useState} from "react"
// import Header from "./components/Header"
// import Icons from "./components/Icons"
 


export default function App() {
  const [quote, setQuote] = useState({
    anime: "One Piece",
    character: "Trafalgar D. Water Law",
    quote: "The weak don’t get to decide anything, not even how they die."
  })

  const [image, setImage] = useState('url("Images/one-loop5.gif")')

  var images = ['url("Images/one-loop.gif")', 'url("Images/one-loop2.gif")']

  function changeImage() {
    setImage(images[Math.floor(Math.random() * images.length)])
  }



  const [color, setColor] = useState("#07687b")

  var colors = ['#1e6da0', '#378dae', '#3c7596', '#00245c', '#438d98', '#675390', '#3c377b']

  function changeColor() {
    setColor(colors[Math.floor(Math.random() * colors.length)])
  }


  const fetchQuote = async() => {
    return await fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
  }

  async function fetchData() {
      setQuote(await fetchQuote())
      changeColor()
      changeImage()
    }

  // const image = 'url("Images/one-loop5.gif")'

  const myStyle = {
    backgroundColor: color,
    color: color,
    backgroundImage: image,
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover"
  }

  const bg = {
    backgroundColor: color
  }

  const col = {
    color: color
  }

  return (
    <div className= "App" style={myStyle}>
      
      <Quote card={quote} bg={bg} col={col} fetchData={fetchData} style={col}/>
      
    </div>
  )
}