import { BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react'
import './App.css';
import Mcq from './components/Mcq';
import Navbar from './components/Navbar';
import Result from './components/Result';
import Home from './components/Home';


function App() {
  return (
    <>
    
    <div className="App">
     <h2>MCQ MERN Website</h2>
     </div>
     <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/mcq" element={<Mcq />}></Route>
                        <Route path="/result" element={<Result/>}></Route>
                        
                    </Routes>
                </BrowserRouter>
                </>
    
  );
}

export default App;
