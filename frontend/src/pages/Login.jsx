import {useState, useEffect} from 'react'
import '../styles/login.css'
import {Link, useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import {login, logout, reset} from '../features/auth/authSlice' 
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'

function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <div className='login-container'>
        {user ? (
          <>
            <div className='profile'>
              <div className='profile-info'>
                <p className='profile-name-title'>Name</p>
                <p className='profile-name'>{user.name}</p>
                <p className='profile-email-title'>Email</p>
                <p className='profile-email'>{user.email}</p>
              </div>
              <button className='logout-btn' onClick={onLogout}>Log Out</button>
            </div>
          </>
        ) : (
          <>
            <form onSubmit={onSubmit}>
              <div className='login-info'>
                <div className='email'>
                  <p className='email-title'>Email</p>
                  <input className='email-input' name='email' autoComplete='email' value={email} type="email" onChange={onChange} /> 
                </div>
                <div className='password'>
                  <p className='password-title'>Password</p>
                  <input className='password-input' name='password' autoComplete='new-password' value={password} type="password" onChange={onChange} />
                </div>
                <button className='register-btn' type='submit'>Login</button>
              </div>
              <div className='register-msg'>Need an account? <Link className='register-link' to='/register'>Register</Link></div>
            </form>
          </>
        )}    
      </div>    
    </>
  )
}

export default Login