import NavBtnIcon from './NavBtnIcon'


const NavBtn = ({onClick, isOpen}) => {
  return (
    <button
        onClick={onClick}
        className={`md:hidden top-0 right-0 p-6 text-4xl ${
          isOpen ? 'absolute z-20' : 'static'
        }`}
      >
        <NavBtnIcon isOpen={isOpen} />
      </button>
  )
}
export default NavBtn