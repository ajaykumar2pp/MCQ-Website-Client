
import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
const Home = () => {
    const inputRef = useRef(null)
  return (
    <div className='container'>

    <ol>
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points is awarded for the correct answer.</li>
        <li>Each question has three options. You can choose only one options.</li>
        <li>You can review and change answers before the quiz finish.</li>
        <li>The result will be declared at the end of the quiz.</li>
    </ol>

    <form id="form">
        {/* <input ref={inputRef} className="userid" type="text" placeholder='Username*' /> */}
        <input type="text" className="form-control userName" placeholder="Username" aria-label="Username"ref={inputRef} size="40" />
    </form>

    <div className='start'>
        <NavLink className='btn' to={'quiz'}>Start Quiz</NavLink>
    </div>

</div>
  )
}

export default Home