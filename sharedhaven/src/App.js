import './App.css';
import LoginForm from './Components/LoginForm';
import Navbar from './Components/Navbar';
import RegistrationForm from './Components/RegistrationForm';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route index element={<Home/>}></Route>
    <Route path='/login'  element={<LoginForm/>}></Route>
    <Route path='/register'  element={<RegistrationForm/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>} ></Route>
    </Routes>
    </BrowserRouter>
    // <div className="App h-100 w-100">
    //   <Home/>
    // </div>
  );
}

export default App;
