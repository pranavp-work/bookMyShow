import './App.css'
import { Routes, Route } from 'react-router-dom';
import UserHome from './../pages/user/UserHome';
import UserHeader from './../components/user/UserHeader';
import UserFooter from './../components/user/UserFooter';

function App() {

  return (
    <>
      <UserHeader />
      <Routes>
        <Route path='/' element={< UserHome />}>

        </Route>
      </Routes>
      <UserFooter />
    </>
  )
}

export default App
