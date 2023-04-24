import './App.css';
import './styles/globals.css'
import { Navbar } from './Components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Introduction } from './Components/introduction';
import { UseStateComp, UseEffectComp, UseReducerComp, UseRefComp, UseCallbackComp, UseMemoComp, UseContextComp } from './Components/hooks_example';
import { ThemeProvider } from './context';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Introduction />} />
            <Route path='useStateExample' element={<UseStateComp />} />
            <Route path='useEffectExample' element={<UseEffectComp />} />
            <Route path='useReducerExample' element={<UseReducerComp />} />
            <Route path='useRefExample' element={<UseRefComp />} />
            <Route path='useCallbackExample' element={<UseCallbackComp />} />
            <Route path='useMemoExample' element={<UseMemoComp />} />
            <Route path='useContextExample' element={<UseContextComp />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
