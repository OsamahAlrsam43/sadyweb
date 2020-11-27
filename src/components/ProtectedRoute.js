import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import axios from ".././utils/API";

        
const ProtectedRoute = ({ Component }) => {
       // const isAuthenticated = localStorage.getItem('token');

    const userid = localStorage.getItem("idusee");
    const LOGINUSER = localStorage.getItem("LOGINUSER");
  const history = useHistory();

    const [isAuthenticated, setisAuthenticated] = useState(true)

    const getperuser = async () => {
       
        
            const userone = await axios.post(`users/${userid}`);
            if (LOGINUSER === null) {
                setisAuthenticated(false)
                  history.push("/login", { from: "ProtectedRoute" });
        }
        
         if (userid === null) {
             setisAuthenticated(false)
               history.push("/login", { from: "ProtectedRoute" });
            }

        if (userone.data.role === "مستخدم") {
              history.push("/Mustakdem", { from: "ProtectedRoute" });
            setisAuthenticated(true)
           

        }
        
      

          
        
  

  }
  
    useEffect(() => {
              getperuser()
        

    }, [userid, LOGINUSER])
    return isAuthenticated? <Component/> : <Redirect to={{ pathname: '/login' }} />
    
}

export default ProtectedRoute
