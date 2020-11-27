import React, { useState } from 'react'
import "./style.css"
import * as Fa from 'react-icons/fa';
import * as Ai from 'react-icons/ai';
import NavBarmobail from './NavBarmobail';
import { Link } from 'react-router-dom';



const NavBar = () => {

    const [navmobail, setnavmobail] = useState(false);

    return (
        <div>
            <div className={navmobail ? " active_navmobil" : "navbar_mobail"}>
                <NavBarmobail />
                <div className="close_navmobail" onClick={()=>setnavmobail(!navmobail)}>X</div>
                    </div>

            <div className="nav_mobail">
                <Ai.AiOutlineMenu size={30} style={{ color: "#fff", cursor: "pointer" }} onClick={()=>setnavmobail(true)}/>
               
                <img src={window.location.origin + '/img/logo.png'} className="logo_img" alt="logo" />

                 <div className="sadeytxt" alt="logo">
                                المحاسب القانوني والمستشار المالي
                                <p style={{fontFamily:"'Aref Ruqaa', serif",fontSize:30,color:"rgb(255 195 26)",marginBottom:0}}>سعدي محبوُبة</p>
                  </div>
               
            </div>
           
        <nav >
           
            <div className="nav">
                <div className="container">
                        {/*top header */}

                     <div className="nav_top">
                    <div className="content_elemnt_right">
                      <a href="/">وقت الدوام : السبت الى الخميس من ساعة 8 صباحا الى 10 مساءً</a>
                    </div>
                    <div className="content_elemnt_left">
                        <a href="/"><Fa.FaFacebookF /></a>
                        <a href="/"><Fa.FaWhatsapp /></a>
                        <a href="/"><Fa.FaViber /></a>
                    </div>
                    </div>

                  
                </div>
                
            </div>
    {/*header main*/}
            <div className="nav_header">
                <div className="container">
                    <div className="header_main">
                       
                        <div style={{textAlign:"center",fontSize:15}}>
                                المحاسب القانوني والمستشار المالي
                                <p style={{fontFamily:"'Aref Ruqaa', serif",fontSize:30,color:"rgb(255 195 26)",marginBottom:0}}>سعدي محبوُبة</p>
                        </div>
                        
                        <div className="header_main_right">
                            <div className="header_main_phone">
                            <h5 >رقم الهاتف: 964+<br/></h5>
                            <h5>07809944088<br/>07601666366</h5>
                            </div>
                            <div className="header_main_address">
                            <h5>العنوان:<br/></h5>
                            <h5>العراق-النجف الاشرف<br/> شارع سلام جامعة (شارع ابو حكمة) مجاور ماسي مول</h5>
                            </div>
                          
                            
                        </div>
                        <div className="header_main_left">
                            <div className="header_main_logo">
                              
                                
                                <img src={window.location.origin +'/img/logo.png'} className="logo_img" alt="logo"/> 
                               
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            {/*nav header */}
            <div className="header_navbar">
                <div className="container">
                    <div className="header_navbar_main">
                        <div className="header_navbar_right">
                        <Link  to="/">الرئيسية</Link>
                        <Link to="/">من نحن</Link>
                        <Link to="/">الخدمات</Link>
                        <Link to="/">التواصل معنا</Link>
                        </div>
                        <div className="header_navbar_left">
                        <Link  to="/login">تسجيل الدخول  <Fa.FaUserCircle style={{marginRight:5}}/></Link>
                           
                        </div>
                      
                    </div>
                   
                </div>
            </div>

            </nav>
            </div>
    )
}

export default NavBar
