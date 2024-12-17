import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

      <nav class="d-flex bg-body-tertiary p-4">
        <h1 className='text-danger  fs-3  me-auto' >BookMyShow</h1>
        <div className='w-50 me-auto'>
          <div class="d-flex w-100" role="search">

            <input class="form-control me-2 w-100 me-3" type="search" placeholder="Search for Movies,Events,Plays,Sports and Activities" aria-label="Search" />
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginLeft: "-45px" }} className='mt-2' />

          </div>
        </div>
        <div >
          <p className='border border-warning text-warning px-3 py-2 me-3'>Kochi</p>
        </div>

        <div>
          <button className='btn btn-danger  px-3 py-2'>Sign In</button>

        </div>
      </nav>
    </>
  )
}

export default UserHeader