import React, { useEffect, useState } from 'react'
import UploadFilesService from './UploadFilesService';
import axios from "../../utils/API"

const UploadFiles = () => {
    
    const [file, setfile] = useState({
    selectedFiles: undefined,
    currentFile: undefined,
    progress: 0,
    message: "",
    fileInfos: [],
  });

  const selectfiles = (event) => {
     setfile({
      selectedFiles: event.target.files,
     });
  }

    console.log(file)
    const [state, setState] = useState({ file });

   const  onChange =(e)=> {
    setState({file:e.target.files})
    }
    
  const upload= (e) =>{
        e.preventDefault() // Stop form submit
    fileUpload(state.file).then((response)=>{
      console.log(response.data);
    })
    }
    

    
  const fileUpload=(file)=>{
    const url = "files/upload";
      const formData = new FormData();
    for (const key of Object.keys(state.file)) {
    formData.append('imgCollection', state.file[key])
      }
        const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  axios.post(url, formData,config)
  }


  useEffect(() => {
    
    UploadFilesService.getFiles().then((response) => {
      setfile({
        fileInfos: response.data,
      });
    });
  
  }, [])


   const {
      selectedFiles,
      currentFile,
      progress,
      message,
      fileInfos,
  } = file;
  
    
    return (
        
         <form >
        <h1>File Upload</h1>
        <input type="file" onChange={(e)=>onChange(e)} multiple/>
        <button type="submit" onClick={upload}>Upload</button>
      </form>
       
       
    )
}

export default UploadFiles 
