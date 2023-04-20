import './App.css';
import './styles/globals.css'
import { Navbar } from './Components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Introduction } from './Components/introduction';
import { UseStateComp, UseEffectComp, UseReducerComp } from './Components/hooks_example';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Introduction />} />
          <Route path='useStateExample' element={<UseStateComp />} />
          <Route path='useEffectExample' element={<UseEffectComp />} />
          <Route path='useReducerExample' element={<UseReducerComp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
