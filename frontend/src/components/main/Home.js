import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
      <div className="row mt-3">

        <div className="col-md-6">
          <img src="https://img.freepik.com/free-photo/minimalistic-business-desk-arrangement_23-2149073018.jpg?w=2000" alt="" className='w-100 rounded-8' />
        </div>

        <div className="col-md-6 text-center my-auto">
          <h1><i>OFFICE SPACE</i></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste possimus corporis, esse quis doloremque sequi, odit magni nemo minima voluptatum itaque inventore perspiciatis laboriosam quos aliquid, voluptatem iure id qui modi at mollitia repellendus? Sequi et, ad incidunt illo deserunt dolore sint placeat aspernatur tempore vero, nostrum, quo fugit quos!</p>
          <Link to='/main/browsespace'>
            <Button variant="contained" color='success'>Get Started</Button>
          </Link>

           
        </div>
        


      </div>
    </div>
  )
}

export default Home