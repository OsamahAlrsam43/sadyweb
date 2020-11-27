import React from 'react'
import "./style.css"
import * as Fa from 'react-icons/fa';
const index = () => {
    return (
        
        <div className="home_hero">
           
            <div className="container">
                <div className="content_hero">
                    <div className="box_hero">
                        <div className="box_hero_headr">حقق أهدافك المالية بأمان ونجاح</div>
                        <h5>قد يكون من الصعب على الكثيرين تقييم البدائل المالية المتاحة واختيار الأنسب منها أو إنجاز بعض المعاملات المالية التي تحتاج إلى خبرة متخصصة. ستساعدك الخدمات والاستشارات المالية التي يقدمها الخبراء الماليون المحترفون هنا على اتخاذ أفضل القرارات وإنجاز معاملاتك المالية بمجهود أقل.</h5>
                   <button className="box_hero_btn">سجل الان ... </button>
                    </div>
                    <div className="box_hero hro_img">
                        <img src={window.location.origin + '/img/man-slide.png'}  alt=""/>
                    </div>
                </div>

               
               
            </div>
             {/*sectopn box servers*/}
                <div className="box_hero_servers">
                <div className="container">
                    <div className="box_hero_server_main">
                        <div className="box_hero_server_main_box">
                            <Fa.FaServicestack size={40} style={{color:"#f26522",marginBottom:10}}/>
                            <h4>خدمات عالية الجودة</h4>
                            <p>نقدم خدمات  ذات جودة عالية ومعتمدة</p>
                        </div>
                        
                        <div className="box_hero_server_main_box">
                            <Fa.FaDonate size={40} style={{color:"#f26522",marginBottom:10}}/>
                            <h4>استشارة مالية</h4>
                            <p>نقدم استشارات مالية لخدماتك</p>
                        </div>

                        <div className="box_hero_server_main_box">
                            <Fa.FaIdeal size={40} style={{color:"#f26522",marginBottom:10}}/>
                            <h4>أفكار قيّمة</h4>
                            <p>نقدم افكار حديثة ومتطورة ذات قيمة عالية</p>
                        </div>

                        <div className="box_hero_server_main_box">
                            <Fa.FaBook size={40} style={{color:"#f26522",marginBottom:10}}/>
                            <h4>دراسة جدوى</h4>
                            <p>نقدم دراسة جدوى لمشروعك المستقبلي</p>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default index
