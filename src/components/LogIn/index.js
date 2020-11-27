import React, { useState } from 'react';
import "./style.css";
import * as Fi from 'react-icons/fi';
import axios from "../../utils/API";
import { useHistory } from 'react-router-dom';

const Login = () => {

     const [iduser, setiduser] = useState("173357384");
     const [passuser, setpassuser] = useState("123")
          const [loding, setloding] = useState(false)

     
  const history = useHistory();

     
     const loginuser = async () => {
             
          const loginuser = await axios.post(`users/login/${iduser}&${passuser}`)
            const userone = await axios.post(`users/${loginuser.data.iduser}`);

          if (loginuser)
          {
                                
setloding(true)
               setTimeout(() => {
                    localStorage.setItem("idusee", loginuser.data.iduser);
                    localStorage.setItem("LOGINUSER", true);
                    localStorage.setItem("idmustakdem", loginuser.data.iduser);


                    if (userone.data.role === "مدير نظام") {
                     history.push("/usersmange", { from: "Login" });
                      
                    }

                    else  {
                      history.push("/Mustakdem", { from: "Login" });

                    }

setloding(false)
               }, 2000);
                
               }
          //console.log(loginuser.data.iduser)
    


     }
    return (
         <div className="logn">
              {loding &&
                   <div>
                           <div className="overflowimg"></div>

                  
                   <img src={window.location.origin + '/img/loding.gif'} className="img_loding" alt="logo" /> </div>}
                              

                 <img src={window.location.origin + '/img/login_bg.jpg'} className="logoin_img" alt="logo" />
       <div className="login_overflow"></div>
            <div className="contaier" style={{zIndex:58555}}>
               

                 <div className="" alt="logo" style={{textAlign:"center",margin:15}}> 
                   <h3 style={{fontWeight:700}}> المحاسب القانوني والمستشار المالي</h3>
                <p style={{fontFamily:"'Aref Ruqaa', serif",fontSize:40,color:"rgb(181 19 7)",marginBottom:0}}>سعدي محبوُبة</p>
                  </div> 
            <div className="contaner_input_login">
                <div className="container_div">
                    <label>رقم المستخدم</label>
                     <input value={iduser} onChange={(e)=>setiduser(e.target.value)} className="input_login" type="text"/>
                </div>
                 <div className="container_div">
                    <label>كلمة المرور</label>
                     <input value={passuser} onChange={(e)=>setpassuser(e.target.value)}  className="input_login" type="password" />
                    </div>
                    
                     <div className="container_div " style={{marginTop:30}}>
                     <button onClick={loginuser} className="input_login btn_login">تسجيل الدخول  <Fi.FiLogIn size={25} style={{marginRight:10}}/></button>
                       
                 </div>
        
            </div>
           
        
            </div>
            
             </div>
    )
}

export default Login
