import {useState, useEffect} from 'react'
import '../styles/loginTitle.css'
import '../styles/profileTitle.css'
import {Link, useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'

function LoginTitle() {
  
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)
  
  return (
    <>
      {user ? (<>
        <div className='profileTitle'>Profile</div>
      </>) : (<>
        <div className='loginTitle'>Login</div>
      </>)}
    </>
  )
}

export default LoginTitle