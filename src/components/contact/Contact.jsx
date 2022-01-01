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
                   <img src="http://www.cliqto.com/images/blog/6.jpg?w=750&h=400&mode=crop&scale=both" alt="" /> 
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