import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='container'>
        <div className="row bg-info py-2">
          <div className="col-md-8" >
            <NavLink className="navLink" to="/" >Home</NavLink>


          </div>
          <div className="col-md-4 " >

            <NavLink className="navLink" to="/mcq" >Mcq</NavLink>
            <NavLink className="navLink" to="/result" >Result</NavLink>
            <NavLink className="navLink" to="/question" >Question</NavLink>

          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <h1 className='title text-center'>Quiz Application</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
