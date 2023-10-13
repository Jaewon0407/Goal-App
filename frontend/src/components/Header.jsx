import {AiFillHome} from 'react-icons/ai'
import {RiSettings4Fill} from 'react-icons/ri'
import {BiSolidUser} from 'react-icons/bi'
import {Link} from "react-router-dom"
import '../styles/header.css'

function Header() {

  return (
    <header className="header">
      <Link className='user' to='/login'><BiSolidUser /></Link>
      <Link className='home' to='/' ><AiFillHome /></Link>
      <Link className='settings' to='/settings'><RiSettings4Fill /></Link>
    </header>
  )
}

export default Header