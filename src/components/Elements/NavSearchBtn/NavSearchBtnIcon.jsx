const NavSearchBtnIcon = ({isOpen}) => {
  return (
    <i className={`ri-${isOpen ? 'close' : 'search'}-line`}></i>
  )
}
export default NavSearchBtnIcon