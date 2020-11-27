import React from 'react'
import "./style.css";

const BoxContact = ({icon,title,textcontent}) => {
    return (
      
           
        <div className="bgcontact_display">
            <div className="c_input">

                 <div className="container c_input_contaner">
            <h3 style={{ color: "#fff", textAlign: "center",fontWeight:700 }} className="heading vc_custom_1554105399549">
            اطلب خدمتك وسنعاود الاتصال بك
            </h3>
          
		<div className="wpb_text">
			<p style={{ color: "#fff", textAlign: "center",fontSize:20,marginTop:10}}>قدم معلومات المناقشة وشنعاود الاتصال بكم في اقرب وقت ممكن</p>

                </div>
            </div>

            </div>
           
            <div className="c_input ">
                <input  className="inpy"  type="text" placeholder="اكتب اسمك" />
                <input className="inpy" type="text" placeholder="نوع الخدمة" />
                <input className="inpy" type="text" placeholder="رقم هاتفك" />
                <input className="inpy" type="text" placeholder="بريدك الالكتروني" />
                <button className="inpy_btn">ارسال</button>


            </div>
            
            
            </div>
              
       
    )
}

export default BoxContact