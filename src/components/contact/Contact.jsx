import React from 'react'
import { useState } from 'react';
import "./contact.scss"

export default function Contact(){

     const [message, sentMessage] = useState(false);

     return (
          <div className="contact" id="contact">
               <div className="left">
                   <img src="/assets/contact_us.webp" alt="" /> 
               </div>
               <div className="right">
                    <h2>Contact.</h2>
                    <div className="wrapper">
                         <form action="mailto:poojan4004@gmail.com" encType="multipart/form-data">
                              <input type="text" placeholder="Email" />
                              <textarea placeholder="Message"></textarea>
                              <button type="submit" onClick={()=>sentMessage(true)}>Send</button>
                              {message && <span>Thanks, I'll reply ASAP :)</span>}
                         </form>
                    </div>
               </div>
          </div>
     )
}