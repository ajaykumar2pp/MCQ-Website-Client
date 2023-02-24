import React from 'react'
import ResultTable from "./ResultTable"
import { NavLink } from 'react-router-dom'
import "./Result.css";
const Result = () => {

  function onRestart(){
    console.log('on Restart')
}


  return (
    <div className=''>
      
        <div className='result flex-center'>
            <div className='flex'>
                <span>Username</span>
                <span className='bold'>Daily Tuition</span>
            </div>
            <div className='flex'>
                <span>Total Quiz Points : </span>
                <span className='bold'>50</span>
            </div>
            <div className='flex'>
                <span>Total Questions : </span>
                <span className='bold'>05</span>
            </div>
            <div className='flex'>
                <span>Total Attempts : </span>
                <span className='bold'>03</span>
            </div>
            <div className='flex'>
                <span>Total Earn Points : </span>
                <span className='bold'>30</span>
            </div>
            <div className='flex'>
                <span>Quiz Result</span>
                <span className='bold'>Passed</span>
            </div>
        </div>

        <div className="start">
          <NavLink className="btn" to="/" onClick={onRestart}> Restart</NavLink>
            {/* <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link> */}
        </div>

        <div className="container ">
         <ResultTable  />
        </div>
    </div>
  )
}

export default Result