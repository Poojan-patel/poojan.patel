import React from 'react'
import "./topbar.scss"
import {Mail} from '@material-ui/icons'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Topbar({menuOpen, setMenuOpen}) {
     return (
          <div className={"topbar " + (menuOpen && "active")}>
               <div className="wrapper">
               <div className="left">
                    <a href="#intro" className="logo">Dev</a>
                    <div className="details">
                         <div className="itemContainer">
                              <LinkedInIcon className="icon" />
                              <a href="https://linkedin.com/in/poojanvpatel/" target="_blank" rel="noreferrer">linkedin.com/in/poojanvpatel/</a>
                         </div>
                         <div className="itemContainer">
                              <Mail className="icon" />
                              <span>poojan4004@gmail.com</span>
                         </div>
                    </div>
               </div> 
               <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                         <span className="line1"></span>
                         <span className="line2"></span>
                         <span className="line3"></span>
                    </div>
               </div>
               </div>
          </div>
     )
}
