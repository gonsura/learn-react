import { useState } from 'react'

const Main = ({ cats }) => {
  const [counter, setCounter] = useState(0)

  const decrement = () => {
    if (counter > 0) setCounter((prevCount) => prevCount - 1)
  }
  const increment = () => {
    if (counter < 10) setCounter((prevCount) => prevCount + 1)
  }

  return (
    <main className='p-4 text-2xl text-zinc-800 bg-zinc-400 min-h-[calc(100vh-4rem)]'>
      <div>
        <button onClick={decrement} className='bg-zinc-700 px-4'>
          -
        </button>
        <span className='mx-6'>{counter}</span>
        <button onClick={increment} className='bg-zinc-700 px-4'>
          +
        </button>
      </div>
      <h1 className='text-4xl font-semibold'>list Cats</h1>
      <ul className='flex flex-wrap gap-x-4'>
        {cats.map((cat) => (
          <li className='p-2 bg bg-zinc-50 mt-2 rounded-md' key={cat.id}>
            {cat.name}
          </li>
        ))}
      </ul>
    </main>
  )
}
export default Main
