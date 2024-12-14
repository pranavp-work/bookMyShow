import React from 'react'

function UserFooter() {
  return (
    <>
      <div className="mt-5 p-3 text-dark bg-dark p-4">
        <div className="row">
          <div className="col-md-9  bg-dark">
            <p className='bg-dark text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus adipisci dolorum! Laborum, dicta velit?</p>
          </div>
          <div className="col-md-3 bg-dark">
            <button className='btn btn-danger w-100 p-1'>Contact Today!</button>
          </div>
        </div>
        <div className="row mt-5 bg-dark">
          <div className="col-md-4 bg-dark">
            <h6 className='text-light bg-dark'>24/7 CUSTOMER CARE</h6>
          </div>
          <div className="col-md-4 bg-dark">
            <h6 className='text-light bg-dark'>RESEND BOOKING CONFIRMATION</h6>
          </div>
          <div className="col-md-4 bg-dark">
            <h6 className='text-light bg-dark'>SUBSCRIBE TO THE LETTER</h6>
          </div>
        </div>

        <div className='mt-5 bg-dark'>
          <h6 className='text-light bg-dark'>MOVIES NOW SHOWING IN KOCHI</h6>
          <div className='d-flex flex-row bg-dark'>

            <p className='bg-dark text-light'>asfaf | </p>
            <p className='bg-dark text-light'>dgvg | </p>
            <p className='bg-dark text-light'>sdgdg | </p>
            <p className='bg-dark text-light'>ffhfh | </p>
            <p className='bg-dark text-light'>dgfs | </p>
            <p className='bg-dark text-light'>fgxbxfbx | </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserFooter