import React from 'react'
import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
     return (
          <div className={"menu " + (menuOpen && "active")}>
               <ul>
                    <li onClick={()=>setMenuOpen(false)}>
                         <a href="#intro">Home</a>
                    </li>
                    <li onClick={()=>setMenuOpen(false)}>
                         <a href="#portfolio">Skills</a>
                    </li>
                    <li onClick={()=>setMenuOpen(false)}>
                         <a href="#experience">Experience</a>
                    </li>
                    <li onClick={()=>setMenuOpen(false)}>
                         <a href="#works">Projects</a>
                    </li>
                    <li onClick={()=>setMenuOpen(false)}>
                         <a href="#contact">Contact</a>
                    </li>
               </ul>
          </div>
     )
}
