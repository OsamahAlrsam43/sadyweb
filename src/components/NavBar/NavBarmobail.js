import React from 'react'
import "./style.css"

const NavBarmobail = () => {
    
    return (
       
        
        <div className="content_navmobail">
            <img src={window.location.origin + '/img/logo.png'} className="logo_img log" alt="logo" />
             <div className="sadeytxt" alt="logo">
                                المحاسب القانوني والمستشار المالي
                                <p style={{fontFamily:"'Aref Ruqaa', serif",fontSize:30,color:"rgb(255 195 26)",marginBottom:0}}>سعدي محبوُبة</p>
            </div>
            <h4 className="txt_content_navmobail">الرئيسية</h4>
            <h4 className="txt_content_navmobail">من نحن</h4>
                <h4 className="txt_content_navmobail">الخدمات</h4>
                <h4 className="txt_content_navmobail">من نحن</h4>
                <h4 className="txt_content_navmobail">التواصل معنا</h4>
                <h4 className="txt_content_navmobail txt_login" >تسجيل دخول المستخدمين</h4>
            </div>

          
    )
}

export default NavBarmobail
