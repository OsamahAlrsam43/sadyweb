import React from 'react'
const BoxServes = ({icon,title,textcontent}) => {
    return (
      
            <div className="service-box hover-box">
                
                <div>
                  <div className="service-box_icon">{icon}</div>
                  <div className="service-box_title">{title}</div>
                    <div className="service-box_content">{textcontent}</div>
                </div>
                <a className="link-box pagelink" href="/">قراءة المزيد ... </a>
                </div>
       
    )
}

export default BoxServes
