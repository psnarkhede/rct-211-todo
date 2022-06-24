import './App.css';
import Home from './Components/Home';
import {Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Totaltodo from './Components/Totaltodo';
import Edittodo from './Components/Edittodo';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/total" element={<Totaltodo/>}></Route>
        <Route path="/todo/:id" element={<Edittodo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
