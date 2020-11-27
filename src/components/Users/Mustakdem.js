import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import NavDashBoard from "../NavDashBoard";
import { BiSearchAlt } from "react-icons/bi";
import { AiFillFolderAdd } from "react-icons/ai";
import { ImFolderUpload } from "react-icons/im";
import axios from "../../utils/API";
import { useStateValue } from "../../reducer/StateProvider";
import ShowImg from "./ShowImg";
import { actiontype } from "../../reducer/Reducer";
import { useHistory } from "react-router-dom";

const Mustakdem = () => {

  const userid = localStorage.getItem("idusee");

  
  const baseURLImg = "http://localhost:5000/uploads";

  const [{ user }, dispatch] = useStateValue();
  const [datauser, setdatauser] = useState([]);

  const [addfolder, setaddfolder] = useState(false);

  const [updatefolder, setupdatefolder] = useState(false);
  const [btnadd, setbtnadd] = useState(true);
  const [showbtn, setshowbtn] = useState(false);
  const [namefolder, setnamefolder] = useState("");
  const [iduser, setiduser] = useState(user.idusers);
  const [nameuser, setnameuser] = useState(user.username);
  const [idfolder, setidfolder] = useState("");
    

  //const [namefiles, setnamefiles] = useState("");
  const [filename, setfilename] = useState("");
  /*const [typefiles, settypefiles] = useState("");
  const [pathfiles, setpathfiles] = useState("");
  const [notefiles, setnotefiles] = useState("");
  const [dateupload, setdateupload] = useState("");
*/
  const [perupaddfolder, setperupaddfolder] = useState(true);
  const [perupdatefolder, setperupdatefolder] = useState(true);
  const [perdeletefolder, setperdeletefolder] = useState(true);

    const [peraddfile, setperaddfile] = useState(true);
  const [, setperupdatefile] = useState(true);
  const [perdeletefile, setperdeletefile] = useState(true);

  const getperuser = async () => {
    const userone = await axios.post(`users/${userid}`);
    if (userone.data.permistoin_users[0].updatefolder === "لا") {
      setperupdatefolder(false)
    }

    if (userone.data.permistoin_users[0].deletfolder === "لا") {
      setperdeletefolder(false)
    }

    if (userone.data.permistoin_users[0].addfolder === "لا") {
      setperupaddfolder(false)
    }

  
     if (userone.data.permistoin_users[0].add === "لا") {
      setperaddfile(false)
    }

    if (userone.data.permistoin_users[0].update === "لا") {
      setperupdatefile(false)
    }

    if (userone.data.permistoin_users[0].delete === "لا") {
      setperdeletefile(false) 
    }

  }

 

  
  const ref = useRef("");
  const dt = [];
  const [filefolder, setfilefolder] = useState([]);
  const addfoldernew = async () => {
    const userone = await axios.post(`users/${userid}`);
    if (userone.data.permistoin_users[0].addfolder === "لا") {
      alert("لا تمتلك صلاحية اضافة المجلد")
    }
    else {
      canceladd();
      const hystory = `بتاريخ 13/11/2020 ${nameuser} تم اضافة المجلد من قبل المستخدم`;
      const idfolder = Math.floor(Math.random() * 69566545);

      await axios
        .post("folder", {
          iduser,
          namefolder,
          id: idfolder,
          empollyadd: nameuser,
          hystory,
        })
        .then();

      await datauser.map((res) => dt.push(res));
    }
    //getusers();
  };

  const deletfolder = async () => {
    const userone = await axios.post(`users/${userid}`);
    if (userone.data.permistoin_users[0].deletfolder==="لا") {
      alert("لا تمتلك صلاحية حذف المجلد")
    }
    else {

       let  answer = window.confirm("هل انت متاكد من حذف المجلد?");
if (answer) {
   alert("تم حذف المجلد");
   cancelupdate();
    await axios.delete(`folder`, {
      headers: {
        "Content-Type": "application/json",
      },
      data: { iduser: iduser, idfolder: idfolder },
    });

}

         
    }
  
  };


  const deletefile = async (e) => {
    
        const userone = await axios.post(`users/${userid}`);

    if (userone.data.permistoin_users[0].delete==="لا") {
      alert("لا تمتلك صلاحية حذف الملف")
    }
    else {

       let  answer = window.confirm("هل انت متاكد من حذف الملف?");
if (answer) {
   alert("تم حذف الملف");
   //cancelupdate();
    await axios.delete(`files/${getnamefile}`, {
      headers: {
        "Content-Type": "application/json",
      },
      data: { iduser: iduser, idfolder: idfolder },
     });

}

         
    }
  
  };


  const updatefolderes = async () => {
    const userone = await axios.post(`users/${userid}`);
    if (userone.data.permistoin_users[0].updatefolder==="لا") {
      alert("لا تمتلك صلاحية تعديل المجلد")
    }
    else {
      alert("تم تعديل المجلد");
       cancelupdate();
    const hystory = `بتاريخ 13/11/2020 ${nameuser} تم تعديل المجلد من قبل المستخدم`;
    await axios.put("folder", {
      iduser: iduser,
      idfolder: idfolder,
      namefolder: namefolder,
      empollyadd: nameuser,
      hystory: hystory,
    });
    }
   
  };

  //const [userone, setuserone] = useState("");
  /*const getusers = async () => {

    const userr = await axios.post(`folder/${userid}`);

    setdatauser(userr.data.folder);

    const userone = await axios.post(`users/${userid}`);
 
    setnameuser(userone.data.username);
    setiduser(userone.data.iduser);
    await dispatch({
      type: actiontype.SET_UESER,
      items: userone.data,
    });
  };
*/
  

  const getnamefolder = (e, ee) => {
    dt.filter((res) => res.id === ee).map((rs) => setfilefolder(rs.files));
    setnamefolder(e);
    setidfolder(ee);
    setupdatefolder(true);
    setbtnadd(false);
    setbtnaddfile(true);
  };

  /*const addfilesnew = async () => {
    const hystoryy = `بتاريخ 13/11/2020 ${nameuser} تم اضافة الملف من قبل المستخدم`;

    const idfiles = Math.floor(Math.random() * 187878678687876);
    const userr = await axios.post("files", {
      iduser: iduser,
      idfolder: idfolder
    });
  };*/

  const canceladd = () => {
    setaddfolder(!addfolder);
    setbtnadd(true);
    setshowbtn(false);
  };

  const cancelupdate = () => {
    setupdatefolder(!updatefolder);
    setbtnadd(true);
  };

  const addfolderd =async () => {

    const userone = await axios.post(`users/${userid}`);
    if (userone.data.permistoin_users[0].addfolder === "لا") {
      alert("لا تمتلك صلاحية اضافة المجلد")
    }
    else {
      setaddfolder(!addfolder);
      setbtnadd(false);
      setshowbtn(true);
      setnamefolder("");
    }
  };

  const [opendivaddfile, setopendivaddfile] = useState(false);
  const [btnaddfile, setbtnaddfile] = useState(false);
  const [showbtnaddfile, setshowbtnaddfile] = useState(false);
  const [, setnamefile] = useState("");

  const addfilediv = () => {
    setopendivaddfile(!opendivaddfile);
    setbtnaddfile(false);
    setshowbtnaddfile(true);
    setnamefile("");
    setshowbtn(true);

  };

  const canceladdfile = () => {
    setopendivaddfile(!addfolder);
    setbtnaddfile(true);
    setshowbtnaddfile(false);
    setshowbtn(false);
  };

  

  datauser.map((res) => dt.push(res));

 // const data = [];
  const [, setdatafile] = useState([]);
  /*const getfiles = async () => {
    const datagile = await axios.get("files");
    setdatafile(datagile.data);
  };*/

 
useEffect( () => {
  
    const fetchdata =async () => {
    const userr = await axios.post(`folder/${userid}`);

    setdatauser(userr.data.folder);

    const userone = await axios.post(`users/${userid}`);
   
    setnameuser(userone.data.username);
    setiduser(userone.data.iduser);
    await dispatch({
      type: actiontype.SET_UESER,
      items: userone.data,
    })
    }
   
    fetchdata()
    getperuser()
    
  }, [datauser,userid]);

  useEffect(() => {
    const fetdatfile = async()=>{
       const datagile = await axios.get("files");
    setdatafile(datagile.data);
    }
    fetdatfile();
  }, [datauser])

  const [namejpgfile, setnamejpgfile] = useState("");
    const [getnamefile, setgetnamefile] = useState("");
  const [typeimg, settypeimg] = useState(true);
  const downfile = async (e, type, ee) => {
    addfilediv()
    setgetnamefile(e)
    setfilename(ee)
    if (type === "image/jpeg") {
      setnamejpgfile(e);
      settypeimg(true);
    } else {
      setnamejpgfile("");
      settypeimg(false);
    }
  };

  const [state, setState] = useState({ file: "" });

  const onChange = (e) => {
    setState({ file: e.target.files });
  };

  const upload = async (e) => {
e.persist()
    const userone = await axios.post(`users/${userid}`);
    if (userone.data.permistoin_users[0].add === "لا") {
      alert("لا تمتلك صلاحية رفع ملف ")
    }
    else {

      e.preventDefault(); // Stop form submit
      if (state.file === "") {
        alert("لا توجد ملفات لرفعها")
      }

      else {
      
  
        fileUpload(state.file).then((response) => { });

        setopendivaddfile(!addfolder);
        setbtnaddfile(true);
        setshowbtnaddfile(false);
        setshowbtn(false);
        setState({ file: "" });
      }
      
    }

  };
      const history = useHistory();

  const fileUpload = (file) => {
    const url = "files/upload";
    const formData = new FormData();
    for (const key of Object.keys(state.file)) {
      formData.append("imgCollection", state.file[key]);
    }
    formData.append("iduser", iduser);
    formData.append("idfolders", idfolder);

    return axios.post(url, formData);
  };

 const loguotuser = async () => {
          localStorage.removeItem("LOGINUSER");
        localStorage.removeItem("idusee");

        history.push("/login", { from: "NavDashBoard" });

          
    }


  return (
    <div>
      <div className="users_header">
        ملفات المستخدم {user.username}
        <h4>رقم المستخدم {iduser}</h4>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="البحث عن ملف"
            className="input_seache_users"
          />
          <BiSearchAlt className="box_serach" />
        </div>

          <div className="dashboard_header_div">
                   <div style={{cursor:"pointer"}} onClick={loguotuser}  className="link_header_dashboard">تسجيل الخروج</div>
                 </div>
                
        
      </div>

      <div className="folder_files_users">
        <div className="folderfiles_header">
          <h4>المجلدات</h4>

          {addfolder && (
            <div className="divaddfolder">
              <label>اسم المجلد</label>
              <input
                ref={ref}
                value={namefolder}
                onChange={(e) => setnamefolder(e.target.value)}
                className="input_seache_users"
              />
              <button className="btn btn-primary mr-3" onClick={addfoldernew}>
                اضافة
              </button>
              <button className="btn btn-danger mr-3" onClick={canceladd}>
                الغاء
              </button>
            </div>
          )}

          {btnadd && (
            <h5  style={{display:!perupaddfolder?"none":"" }}>
              اضافة مجلد{" "}
              <AiFillFolderAdd
                size={30}
                style={{ cursor: "pointer", color: "#1A237E",display:!perupaddfolder?"none":"" }}
              
                onClick={addfolderd}
              />
            </h5>
          )}

          {updatefolder && (
            <div className="divaddfolder">
              <label>اسم المجلد</label>
              <input
                value={namefolder}
                onChange={(e) => setnamefolder(e.target.value)}
                className="input_seache_users"
              />

              <button className="btn btn-primary mr-3" style={{display:!perupdatefolder?"none":""}} onClick={updatefolderes} >
                تعديل
              </button>
              <button className="btn btn-danger mr-3" style={{display:!perdeletefolder?"none":""}} onClick={deletfolder}>
                حذف
              </button>
              <button
                className="btn btn-danger mr-3"
                style={{ background: "slategrey", borderColor: "slategrey" }}
                onClick={cancelupdate}
              >
                الغاء
              </button>
            </div>
          )}
        </div>

        <div className="folderfiles_content">
          {dt.map((res, ii) => (
            <button
              disabled={showbtn}
              key={ii}
              className="box_folderuser"
              onClick={() => getnamefolder(res.namefolder, res.id)}
            >
              <h5>{res.namefolder}</h5>
              { dt.filter((resd) => resd.id === res.id).map((rs,idk) =>
                <h5 key={idk} className="folderlengh">{rs.files.length}</h5>
               )}
              
             
            </button>
          ))}
        </div>
      </div>

      <div className="files_users">
        <div className="folderfiles_header">
          <h4>الملفات</h4>
 <h5>{filename}</h5>
          {btnaddfile && (
            <div style={{display:!peraddfile?"none":"" }} onClick={addfilediv}>
              <h5  >
                اضافة ملف{" "}
                <ImFolderUpload
                  size={25}
                  style={{ cursor: "pointer", color: "#F44336" }}
                />
              </h5>
            </div>
          )}

          {showbtnaddfile && (
            <div className="divaddfolder">
              
              <div style={{ width: 600,display:!peraddfile?"none":""  }}>
               
                <input
                  type="file"
                  onChange={(e) => onChange(e)}
                  multiple
                  style={{background: "#ffeb3b", border: "1px solid black",width:400}}
                />

                <button  className="btn btn-primary mr-3" onClick={upload}>
                  {" "}
                  رفع الملفات
                </button>
              </div>

              <button style={{ display:!perdeletefile?"none":""  }}  className="btn btn-danger mr-3" onClick={deletefile}>
                حذف
              </button>
              <button
                className="btn btn-danger mr-3"
                style={{ background: "slategrey", borderColor: "slategrey" }}
                onClick={canceladdfile}
              >
                الغاء
              </button>
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className="files_content">
            {filefolder.map((res, i) => (
              <div
                key={i}
                className="box_filesuser"
                onClick={() => downfile(res.filename, res.mimetype,res.originalname)}
              >
                <img
                  className="img_files"
                  src={window.location.origin + `/img/${res.mimetype}.jpg`}
                  alt=""
                />
                <h5>{res.originalname}</h5>

                {res.mimetype === "image/jpeg" ? (
                  ""
                ) : (
                  <a
                    onClick={() => setnamejpgfile("")}
                    href={`${baseURLImg}/${res.filename}`}
                  >
                    تحميل الملف
                  </a>
                )}
              </div>
            ))}

            {namejpgfile && (
              <div>
                <div
                  className="overflowimg"
                  onClick={() => setnamejpgfile("")}
                ></div>
                <ShowImg img={`${baseURLImg}/${namejpgfile}`} type={typeimg} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mustakdem;
