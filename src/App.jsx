import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import UserHome from './../pages/user/UserHome';
import UserHeader from './../components/user/UserHeader';
import UserFooter from './../components/user/UserFooter';
import MovieDetails from './../pages/user/MovieDetails';


function App() {

  return (
    <>
      <UserHeader />
      <Routes>
        <Route path='/' element={< UserHome />}></Route>
        <Route path='/MovieDetails' element={< MovieDetails />}></Route>
      </Routes>
      <UserFooter />
    </>
  )
}

export default App
