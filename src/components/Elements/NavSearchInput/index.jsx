const NavSearchInput = ({isOpen,setQuery}) => {
  return (
    <div className={`absolute inset-0 h-16 bg-zinc-800 px-10 py-2 transition-all ${isOpen ? '' : 'w-0 left-[-100vw]'}`}>
        <input
          type='text'
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search your favorite cat'
          className='outline-none p-2 w-full h-12 bg-inherit border-b-2 border-zinc-50'
        />
      </div>
  )
}
export default NavSearchInput