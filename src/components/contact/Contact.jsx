import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "./contact.scss"

export default function Contact(){

     const [message, sentMessage] = useState(false);

     const handleSubmit = (e)=>{
          e.preventDefault();
          sentMessage(true);
     }
     

     return (
          <div className="contact" id="contact">
               <div className="left">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mFrxibGfwbpT_Ik6hXYEjA1RJRDi6joN4w&usqp=CAU" alt="" /> 
               </div>
               <div className="right">
                    <h2>Contact.</h2>
                    <form onSubmit={handleSubmit}>
                         <input type="text" placeholder="Email" />
                         <textarea placeholder="Message"></textarea>
                         <button type="submit">Send</button>
                         {message && <span>Thanks, I'll reply ASAP :)</span>}
                    </form>
               </div>
          </div>
     )
}