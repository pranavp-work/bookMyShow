import React from 'react'

function UserHeader() {
  return (
    <>
      {/* <nav className='d-flex justify-content-between align-items-center p-3' style={{position: 'fixed'}}>
        <div className='d-flex align-items-center'>
          <h2>BookMoviesNow</h2>
          <input type="text" placeholder='Search For Movies' className='p-1 border border-grey rounded' style={{width: '300px'}} />
        </div>
        <div className='d-flex align-items-center'>
          <div className='ms-4'>
            <p className='text-warning border border-warning p-1'>$500</p>
          </div>
          <div className='ms-4'>
            <button className='border-0 p-1 w-100'>Kochi</button>
          </div>
          <div className='ms-4'>
            <h3>Hi, User</h3>
          </div>
        </div>
      </nav> */}

      <nav className='p-3 container'>
        <div className="row">
          <div className="col-md-2">
            <h4 className='text-danger'>BookMoviesNow</h4>
          </div>
          <div className="col-md-4">
            <input type="text" placeholder='Search For Movies' className='w-100 border-grey border-1 rounded'/>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-1">
            <p className='border border-warning text-warning p-1'>$500</p>
          </div>
          <div className="col-md-1">
            <button className='border-1 border-dark p-1'>Kochi</button>
          </div>
          <div className="col-md-1">
            <button className='border-0'>Hi, Guest</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default UserHeader