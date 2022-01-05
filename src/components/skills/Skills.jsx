import React, { useEffect, useState } from 'react'
import SkillSet from '../skillSet/SkillSet'
import "./skills.scss"
import {
    featuredPortfolio, 
    backendPortfolio,
    mobilePortfolio,
    frontendPortfolio
} from "../../data.js"

export default function Skills() {
    const [activated, setActivated] = useState("featured")
    const [data, setData] = useState([])
    const ls = [{
        id: "featured",
        name: "Featured",
        
        },{
            id: "backend",
            name: "Backend Dev",
            
        },{
            id: "frontend",
            name: "Frontend Dev",
            
        },{
            id: "mobile",
            name: "Mobile App",
            
        }
    ]

    useEffect(()=>{

        switch(activated){
            case "featured": setData(featuredPortfolio);
                             break;
            case "backend": setData(backendPortfolio);
                             break;
            case "frontend": setData(frontendPortfolio);
                             break;
            case "mobile": setData(mobilePortfolio);
                             break;
            default: setData(featuredPortfolio);
        }

    },[activated])
    
    return (
          
        <div className="portfolio" id="portfolio">
            
            <div className="wrapper">
            <h1>Skills</h1>
            <div className="types" >
                {ls.map(item=>(
                    <SkillSet title={item.name} activate={activated === item.id} setActivate={setActivated} id={item.id}/>
                ))}
            </div>
            <div className="container">
                {data.map(item=>(
                    <div className="item" id={item.id}>
                        <img src={item.img||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU"} alt="" />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
            </div>
        </div>
          
     )
}
