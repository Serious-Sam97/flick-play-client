import './App.css';
import Header from './components/Header.tsx';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.tsx';
import About from './pages/About.tsx';
import Movies from './pages/Movies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route exact path='/' element={<Dashboard/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/movies' element={<Movies/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
