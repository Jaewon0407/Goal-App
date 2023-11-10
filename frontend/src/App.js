import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import HomeTitle from './title/HomeTitle';
import LoginTitle from './title/LoginTitle';
import RegisterTitle from './title/RegisterTitle';
import SettingsTitle from './title/SettingsTitle';
import Header from './components/Header'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <div className='title'>
            <Routes>
              <Route className='home-title' path='/' element={<HomeTitle />} />
              <Route className='login-title' path='/login' element={<LoginTitle />} />
              <Route className='register-title' path='/register' element={<RegisterTitle />} />
              <Route className='settings-title' path='/settings' element={<SettingsTitle />} />
            </Routes>
          </div>
          <hr className='line'></hr>
          <div className='content'>
            <Routes>
                <Route className='home' path='/' element={<Home />} />
                <Route className='login' path='/login' element={<Login />} />
                <Route className='register' path='/register' element={<Register />} />
            </Routes>
          </div>
          <div className='header-container'>
            <hr className='line'></hr>
            <Header className='header' />
          </div>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
