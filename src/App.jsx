import './App.css';
import { Routes, Route } from 'react-router-dom';
import Card from './components/Card/Card';
import CardInfo from "./components/CardInfo/CardInfo"



function App() {
  return (
    <>
    <div className="header">
      <div className="container">
        <h1 className='header__title'>Countries</h1>
      </div>
    </div>
    <div className="container">
      <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path='/info/:id' element={<CardInfo/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;