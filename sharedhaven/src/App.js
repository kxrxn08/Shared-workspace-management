import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
    <Route index element={<Home/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>} ></Route>
    </Routes>
    </BrowserRouter>
    // <div className="App h-100 w-100">
    //   <Home/>
    // </div>
  );
}

export default App;
