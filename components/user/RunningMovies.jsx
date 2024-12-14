import React from 'react'
import Card from 'react-bootstrap/Card';

function RunningMovies() {
    return (
        <>
            <div className="row mt-5">
                <div className="col-md-3">
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/moana-2-et00387901-1732535881.jpg" />
                        <Card.Text className='w-100 bg-black text-white'>8.4 12k Votes</Card.Text>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3"> <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/moana-2-et00387901-1732535881.jpg" />
                        <Card.Text className='w-100 bg-black text-white'>8.4 12k Votes</Card.Text>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card></div>
                <div className="col-md-3"> <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/moana-2-et00387901-1732535881.jpg" />
                        <Card.Text className='w-100 bg-black text-white'>8.4 12k Votes</Card.Text>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card></div>
                <div className="col-md-3"> <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/moana-2-et00387901-1732535881.jpg" />
                        <Card.Text className='w-100 bg-black text-white'>8.4 12k Votes</Card.Text>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card></div>
            </div>
        </>
    )
}

export default RunningMovies