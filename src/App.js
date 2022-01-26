import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Blog from './Blog/Blog';


function App() {
  return (
   <BrowserRouter basename={process.env.PUBLIC_URL}>
   <Navbar/>
   <Header/>
   <Main/>
   <Footer/>
  <Routes>
    <Route path="/Blog" element={<Blog/>}/>
  </Routes>

   </BrowserRouter>
  );
}

export default App;
