import React, { useEffect, useState } from 'react'

import "./style.css";
import NavDashBoard from ".././NavDashBoard";
import { AiOutlineUserAdd,AiFillFolderAdd } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { FcDeleteDatabase } from "react-icons/fc";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineMenuUnfold } from 'react-icons/ai';

import axios from "../../utils/API"

import { useStateValue } from "../../reducer/StateProvider";
import { actiontype } from "../../reducer/Reducer";
import TRbody from "./TRbody";

const Users = () => {
   const userid = localStorage.getItem("idusee");
  const [datauser, setdatauser] = useState([{}])
  const [serchnameuser, setserchnameuser] = useState("")
  const [showdivfolder, setshowdivfolder] = useState(false)
  const [addfolderall, setaddfolderall] = useState(true);
  const [deletallusers, setdeletallusers] = useState(true);
  const [adduser, setadduser] = useState(true);

  const history = useHistory();

  const getCurrentDate=(separator='')=>{

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
    
  }
  
  const susers = () => {
      
    if (serchnameuser === "") {
     axios.get("users").then(res =>setdatauser(res.data))
    }
      else {
        const getserchuser = datauser.filter(res => res.username === serchnameuser).map(re => re)
    setdatauser(getserchuser)
      }
    }

      
  


  const [, dispatch] = useStateValue();
  const getusers = async () => {
    const user = await axios.get("users");
  setdatauser(user.data)
  }

 

     const [loadinimg, setloadinimg] = useState(false)
  const deleteallusers = async (event) => {
    event.persist()
     const config = {
      
    onUploadProgress: function(progressEvent) {
      var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
      console.log(`loaded : ${progressEvent.loaded} ,total :${progressEvent.total} percentCompleted:${percentCompleted}`)
    }
  }
    const userone = await axios.post(`users/${userid}`);
    //console.log(userone.data.username)
    if (userone.data.permistoin_users[0].deletallusers === "لا") {
      alert("لا تمتلك  صلاحية حذف المستخدمين ")
    }
    else {

      let answer = window.confirm(" هل انت متاكد من حذف جميع المستخدمين؟");
      if (answer) {
         setloadinimg(true)
        datauser.map(async res =>
          res.role == "مستخدم" ? await axios.post(`users//deluser/${res.iduser}`,{},config) : ""
       
        )
         
                   setTimeout(async() => {
                   setloadinimg(false)

          const user = await axios.get("users",config);
        setdatauser(user.data)
        dispatch({
          type: actiontype.SET_DATAUESER,
          items: user.data
        });
       
        //alert("تم حذف جميع المستخدمين")
        }, 5000);
        

      }

      else {
      
      }
    
    }
  }

  const addnewuser =async () => {
   const userone = await axios.post(`users/${userid}`);
    if (userone.data.permistoin_users[0].adduser === "لا") {
      alert("لا تمتلك صلاحية اضافة مستخدم")
    }
    else {
        history.push("/addusers", { from: "Users" });

    }

  }


    const LOGINUSER = localStorage.getItem("LOGINUSER");

  const peruser = async () => {
    if (LOGINUSER === null || userid === null) {

      history.push("/login", { from: "Users" });

    }
    else {
       
    
      const userone = await axios.post(`users/${userid}`);
      if (userone.data.permistoin_users[0].show === "لا") {
        setshowusers(false)
      }
      if (userone.data.permistoin_users[0].deletallusers === "لا") {
        setdeletallusers(false)
      }

      if (userone.data.permistoin_users[0].adduser === "لا") {
        setadduser(false)
      }

      if (userone.data.permistoin_users[0].addfolderall === "لا") {
        setaddfolderall(false)
      }
    }
  }

  useEffect(() => {
    axios.get("users").then(res =>
 setdatauser(res.data)
  ); 
    peruser()
    

   getusers()
  }, [userid])
  const [showusers, setshowusers] = useState(true);
  const [namefolder, setnamefolder] = useState("");

  const addfolderalluser =async () => {
        const userone = await axios.post(`users/${userid}`);

     if (userone.data.permistoin_users[0].addfolderall === "لا") {
      alert(" لا تمتلك صلاحية اضافة مجلد لكل المستخدمين")
    }
    else {
        setshowdivfolder(true)


    }
  }
  
  
    const canceladdfolder = () => {
      setshowdivfolder(false)
      setnamefolder("")
  }

  const addfoldernew = async () => {
    const userone = await axios.post(`users/${userid}`);
    //console.log(userone.data.username)
    if (userone.data.permistoin_users[0].addfolderall === "لا") {
      alert("لا تمتلك صلاحية اضافة المجلد")
    }
    else {
      if (namefolder === "") {
        alert("يرجى ادخال اسم المجلد")

      }
      else {
        setshowdivfolder(false)
        alert("تم اضافة مجلد لجميع المستخدمين")
        const hystory = ` ${getCurrentDate("/")} بتاريخ ${userone.data.username} تم اضافة المجلد من قبل المستخدم`;
        const idfolder = Math.floor(Math.random() * 69566545);
        datauser.map(async res =>
          await axios
            .post("folder", {
              iduser: res.iduser,
              namefolder,
              id: Math.floor(Math.random() * 69566545),
              empollyadd: userone.data.username,
              hystory,
            })
         
        )
        setshowdivfolder(false)
        setnamefolder("")
      }
    }

    //getusers();
  };

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

  const [openmeunmobail, setopenmeunmobail] = useState(false)

  return (
    <div>
      
      {loadinimg &&
        <div>
        <div className="overflowimg"></div>
        <img src={window.location.origin + '/img/loding.gif'} className="img_loding" alt="logo" /></div>}

        {loadingpage &&
        <div>
        <div className="overflowimg"></div>
        <img src={window.location.origin + '/img/loding.gif'} className="img_loding" alt="logo" /></div>}

    
      <NavDashBoard />
      <div className="users">
        <div className="users_header">
          <div>
            <AiOutlineMenuUnfold className="m_mobail" size={30} onClick={() => setopenmeunmobail(!openmeunmobail)}/>
          </div>
         
          <div className="t_mobail">
             ادارة المستخدمين
          </div>
         
             {!showdivfolder &&
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="البحث عن مستخدم"
                className="input_seache_users"
                value={serchnameuser}
                onChange={e => setserchnameuser(e.target.value)}
              />
              <BiSearchAlt onClick={susers} className="box_serach" />
            </div>
          }
          {!showdivfolder &&
            <div onClick={addfolderalluser} className="add_users t_mobail" style={{ background: "#FFC107", color: "black", display: addfolderall ? "" : "none" }}>
              <h5 style={{ margin: 0 }}><AiFillFolderAdd size={25} />اضافة مجلد لكل المستخدمين </h5>
            </div>
          }
          {showdivfolder &&
            <div className="divaddfolder t_mobail">
              <label>اسم المجلد</label>
              <input
              className="input_seache_users"
              onChange={(e) => setnamefolder(e.target.value)}
              value={namefolder}
              />
              <button
              className="btn btn-danger mr-3"
              onClick={addfoldernew}
              >
                اضافة
                
              </button>
            
              <button
                className="btn btn-danger mr-3"
              style={{ background: "slategrey", borderColor: "slategrey" }}
              onClick={canceladdfolder}
              >
                الغاء
              </button>
            
            </div>
          }
          {!showdivfolder &&
           <div  onClick={deleteallusers} style={{display:deletallusers?"":"none"}} className="t_mobail delall_users" >
         

          
            <h5 style={{margin:0,color:"#fff"}}><FcDeleteDatabase size={25} /> حذف جميع المستخدمين</h5>
        
          </div>
          }
          {!showdivfolder &&
            <div onClick={addnewuser} style={{ display: adduser ? "" : "none" }} className="t_mobail add_users">
              {" "}
           
              <h5 style={{ margin: 0, color: "#fff" }}>اضافة مستخدم جديد <AiOutlineUserAdd size={25} /></h5>
           
            </div>
          }
        </div>


        {openmeunmobail &&
          <div className="mune_mobail">
              {!showdivfolder &&
            <div onClick={addfolderalluser} className="add_users " style={{ background: "#FFC107", color: "black", display: addfolderall ? "" : "none" }}>
              <h5 style={{ margin: 0 }}><AiFillFolderAdd size={25} />اضافة مجلد لكل المستخدمين </h5>
            </div>
          }
        
        
            {showdivfolder &&
            <div className="divaddfolder ">
              <label>اسم المجلد</label>
              <input
              className="input_seache_users"
              onChange={(e) => setnamefolder(e.target.value)}
              value={namefolder}
              />
              <button
              className="btn btn-danger m-3"
              onClick={addfoldernew}
              >
                اضافة
                
              </button>
            
              <button
                className="btn btn-danger m-3"
              style={{ background: "slategrey", borderColor: "slategrey" }}
              onClick={canceladdfolder}
              >
                الغاء
              </button>
            
            </div>
          }

           {!showdivfolder &&
           <div  onClick={deleteallusers} style={{display:deletallusers?"":"none"}} className="mt-3 delall_users" >
         

          
            <h5 style={{margin:0,color:"#fff"}}><FcDeleteDatabase size={25} /> حذف جميع المستخدمين</h5>
        
          </div>
          }
          {!showdivfolder &&
            <div onClick={addnewuser} style={{ display: adduser ? "" : "none" }} className="mt-3 add_users">
              {" "}
           
              <h5 style={{ margin: 0, color: "#fff" }}>اضافة مستخدم جديد <AiOutlineUserAdd size={25} /></h5>
           
            </div>
          }
        
        
        </div>
        }
       

        
        <div className="users_content">
            <table className="table table-striped">
            <thead className="thead-dark text-center">
              <tr>
                <th scope="col" >#</th>
                <th scope="col">اسم المستخدم</th>
                <th className="t_mobail" scope="col">رقم المستخدم</th>
                <th className="t_mobail" scope="col">رقم الهاتف</th>
                <th className="t_mobail" scope="col">الحالة</th>
                <th scope="col">الملفات</th>
                <th scope="col" style={{display:!showusers?"none":""}}>تعديل</th>
              </tr>
            </thead>
            <tbody className="text-center">
 {datauser.map((res, i) =>
            <TRbody key={i} {...res} i={i} pershowusers={showusers}/>
            
 )
         }
             </tbody>
            </table>
        
        </div>
      </div>
    </div>
  );
};

export default Users;
