import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import '../styles/home.css'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import Spinner from '../components/Spinner'
import {getGoal, reset} from '../features/goals/goalSlice'

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)
  const {goal, isLoading, isError, message} = useSelector((state) => state.goal)
  
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoal())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, message, isError, dispatch])

  return (
    <>
      <GoalForm />
      {goal.length > 0 ? (
        <div className='goal'>
          {goal.map((goal) => (
            <GoalItem key={goal._id} goal={goal} />
          ))}
        </div>
      ) : (
        <h3 className='not-set-goal'>You have no goals.</h3>
      )}
    </>
  )
}

export default Home