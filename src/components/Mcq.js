import React from 'react'
import Question from "./Question"
const Mcq = () => {
 

    function onNext(){
        console.log('On next click')
    }

    function onPrev(){
        console.log('On onPrev click')
    }

  return (
    <div className='container'>
 

        <Question />

        <div className='grid'>
            <button className='btn btn-primary' onClick={onPrev}>Prev</button>
            <button className='btn btn-success' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}

export default Mcq