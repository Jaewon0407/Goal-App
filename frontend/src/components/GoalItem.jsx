import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteGoal} from '../features/goals/goalSlice'
import "../styles/goalItem.css"

function GoalItem({goal}) {

    const dispatch = useDispatch()
  return (
    <div className='goal-item'>
        <div className='goal-time'>
            {new Date(goal.createdAt).toLocaleString('en-US')}
        </div>
        <h2 className='new-goal'>{goal.text}</h2>
        <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">Delete</button>
    </div>
  )
}

export default GoalItem