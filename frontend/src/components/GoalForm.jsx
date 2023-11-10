import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {createGoal} from '../features/goals/goalSlice'
import "../styles/goalForm.css"

function GoalForm() {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (event) => {
        event.preventDefault()
        dispatch(createGoal({text}))
        setText('')
    }
    return (
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input className='text' type="text" name='text' placeholder='Enter Goal' value={text} onChange={(event) => setText(event.target.value)} />
                </div>
                <button className="goal-button" type='submit'>Add Goal</button>
            </form>
        </section>
    )
}

export default GoalForm