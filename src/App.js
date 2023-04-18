import './App.css';
import { Navbar } from './Components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Introduction } from './Components/introduction';
import { UseStateComp } from './Components/useStateComp';
import { UseEffectComp } from './Components/useEffectComp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Introduction />} />
        <Route path='useStateExample' element={<UseStateComp />} />
        <Route path='useEffectExample' element={<UseEffectComp />} />
      </Routes>
    </div>
  );
}

export default App;
