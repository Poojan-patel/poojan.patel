import React from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import "./portfolio.scss"

export default function portfolio() {
    const ls = [{
        id: "featured",
        name: "Featured"
        },{
            id: "backend",
            name: "Backend Dev"
        },{
            id: "frontend",
            name: "Frontend Dev"
        },{
            id: "mobile",
            name: "Mobile App"
        }
    ]
    
    return (
          
        <div className="portfolio" id="portfolio">
            
            <div className="wrapper">
            <h1>Portfolio</h1>
            <div className="types">
                {ls.map(item=>(
                    <PortfolioList title={item.name}/>
                ))}
            </div>
            <div className="container">
                <div className="item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
            </div>
        </div>
          
     )
}
