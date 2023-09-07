import Navbar from './components/Fragments/Navbar'
import Main from './components/Fragments/main'
import { useState, useEffect } from 'react';

const  App = () => {
  const [cats, setCats] = useState([])
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then((res) => res.json())
      .then((data) => {
        setCats(data)
      })
  }, [])
  return (
    <>
      <Navbar />
      <Main cats={cats}/>
    </>
  )
}

export default App
