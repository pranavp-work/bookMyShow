import React from 'react'

function UserHeader() {
  return (
    <>
      <nav className='container d-flex justify-content-between align-items-center p-3'>
        <div className='d-flex'>
          <h2>BookMoviesNow</h2>
          <input type="text" placeholder='Search For Movies' className='p-1' />
        </div>
        <div>
          <div>
            <p className='text-warning'>$500</p>
          </div>
          <div></div>
          <div></div>
        </div>
        
      </nav>
    </>
  )
}

export default UserHeader