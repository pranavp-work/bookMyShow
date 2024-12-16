import React from 'react'

function SeatSelection() {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-md-3">
                        <h6> Moana 2</h6>
                        <p>PVR: Oberon Mall, Kochi | Today, 16 Dec, 07:10 PM
                            3 Tickets</p>
                    </div>
                    <div className="col-md-6"></div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center">
                        <button className="border-black bg-light px-2 py-1 rounded-2 border-1">3 Tickets</button>
                        <button className='border-0'>X</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <button className='btn btn-success'>7:10 PM</button>
                        <button className='border-success btn-white btn border-1 text-success ms-3'>9:30 PM</button>
                    </div>
                    <div className="col-md-8"></div>
                </div>
            </div>

            <div className="container px-5 py-5">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p>Rs. 195 CLASSIC PLUS</p>
                        <hr />
                        <div className="row">
                            <div className="col-md-2">A</div>
                            <div className="col-md-10 d-flex justify-content-between align-items-center ">
                                <button className='px-3 btn btn-outline-success'>1</button>
                                <button className='px-3 btn btn-outline-success'>2</button>
                                <button className='px-3 btn btn-outline-success'>3</button>
                                <button className='px-3 btn btn-outline-success'>4</button>
                                <button className='px-3 btn btn-outline-success'>5</button>
                                <button className='px-3 btn btn-outline-success'>6</button>
                                <button className='px-3 btn btn-outline-success'>7</button>
                                <button className='px-3 btn btn-outline-success'>8</button>
                                <button className='px-3 btn btn-outline-success'>9</button>
                                <button className='px-3 btn btn-outline-success'>10</button>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-2">B</div>
                            <div className="col-md-10 d-flex justify-content-between align-items-center ">
                                <button className='px-3 btn btn-outline-success'>11</button>
                                <button className='px-3 btn btn-outline-success'>12</button>
                                <button className='px-3 btn btn-outline-success'>13</button>
                                <button className='px-3 btn btn-outline-success'>14</button>
                                <button className='px-3 btn btn-outline-success'>15</button>
                                <button className='px-3 btn btn-outline-success'>16</button>
                                <button className='px-3 btn btn-outline-success'>17</button>
                                <button className='px-3 btn btn-outline-success'>18</button>
                                <button className='px-3 btn btn-outline-success'>19</button>
                                <button className='px-3 btn btn-outline-success'>20</button>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-2">C</div>
                            <div className="col-md-10 d-flex justify-content-between align-items-center ">
                                <button className='px-3 btn btn-outline-success'>21</button>
                                <button className='px-3 btn btn-outline-success'>22</button>
                                <button className='px-3 btn btn-outline-success'>23</button>
                                <button className='px-3 btn btn-outline-success'>24</button>
                                <button className='px-3 btn btn-outline-success'>25</button>
                                <button className='px-3 btn btn-outline-success'>26</button>
                                <button className='px-3 btn btn-outline-success'>27</button>
                                <button className='px-3 btn btn-outline-success'>28</button>
                                <button className='px-3 btn btn-outline-success'>29</button>
                                <button className='px-3 btn btn-outline-success'>30</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>


            </div>


        </>
    )
}

export default SeatSelection