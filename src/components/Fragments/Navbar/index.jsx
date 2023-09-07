import NavMenu from './NavMenu'
const Navbar = () => {
        return (
        <nav className='py-2 px-4 text-2xl text-zinc-100 bg-zinc-800 h-16 flex justify-between items-center'>
            <h1 className='font-bold text-4xl'><i className='ri-braces-line'></i></h1>
            <NavMenu />
        </nav>
    ) 
}

export default Navbar