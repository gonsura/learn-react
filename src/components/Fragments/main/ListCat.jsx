const ListCat = ({ cats }) => {
  return (
    <>
      {cats.map((cat) => (
        <li className='p-2 bg bg-zinc-50 mt-2 rounded-md' key={cat.id}>
          {cat.name}
        </li>
      ))}
    </>
  )
}
export default ListCat
