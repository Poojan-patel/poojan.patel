import React, { useEffect, useRef } from 'react'
import "./intro.scss"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {init} from 'ityped'

export default function Intro() {

     const textRef = useRef();

     useEffect(() => {
          console.log(textRef)
          init(textRef.current,{
               showCursor: true,
               strings: ["Developer","Designer","Learner"],
               backDelay: 1000
          })
     }, [])

     return (
          <div className="intro" id="intro">
               
               <div className="right">
                    <div className="wrapper">
                         <h2>Hi There, This is</h2>
                         <h1>Poojan Patel</h1>
                         <h3><span ref={textRef}></span></h3>
                    </div>
                    <a href="assets/poojan_patel.pdf" download>
                         <KeyboardArrowDownIcon className="down-arrow" />
                    </a>
               </div>
               <div className="left">
                    <div className="imgContainer">
                         <img src="assets/self2.jpeg" alt=""></img>
                    </div>
               </div>
          </div>
     )
}
