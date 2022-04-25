import logo from './logo.svg';
import './App.css';
import Layout from './container';
import SignIn from './Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/web-app" element={<SignIn/>} />
        <Route path="/web-app/container" element={<Layout />} />
      </Routes>
   
  </BrowserRouter>

    </div>
  );
}

export default App;
