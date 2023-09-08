const CardCat = ({ cats }) => {
  return (
    <>
      {cats.map((cat) => (
        <div
          className='overflow-auto p-2 flex flex-col items-start justify-start w-60 h-60 bg bg-zinc-50 rounded-md'
          key={cat.id}
        >
          <h3 className='font-semibold text-2xl'>{cat.name}</h3>
          <div className='flex flex-col h-[calc(100%-2rem)]'>
            <p className='font-semibold'>--</p>
            <h4 className='text-xl font-semibold'>Temperament :</h4>
            <p className='text-base'>{cat.temperament}</p>
          </div>
          <p className='text-base'><span className='font-semibold'>Origin :</span> {cat.origin}</p>
        </div>
      ))}
    </>
  )
}
export default CardCat
