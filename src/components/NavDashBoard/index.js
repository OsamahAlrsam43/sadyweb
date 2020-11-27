import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import "./style.css";
import { BiLogOutCircle } from 'react-icons/bi';
import { FaUsersCog } from 'react-icons/fa';


const NavDashBoard = () => {

      const history = useHistory();

    const loguotuser = async () => {
          
        let  answer = window.confirm("هل انت متاكد من  تسجيل الخروج?");
if (answer) {
   localStorage.removeItem("LOGINUSER");
        localStorage.removeItem("idusee");

        history.push("/login", { from: "NavDashBoard" });

}
else {
    
        }
        
         

          
    }
    
    const settinguser = () => {
                history.push("/usersmange", { from: "NavDashBoard" });

    }
    return (
        <div className="dashboard">
            <div className="dashboard_header">
                <div onClick={settinguser} style={{cursor:"pointer"}}  className="dashboard_header_div link_header_dashboard">

              <FaUsersCog className="ml-2" size={30}/> ادارة المستخدمين                   
                </div>

                <div className="dashboard_header_div">
                    <div style={{ cursor: "pointer" }} onClick={loguotuser} className="link_header_dashboard">تسجيل الخروج<BiLogOutCircle className="mr-2" size={30}/></div>
                 </div>
                
               

            </div>
        </div>
    )
}

export default NavDashBoard
