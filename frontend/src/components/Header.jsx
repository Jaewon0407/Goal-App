import {AiFillHome} from 'react-icons/ai'
import {RiSettings4Fill} from 'react-icons/ri'
import {BiSolidUser} from 'react-icons/bi'
import {Link} from "react-router-dom"
import {useSelector} from 'react-redux'
import '../styles/header.css'

function Header() {

  const {user} = useSelector((state) => state.auth)

  if (!user) {
    return (
      <header className="header">
        <Link className='user' to='/login'><BiSolidUser /></Link>
        <Link className='home' ><AiFillHome /></Link>
        <Link className='settings' to='/settings'><RiSettings4Fill /></Link>
      </header>    
    )
  } else {
    return (
      <header className="header">
        <Link className='user' to='/login'><BiSolidUser /></Link>
        <Link className='home' to='/' ><AiFillHome /></Link>
        <Link className='settings' to='/settings'><RiSettings4Fill /></Link>
      </header>
    )
  }
}

export default Header