import Navbar from './components/Fragments/Navbar'
import Main from './components/Fragments/main'
import { useState, useEffect } from 'react'

const App = () => {
  const [cats, setCats] = useState([])
  const [query, setQuery] = useState('')
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then((res) => res.json())
      .then((data) => setCats(data))
      .catch((error) => console.log(error))
  }, [])

  const handleSearch = () => {
    if (!query) return cats
    return cats.filter((cat) =>
      cat.name.toLowerCase().includes(query.toLowerCase())
    )
  }
  return (
    <>
      <Navbar setQuery={setQuery} />
      <Main cats={handleSearch()} />
    </>
  )
}

export default App
