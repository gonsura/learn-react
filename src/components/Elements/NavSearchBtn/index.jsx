import NavSearchBtnIcon from './NavSearchBtnIcon'
const NavSearchBtn = ({onClick, isOpen}) => {
  return (
    <button className={`top-[-10px] right-2 p-6 text-4xl ${isOpen ? 'absolute z-30' : 'static'}`} onClick={onClick}>
      <NavSearchBtnIcon isOpen={isOpen} />
    </button>
  )
}
export default NavSearchBtn