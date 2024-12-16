import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import UserHome from './../pages/user/UserHome';
import UserHeader from './../components/user/UserHeader';
import UserFooter from './../components/user/UserFooter';
import MovieDetails from './../pages/user/MovieDetails';
import SelectTheatre from './../pages/user/SelectTheatre';
import SeatSelection from './../pages/user/SeatSelection';
import CartFunctionality from './../pages/user/CartFunctionality';
import ProfileFunctionality from './../pages/user/ProfileFunctionality';


function App() {

  return (
    <>
      <UserHeader />
      <Routes>
        <Route path='/' element={< UserHome />}></Route>
        <Route path='/MovieDetails' element={< MovieDetails />}></Route>
        <Route path='/SelectTheatres' element={< SelectTheatre />}></Route>
        <Route path='/SeatSelection' element={< SeatSelection />}></Route>
        <Route path='/CartFunctionality' element={< CartFunctionality />}></Route>
        <Route path='/ProfileFunctionality' element={< ProfileFunctionality />}></Route>
      </Routes>
      <UserFooter />
    </>
  )
}

export default App
