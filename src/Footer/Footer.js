import React from 'react';
import "./Footer.css"
import logo from "../images/4.jpg"
import git from "../images/github.svg"
import In from "../images/linkedin.svg"

const Footer = () => {
  return (
      <footer>
         <section>
             <img src={logo} alt="pic"/>
             <p>Give your projects to the very best-without worrying about bugs</p>
             <img src={git} alt='pic'/>
             <img src={In} alt='pic'/>
         </section>

         <article>
        <div>
           <h1>Features</h1>
           <ul>
               <li>Consultation</li>
               <li>UI/UX design</li>
               <li>Development</li>
           </ul>
         </div>
         <div>
             <h1>About</h1>
             <ul>
                 <li>Blog</li>
                 <li>Cookie Policy</li>
                 <li>Contact</li>
                 <li>Privacy policy</li>
                 <li>Terms & condition</li>
             </ul>
         </div>
         </article>
         <menu>
         <hr/>
         <p>© OLUWASANJO 2022 | All rights reserved.</p> 
         </menu>
      </footer>

  );
};

export default Footer;
