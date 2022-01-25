import React from 'react';
import "./Main.css"
import icon1 from '../images/cons-icon.png'
import icon2 from '../images/Des-icon.png'
import icon3 from '../images/dev-icon.svg'
import img1 from "../images/pro-1.png"
import { Link } from 'react-router-dom';
import profilepic from "../images/profile.png"
import Rev from "../images/Rev-1.jpg"
import Rev1 from "../images/rev-2.png"
import Rev2 from "../images/rev-3.png"
import stars from "../images/5stars.png"

const Main = () => {
  return(
     <main>
         <h1>My Awesome <span className='ch-col'>Services</span></h1>
         <p>Loves to develop stunning designs using maintanabale and scalable codes standard</p>
         <menu>
             <div>
                 <img src={icon1} alt='pic'></img>
                 <h1>Consultation</h1>
                 <p>Have an insane idea in mind, doubting if possible?, do not know how, and when to implement?,
                     inbox to gain clarity
                 </p>
             </div>
             <div className='odd'>
                 <img src={icon2} alt='pic'></img>
                 <h1>Design</h1>
                 <p>Love to explore minimalist design and good functionalities, will create Uniq design</p>
             </div>
             <div>
                 <img src={icon3} alt='pic'></img>
                 <h1>Development</h1>
                 <p>Convert your ideas into readable, maintanable and well formatted codes, using latest techs</p>
             </div>  
             <div className='col-gr1'></div>
             <div className='col-gr2'></div>   
             <div className='col-gr3'></div>
             <div className='col-gr4'></div>   
             <div className='col-gr5'></div> 
             <div className='col-gr6'></div> 
             <div className='col-gr7'></div> 
         </menu>
             <section>
                 <h1 className='sec-h1'>My Latest <span className='ch-col'>Projects</span></h1>
                 <p className='sec-p'>All were built with codes standard in mind</p>
                <div>
                    <article className='btm'>
                     <img src={img1} alt='pic'/>
                     <h1 className='h1'>New year landing page</h1>
                     <h3 className='h3'><span className="ch-col">By</span> Oluwasanjo</h3>
                     <p className='p1'><Link to={{pathname: "//sanjolawal.netlify.app"}} className='a'>View on web</Link></p>
                     <p className='p2'><Link to={{pathname: "//"}} className='a'>View code on github</Link></p>
                    </article>

                    <article className='btm'>
                     <img src={img1} alt='pic'/>
                     <h1 className='h1'>New year landing page</h1>
                     <h3 className='h3'><span className="ch-col">By</span> Oluwasanjo</h3>
                     <p className='p1'><Link to={{pathname: "//"}} className='a'>View on web</Link></p>
                     <p className='p2'><Link to={{pathname: "//"}} className='a'>View code on github</Link></p>
                    </article>

                    <article className='btm'>
                     <img src={img1} alt='pic'/>
                     <h1 className='h1'>New year landing page</h1>
                     <h3 className='h3'><span className="ch-col">By</span> Oluwasanjo</h3>
                     <p className='p1'><Link to={{pathname: "//"}} className='a'>View on web</Link></p>
                     <p className='p2'><Link to={{pathname: "//"}} className='a'>View code on github</Link></p>
                    </article>
                </div>
            </section>  
            <article className='reviews'>
                 <img src={profilepic} alt='pic' className='R-img'/>
                <div className='about'>
                <h1 className='m-h1'>Why hire me for your <span className='ch-col'>project?</span></h1>  
                <p className='m-p1'>I do what i love, and loves what i do, you can count on me to be there for your business
                    everysteps of the way </p>
                 <button className='m-btn'>Hire me</button>
                </div> 
            </article>  
            
            <h1 className='pt'>This Is Why I Do What I Do </h1>
         <p>Loves to develop things that makes life easier and worth living</p>
         <menu >
             <div className='menu2' >
                 <img src={Rev1} alt='pic' className='img-p'></img>
                 <img src={stars} alt='pic' className='img-s'/>
                 <p className='pr1'>Very honest, reliable and quick.
                 His communication skills are excellent too, definetly recommended for projects.
                 </p>
                  <h1 className='hr2'>Johugh Dong</h1>
                 <p className='pr2'>CFO at Armydollar</p>
             </div>

               <div className='menu2' >
                 <img src={Rev} alt='pic' className='img-p'></img>
                 <img src={stars} alt='pic' className='img-s'/>
                 <p className='pr1' className="pr-1">Great working with him
                 </p>
                  <h1 className='hr2'>Nykia of Trinidad</h1>
                 <p className='pr2'>CEO at Citrusdevelops</p>
             </div>

               <div className='menu2' >
                 <img src={Rev2} alt='pic' className='img-p'></img>
                 <img src={stars} alt='pic' className='img-s'/>
                 <p className='pr1'>He made me happy, delivered a project i lost hope on, due to 
                 disappointment from three developers before him
                 </p>
                  <h1 className='hr2'>Oyena Goya</h1>
                 <p className='pr2'className="pr-2">CEO at Changelivesnetwork</p>
             </div>

        </menu>

     </main> 
  );
};

export default Main;
