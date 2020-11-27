import React from 'react'
import "./style.css";
import * as Im from 'react-icons/im';
import * as Md from 'react-icons/md';
import BoxContact from './BoxContact';


const index = () => {


    return (
        <div className="contactme ">
            <div>
                <h1 style={{fontWeight:700,fontSize:50}}>تواصل معنا</h1>
            </div>
          
            <div className="contactme_content">
                <div className="box_contact">
                 <h3><Im.ImPhone size={30} /></h3>
                    <h2>رقم الهاتف</h2>
                    
                    <h3>+964 7809944088</h3>
                     <h3>+964 7601666366</h3>

                </div>
                <div className="box_contact">
                <h2><Md.MdEmail size={30}/></h2>
                 <h3>البريد الالكتروني</h3>
                 <h3>saaadi_m@yahoo.com</h3>
                </div>
                <div>       
                </div> 
                  <div className="box_contact2">
                <h2><Im.ImLocation2 size={30}/></h2>
                 <h3>العنوان</h3>
                 <h3>العراق-النجف الاشرف شارع سلام جامعة (شارع ابو حكمة) مجاور ماسي مول</h3>
                </div>
                <div>       
                </div> 
           </div>
            
           
            
             <BoxContact />
        </div>

       
    )
}

export default index
