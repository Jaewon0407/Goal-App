import {useState, useEffect} from 'react'
import '../styles/homeTitle.css'
import {Link, useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'

function HomeTitle() {

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  return (
    <>
      {user ? (<>
        <div className='homeTitle'>{user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase()}'s Goal</div>
      </>) : (<>
        <div className='homeTitle'>Home</div>
      </>)}
    </>
  )
}

export default HomeTitle