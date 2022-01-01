import React, { useState } from 'react'
import "./projects.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Projects() {

     const data = [
          {
               id: 1,
               icon: "https://play-lh.googleusercontent.com/EkSlLWf2-04k5Y5F_MDLqoXPdo0TyZX3zKdCfsEUDqVB7INUypTOd6AVmkE_X7ej3JuR",
               title: "Hard CodeR",
               desc: "Application which is helpful for practicing coding question topicwise for interviews",
               img: "https://codersera.com/blog/wp-content/uploads/2019/07/BLOG-23-L-3.jpg",
               link: "http://codeforces-mini-app.herokuapp.com/"
          },{
               id: 2,
               icon: "http://www.atechpdc.com/v2/wp-content/uploads/2018/12/QnA-e1559310173595.jpg",
               title: "DevTalks",
               desc: "Site made especially for the developers who get stuck when bug encountered in everyday life",
               img: "https://lh3.googleusercontent.com/proxy/EJjK6IvHsz20_YT3r0aSROxhZbeM-cln1Li0ncvD3q59yBIb6y71gFZl8ZfHYOoWoPJhX2Kw-vsuq0YmSSwTB4TwPEXSk4WbuRyOjP1rcS8hgnBp",
               link: "https://github.com/Poojan-patel/DevTalks"
          },{
               id: 3,
               icon: "https://sfscollege.in/images/pc4.jpg",
               title: "Placement Management Service",
               desc: "A full fledged placement management service for universities starting from registering companies to declaring results ",
               img: "https://plopdo.com/wp-content/uploads/2020/07/campus-placement-interview.jpg",
               link: "https://github.com/meetpatel0963/Placement-Management-System"
          },{
               id: 4,
               icon: "https://media.istockphoto.com/vectors/database-vector-icon-isolated-on-transparent-background-database-vector-id1042684430?k=20&m=1042684430&s=170667a&w=0&h=WakBqC-q2bgCehjpW7HdKpwsR_CHAb82N8oYVK_B_j4=",
               title: "MedStore Management",
               desc: "Console based system for medical store to generate bills, CRUD on available stocks, handling suppliers, etc",
               img: "https://s7280.pcdn.co/wp-content/uploads/2016/06/database-blue.png",

          }
     ]

     const [currentSlide, setCurrentSlide] = useState(0)

     const handleClick = (dir)=>{
           if(dir === "left"){
               setCurrentSlide(currentSlide ?currentSlide-1 :data.length-1)
           }
           else{
               setCurrentSlide((currentSlide+1) % data.length)
           }
     }

     return (
          
          <div className="works" id="works">
               <h3>Projects</h3>
             <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                  {data.map(item=>(
                  <div className="container">
                       <div className="item" id={item.id}>
                            <div className="left">
                                 <div className="leftContainer">
                                      <div className="imgContainer">
                                           <img src={item.icon} alt="" />
                                      </div>
                                      <h2>{item.title}</h2>
                                      <p>{item.desc}</p>
                                      <a className="span" href={item.link} target="_blank">Project</a>
                                 </div>
                            </div>
                            <div className="right">
                                 <img src={item.img} alt="" />
                            </div>
                       </div>
                  </div>
                  ))}
             </div>
             <ArrowBackIosIcon className="arrow left" onClick={()=>handleClick("left")} />
             <ArrowForwardIosIcon className="arrow right" onClick={()=>handleClick("right")}/>
          </div>
     )
}
