import ListCat from './ListCat'

const Main = ({ cats }) => {
  return (
    <main className='p-4 text-2xl text-zinc-800 bg-zinc-400 min-h-[calc(100vh-4rem)]'>
      <h1 className='text-4xl font-semibold'>list Cats</h1>
      <ul className='flex flex-wrap gap-x-4'>
        <ListCat cats={cats} />
      </ul>
    </main>
  )
}
export default Main
