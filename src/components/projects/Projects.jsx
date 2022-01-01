import React, { useState } from 'react'
import "./projects.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Projects() {

     const data = [
          {
               id: 1,
               icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU",
               title: "Hard CodeR",
               desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut autem itaque odit tempora necessitatibus, molestiae pariatur",
               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU",
          },{
               id: 2,
               icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU",
               title: "DevTalks",
               desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut autem itaque odit tempora necessitatibus, molestiae pariatur",
               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU",
          },{
               id: 3,
               icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU",
               title: "Placement Management Service",
               desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut autem itaque odit tempora necessitatibus, molestiae pariatur",
               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU",
          },{
               id: 4,
               icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU",
               title: "MedStore Management",
               desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut autem itaque odit tempora necessitatibus, molestiae pariatur",
               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU",
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
                                      <span>Projects</span>
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
