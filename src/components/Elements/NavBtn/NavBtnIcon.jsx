const NavBtnIcon = ({isOpen}) => {
  return (
    <i className={`ri-${isOpen ? 'close' : 'menu'}-line`}></i>
  )
}
export default NavBtnIcon