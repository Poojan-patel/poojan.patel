import "./skillSet.scss"

import React from 'react'

export default function SkillSet({title, activate, setActivate, id}) {
     return (
          
          <div className={"portfolioList " + (activate && "active")} onClick={()=>setActivate(id)}>
               <span>{title}</span>
          </div>
          
     )
}



