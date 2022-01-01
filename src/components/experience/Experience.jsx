import React from 'react'
import "./experience.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LanguageIcon from '@material-ui/icons/Language';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Experience() {

     const data = [
          {
               id: 1     ,
               icon: "https://media-exp1.licdn.com/dms/image/C510BAQFBJe8f6rSs8Q/company-logo_200_200/0/1539080791915?e=1649289600&v=beta&t=tx9GiPxxZKT1KviB7JQHMmJ8jPLJtRKICWgH2BQQUbQ",
               cname: "PeanutSquare LLP",
               desc: "Worked as an Summer Intern for the duration of 6 weeks",
               desg: "Software Engineer Intern",
               linkedin: "https://www.linkedin.com/company/peanut-square-llp",
               site: "https://www.peanutsquare.com/"
          },{
               id: 2,
               icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_9aM1kCmOG41JJjxtdV2LJlAliqeLqx3RW0bqXv01YnreWI5sFcbzJkzTnzy2qwb6qc&usqp=CAU",
               cname: "Tekion",
               desc: "Joining the company as a Winter Intern and SDE-I",
               desg: "Associate Software Engineer",
               featured: true,
               site: "https://tekion.com/",
               linkedin: "https://www.linkedin.com/company/tekion",

          },{
               id: 3,
               icon: "https://university-nic.in/wp-content/uploads/Nirma-University.jpg",
               cname: "Center Of Excellence",
               desc: "Worked as a Project Intern for 7 months starting from May-2021",
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
                                   <a href={item.site} target="_blank"><LanguageIcon className="left"/></a>
                                   <img className="user" src={item.icon} alt="" />
                                   <a href={item.linkedin} target="_blank"><LinkedInIcon className="right" /></a>
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
