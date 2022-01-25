import React from 'react';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Blog from './Blog/Blog';


function App() {
  return (
   <Router>
   <Navbar/>
   <Header/>
   <Main/>
   <Footer/>
  <Routes>
    <Route path="/Blog" element={<Blog/>}/>
  </Routes>

   </Router>
  );
}

export default App;
