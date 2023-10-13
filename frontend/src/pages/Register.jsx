import {useState, useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import '../styles/register.css'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const {name, email, password, confirmPassword} = formData

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

    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name, 
        email, 
        password
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <div className='register-container'>  
        <form onSubmit={onSubmit}>
          <div className='info'>
            <div className='name'>
              <p className='name-title'>Username</p>
              <input className='name-input' name='name' autoComplete='name' value={name} type="text" onChange={onChange} />
            </div>
            <div className='email'>
              <p className='email-title'>Email</p>
              <input className='email-input' name='email' autoComplete='email' value={email} type="email" onChange={onChange} /> 
            </div>
            <div className='password'>
              <p className='password-title'>Password</p>
              <input className='password-input' name='password' autoComplete='new-password' value={password} type="password" onChange={onChange} />
            </div>
            <div className='confirm-password'>
              <p className='confirm-password-title'>Confirm Password</p>
              <input className='confirm-password-input' name='confirmPassword' autoComplete='new-password' value={confirmPassword} type="password" onChange={onChange} />
            </div>
            <button className='register-btn' type='submit'>Register</button>
          </div>
        </form>      
      </div>
    </>
  )
}

export default Register