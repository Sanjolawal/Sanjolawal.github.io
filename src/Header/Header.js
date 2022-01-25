import React from 'react';
import  './Header.css'

const Header = () => {
  return(
      <header>
        <section>
            <h1>I'm Sanjo Saheed <br/>Lawal,<br/><span className='title-col'> Front end developer and Animator <br/> </span> </h1>
            <p>I'm available for goal driven freelance work or jobs, be it long term or short.
                Do hit the hire button to get in touch.
            </p>
            <button>Hire me</button>
        </section>
        <video poster='' controls src=''></video>
        <div className='col-gr'></div> 
        <article className='stacks'>
          <p>Reactjs</p>
          <p>Tailwindcss</p>
          <p>Javascript</p>
          <p>Css3</p>
          <p>Html5</p>
        </article>
      </header>
  )
};

export default Header;
