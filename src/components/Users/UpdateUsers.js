import React, {  useEffect, useState } from "react";
import { useStateValue } from "../../reducer/StateProvider";
import NavDashBoard from ".././NavDashBoard";
import axios from "../../utils/API"
import { Link, useHistory } from "react-router-dom";

const UpdateUsers = () => {
  const [{ user }, ] = useStateValue();
  const [iduser,setiduser] = useState(user.idusers);
  const [username, setusername] = useState(user.nameuser);
  const [passwordusers, setpasswordusers] = useState(user.pass);
  const [phone, setphone] = useState(user.phone);
  const [address, setaddress] = useState(user.address);
  const [stateuser, setastateuser] = useState(user.state);
  const [deletefile, setdeletefile] = useState("");
  const [addfile, setaddfile] = useState("");
  const [updatefile, setupdatefile] = useState("");
  const [roleuser, setroleuser] = useState("");

  const [addfolder, setaddfolder] = useState("");
  const [deletefolder, setdeletefolder] = useState("");
  const [updatefolder, setupdatefolder] = useState("");
  const [showusers, setshowusers] = useState("");

   const [deleteusers, setdeleteusers] = useState("");
  const [updateusers, setupdateusesrs] = useState("");
  const [addfolderall, setaddfolderall] = useState("");
 const [deletallusers, setdeletallusers] = useState("");
  const [adduser, setadduser] = useState("");
  
  const history = useHistory();
  
  const LOGINUSER = localStorage.getItem("LOGINUSER");
   
  const userid = localStorage.getItem("idusee");
    const idmustakdem = localStorage.getItem("idmustakdem");

if (LOGINUSER === null||userid === null ) {
    history.push("/login", { from: "UpdateUsers" });
  }
  

 

  useEffect(() => {
if (LOGINUSER === null||userid === null ) {
          history.push("/login", { from: "UpdateUsers" });
  }
 else {
    const fetchdata = async () => {
      
               //const userusername = await axios.post(`users/${userid}`);

         const userone = await axios.post(`users/${idmustakdem}`);
 setusername(userone.data.username);
 setiduser(userone.data.iduser);
 setpasswordusers(userone.data.password);
 setphone(userone.data.phone);
 setaddress(userone.data.address);
       setastateuser(userone.data.state);
       setroleuser(userone.data.role)
   // const getdtuser = await axios.post(`users/userid/${userid}`);
    // console.log(userone.data)
       setaddfile(userone.data.permistoin_users[0].add)
       setdeletefile(userone.data.permistoin_users[0].delete)
       setupdatefile(userone.data.permistoin_users[0].update)

        setaddfolder(userone.data.permistoin_users[0].addfolder)
       setdeletefolder(userone.data.permistoin_users[0].deletfolder)
       setupdatefolder(userone.data.permistoin_users[0].updatefolder)
       setshowusers(userone.data.permistoin_users[0].show)
              
       //
       setdeleteusers(userone.data.permistoin_users[0].deleteusers)
       setupdateusesrs(userone.data.permistoin_users[0].updateusers)
       setaddfolderall(userone.data.permistoin_users[0].addfolderall)

        setdeletallusers(userone.data.permistoin_users[0].deletallusers)
       setadduser(userone.data.permistoin_users[0].adduser)

    }
   
    fetchdata();
      }
     

  }, [idmustakdem])
    


  const updateuser = async (e) => {
    e.preventDefault();
     alert("تم تعديل معلومات المستخدم");


    await axios.put(`users`, { iduser: idmustakdem, username: username, password: passwordusers, phone: phone, address: address, state: stateuser, role: roleuser,addper:addfile,updateper:updatefile,deleteper:deletefile ,addfolder:addfolder,updatefolder:updatefolder,deletfolder:deletefolder,showusers:showusers,deleteusers:deleteusers,updateusers:updateusers,addfolderall:addfolderall,deletallusers:deletallusers,adduser:adduser})
  }
 
  
  const deleteuser = async (e) => {
   
 let  answer = window.confirm("هل انت متاكد من حذف المستخدم?");
if (answer) {
   alert("تم حذف المستخدم");
   history.push("/usersmange", { from: "UpdateUsers" });
  await axios.delete(`users/${idmustakdem}`)

}
else {
    
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
      <div className="users_header">
        تعديل تفاصيل المستخدم
          <Link to="/usersmange">
            {" "}
         
          </Link>
         </div>

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
                defaultValue={idmustakdem}
                disabled={true}
                
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
              <select className="form-control p-0"   value={stateuser}
                onChange={(e)=>(setastateuser(e.target.value))}>
                <option>فعال</option>
                <option>متوقف</option>
              </select>
            </div>
          </div>
          <div className="col-sm-12 col-md-12  mt-4 text-right">صلاحية المستخدم</div>
          
          <div className="col-sm-12 col-md-4 mt-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">اضافة مجلد</span>
              </div>
              <select className="form-control p-0"   value={addfolder}
                onChange={(e)=>(setaddfolder(e.target.value))}>
                <option>نعم</option>
                <option>لا</option>
              </select>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mt-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">حذف مجلد</span>
              </div>
              <select className="form-control p-0"   value={deletefolder}
                onChange={(e)=>(setdeletefolder(e.target.value))}>
                <option>نعم</option>
                <option>لا</option>
              </select>
            </div>
          </div>

            <div className="col-sm-12 col-md-4 mt-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">تعديل مجلد</span>
              </div>
              <select className="form-control p-0"   value={updatefolder}
                onChange={(e)=>(setupdatefolder(e.target.value))}>
                <option>نعم</option>
                <option>لا</option>
              </select>
            </div>
          </div>

<div className="col-sm-12 col-md-4 mt-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">اضافة ملف</span>
              </div>
              <select className="form-control p-0"   value={addfile}
                onChange={(e)=>(setaddfile(e.target.value))}>
                <option>نعم</option>
                <option>لا</option>
              </select>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mt-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">حذف ملف</span>
              </div>
              <select className="form-control p-0"   value={deletefile}
                onChange={(e)=>(setdeletefile(e.target.value))}>
                <option>نعم</option>
                <option>لا</option>
              </select>
            </div>
          </div>

            <div className="col-sm-12 col-md-4 mt-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">ادارة المستخدمين</span>
              </div>
              <select className="form-control p-0"   value={showusers}
                onChange={(e)=>(setshowusers(e.target.value))}>
                <option>نعم</option>
                <option>لا</option>
              </select>
            </div>
          </div>

           <div className="col-sm-12 col-md-4 mt-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">اضافة مستخدم</span>
              </div>
              <select className="form-control p-0"   value={adduser}
                onChange={(e)=>(setadduser(e.target.value))}>
                <option>نعم</option>
                <option>لا</option>
              </select>
            </div>
          </div>

           <div className="col-sm-12 col-md-4 mt-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">تعديل تفاصيل المستخدم</span>
              </div>
              <select className="form-control p-0"   value={updateusers}
                onChange={(e)=>(setupdateusesrs(e.target.value))}>
                <option>نعم</option>
                <option>لا</option>
              </select>
            </div>
          </div>

           <div className="col-sm-12 col-md-4 mt-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">حذف مستخدم</span>
              </div>
              <select className="form-control p-0"   value={deleteusers}
                onChange={(e)=>(setdeleteusers(e.target.value))}>
                <option>نعم</option>
                <option>لا</option>
              </select>
            </div>
          </div>

           <div className="col-sm-12 col-md-6 mt-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">حذف جميع المستخدمين</span>
              </div>
              <select className="form-control p-0"   value={deletallusers}
                onChange={(e)=>(setdeletallusers(e.target.value))}>
                <option>نعم</option>
                <option>لا</option>
              </select>
            </div>
          </div>

           <div className="col-sm-12 col-md-6 mt-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">اضافة مجلد للكل</span>
              </div>
              <select className="form-control p-0"   value={addfolderall}
                onChange={(e)=>(setaddfolderall(e.target.value))}>
                <option>نعم</option>
                <option>لا</option>
              </select>
            </div>
          </div>
          
          <div className="col-sm-12 col-md-12 mt-3 d-flex justify-content-between">
              <button onClick={deleteuser} className="ml-4 btn btn-danger" >
               حذف المستخدم 
              
            </button>

            <button className="btn btn-primary bg-success" onClick={updateuser}>
              تعديل
            </button>
          </div>

         
        
          
        </div>
      </div> 
</div>
   );
};

export default UpdateUsers;
