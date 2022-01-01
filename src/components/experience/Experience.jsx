import React from 'react'
import "./experience.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Experience() {
     return (
          <div className="experience" id="experience">
               <h1>Experience</h1>
               <div className="container">
                    <div className="card">
                         <div className="top">
                              <ArrowBackIosIcon />
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU" alt="" />
                              <YouTubeIcon />
                         </div>
                         <div className="center">
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae laboriosam, 
                              ducimus sed quaerat id facilis. Neque animi obcaecati ea 
                         </div>
                         <div className="bottom">
                              <h3>Tekion</h3>
                              <h4>Associate Software Engineer</h4>
                         </div>

                    </div>
               </div>
          </div>
     )
}
