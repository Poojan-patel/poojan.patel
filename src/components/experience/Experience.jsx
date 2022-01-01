import React from 'react'
import "./experience.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Experience() {

     const data = [
          {
               id: 1     ,
               icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU",
               cname: "PeanutSquare LLP",
               desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis recusandae doloremque, perspiciatis pariatur voluptatum consequatur quia",
               desg: "Software Engineer Intern"
          },{
               id: 2,
               icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU",
               cname: "Tekion",
               desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis recusandae doloremque, perspiciatis pariatur voluptatum consequatur quia",
               desg: "Associate Software Engineer",
               featured: true
          },{
               id: 3,
               icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU",
               cname: "Center Of Excellence",
               desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis recusandae doloremque, perspiciatis pariatur voluptatum consequatur quia",
               desg: "Machine Learning Intern"
          }
     ]
     
     return (
          <div className="experience" id="experience">
               
               <h1>Experience</h1>
               <div className="container">
                    {data.map(item=>(
                         <div className={"card " + (item.featured && "featured")}>
                              <div className="top">
                                   <ArrowBackIosIcon className="left"/>
                                   <img className="user" src={item.icon} alt="" />
                                   <YouTubeIcon className="right" />
                              </div>
                              <div className="center">{item.desc}</div>
                              <div className="bottom">
                                   <h3>{item.cname}</h3>
                                   <h4>{item.desg}</h4>
                              </div>

                         </div>
                    ))}
               </div>
          </div>
     )
}
