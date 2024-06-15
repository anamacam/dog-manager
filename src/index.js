import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer, Navbar } from './components/layaut';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import TrainerList from './pages/admin/trainers/TrainerList';
import CreateTrainer from './pages/admin/trainers/CreateTrainer';

function App(){
  return (
  <>
  <BrowserRouter>
  <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/admin/trainers' element={<TrainerList/>}/>
  <Route path='/admin/trainers/create' element={<CreateTrainer/>}/>
  <Route path='*' element={<NotFound/>}/>
 </Routes>
  <Footer/>
  </BrowserRouter>
  </>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

