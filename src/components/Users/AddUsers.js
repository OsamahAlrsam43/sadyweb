import React, { useState } from "react";
import NavDashBoard from ".././NavDashBoard";
import axios from "../../utils/API"
import { Link, useHistory } from "react-router-dom";

const AddUsers = () => {


  const idusers = Math.floor(Math.random() * 178664214);
  const [iduser, setiduser] = useState(idusers);
  const [username, setusername] = useState("");
  const [passwordusers, setpasswordusers] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [stateuser, setastateuser] = useState("فعال");
  const [roleuser, setroleuser] = useState("مستخدم");

const userid= localStorage.getItem("idusee")
  const history = useHistory();
  const addnewuser = async (event) => {
 event.persist()
    const userone = await axios.post(`users/${userid}`);
    if (userone.data.permistoin_users[0].adduser === "لا") {
      alert("لا تمتلك صلاحية اضافة مستخدم")
    }
    else {
      if (username==="") {
              alert("يرجى ادخال اسم المستخدم")

      }
     else if (passwordusers === "") {
        alert("يرجى ادخال كلمة مرور المستخدم")

      }
      else {
        
      
        alert("تم اضافة مستخدم جديد")
       
        //
        setusername("");
        setpasswordusers("");
        setphone("");
        setaddress("");
        const idusers = Math.floor(Math.random() * 178664214);
        setiduser(idusers)
        await axios.post("users", { iduser: iduser, username: username, password: passwordusers, phone: phone, address: address, state: stateuser, roleuser: roleuser })
      }
    }
  }
  const [loadingpage, setloadingpage] = useState(true)
  const puser = async () => {
    const userone =await axios.post(`users/${userid}`)
    if (userone.data.role === "مستخدم") {
      history.push("/Mustakdem", { from: "ProtectedRoute" });
      setloadingpage(true)
           
    }

    else {
       setloadingpage(false)
           
    }
  }

  puser()
  
  return (
    <div>
      {loadingpage &&
        <div>
        <div className="overflowimg"></div>
        <img src={window.location.origin + '/img/loding.gif'} className="img_loding" alt="logo" /></div>}

      
      <NavDashBoard />
      <div className="users_header">اضافة مستخدم جديد</div>
      <div className="container addusernew">
        <div className="row">
          <div className="col-sm-12 col-md-6 mt-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">اسم المستخدم</span>
              </div>
              <input
                type="text"
                aria-label="First name"
                className="form-control"
                value={username}
                onChange={(e)=>(setusername(e.target.value))}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 mt-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">رقم المستخدم</span>
              </div>
              <input
                type="text"
                aria-label="First name"
                className="form-control"
                 value={iduser}
                onChange={(e)=>(setiduser(e.target.value))}
              />
            </div>
          </div>

          <div className="col-sm-12 col-md-6 mt-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">كلمة المرور</span>
              </div>
              <input
                type="text"
                aria-label="First name"
                className="form-control"
                 value={passwordusers}
                onChange={(e)=>(setpasswordusers(e.target.value))}
              />
            </div>
          </div>

          <div className="col-sm-12 col-md-6 mt-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">رقم الهاتف</span>
              </div>
              <input
                type="text"
                aria-label="First name"
                className="form-control"
                 value={phone}
                onChange={(e)=>(setphone(e.target.value))}
              />
            </div>
          </div>

          <div className="col-sm-12 col-md-6 mt-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">العنوان</span>
              </div>
              <input
                type="text"
                aria-label="First name"
                className="form-control"
                 value={address}
                onChange={(e)=>(setaddress(e.target.value))}
              />
            </div>
          </div>
          
<div className="col-sm-12 col-md-3 mt-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">نوع المستخدم</span>
              </div>
              <select className="form-control p-0"  value={roleuser}
                onChange={(e)=>(setroleuser(e.target.value))}>
                <option>مستخدم</option>
                <option>مدير نظام</option>
              </select>
            </div>
          </div>

          <div className="col-sm-12 col-md-3 mt-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">الحالة</span>
              </div>
              <select className="form-control p-0" value={stateuser}
                onChange={(e)=>setastateuser(e.target.value)}>
                <option>فعال</option>
                <option>متوقف</option>
              </select>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 mt-3">
           
            <button onClick={addnewuser} className="btn btn-primary" >
               اضافة
              
            </button>
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUsers;
