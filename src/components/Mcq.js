import React from 'react'

const Mcq = () => {
 

    function onNext(){
        console.log('On next click')
    }

    function onPrev(){
        console.log('On onPrev click')
    }

  return (
    <div className='container'>
 

 

        <div className='grid'>
            <button className='btn prev' onClick={onPrev}>Prev</button>
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}

export default Mcq