import './App.css';
import Home from './componets/home/home';
import { Route, Routes } from 'react-router-dom';
import Landing from './componets/landing/landing';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/'/>
      </Routes>
    </div>
  );
}

export default App;
