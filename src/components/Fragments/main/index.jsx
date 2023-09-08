import CardCat from './CardCat'

const Main = ({ cats }) => {
  return (
    <main className='p-4 text-2xl text-zinc-800 bg-zinc-400 min-h-[calc(100vh-4rem)]'>
      <h1 className='text-4xl font-semibold'>list Cats</h1>
      <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-10'>
        <CardCat cats={cats} />
      </div>
    </main>
  )
}
export default Main
