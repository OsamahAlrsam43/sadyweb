import React, {  useState } from 'react'
import { RiUserSettingsFill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import axios from "../../utils/API";


import { Link, Redirect, useHistory } from "react-router-dom";
import { useStateValue } from "../../reducer/StateProvider";
import { actiontype } from "../../reducer/Reducer";

const TRbody = ({i,iduser,username,password,phone,address,state,pershowusers}) => {
      const [, dispatch] = useStateValue();

const [radiochick, setradiochick] = useState(false)
const userid = localStorage.getItem("idusee");
  const history = useHistory();


  const getuser = async (idusers, nameuser, pass, phone, address, state) => {
    
     const userone = await axios.post(`users/${userid}`);

    if (userone.data.permistoin_users[0].show === "لا") {

      alert("لا تمتلك صلاحية تعديل المستخدمين ")

       history.push("/updateusers", { from: "TRbody" });

    }
    else {

          localStorage.setItem("idmustakdem", idusers);

       history.push("/updateusers", { from: "TRbody" });

    dispatch({
      type: actiontype.SET_UESER,
      items: { idusers, nameuser,pass,phone,address,state }
   })
    }
  
  }

  const GETFILES = async (iduserss) => {
   // localStorage.setItem("idusee", idusers);
    localStorage.setItem("idmustakdem", iduserss);

    }
  
  

  
  const selectuser = (idusers,username,password,phone,address,state) => {
    
      dispatch({
      type: actiontype.SET_VALUE,
      item: {ID:idusers} 
      })
    //setradiochick(!radiochick);
  }


const changeselectuser = (idusers,username,password,phone,address,state) => {
    
    setradiochick(!radiochick);
  }


    
    return (
        <>
           
            
     
                    <tr onClick={()=>changeselectuser(iduser)}  key={i} style={{cursor:"pointer" , background:radiochick && "#fffc9e",border:radiochick &&"2px solid #8c8c8c"}}>
                        
                
                <td  >{i + 1}</td>
                <td>{username}</td>
                  <td className="t_mobail">{iduser}</td>
                <td className="t_mobail">{phone}</td>
                <td className="t_mobail">{state}</td>
                <td>
                  <Link to="/FilesUsers">
                    {" "}
                    <AiFillFileText
                      size={25}
                        style={{ cursor: "pointer" }}
                        onClick={(e)=>GETFILES(iduser)}
                    />{" "}
                  </Link>
                </td>

                <td style={{display:!pershowusers?"none":""}}>
                
                    {" "}
                    <RiUserSettingsFill
                      size={25}
                        style={{ cursor: "pointer" }}
                        onClick={(e)=>getuser(iduser,username,password,phone,address,state)}
                    />{" "}
                
                </td>
                 
              </tr> 
           
            
           
            </>
    )
}

export default TRbody
