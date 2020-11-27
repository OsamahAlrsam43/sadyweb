import React from 'react'
import "./style.css";
import * as Fa from 'react-icons/fa';
import * as Gr from 'react-icons/gr';
import * as Io from 'react-icons/io';
import * as Si from 'react-icons/si';

import BoxServes from './BoxServes';

const index = () => {

    const databox = [
        {
        icon: <Gr.GrPlan size={30}/>,
        title: "حسابات ختامية واستشارات ضريبية",
        textcontent: "قبل البدأ في الحديث تفصيليًا عن عناصر التخطيط الاستراتيجي، ولماذا هو مفيد لشركتك، وكيف يساعدك على تحقيق رؤية المؤسسة وأهدافها، علينا تحديد مفهوم التخطيط الاستراتيجي في البداية .",
        },
         {
         icon: <Gr.GrCube size={30}/>,
        title: "استشارة مالية",
        textcontent: "تعد الاستشارات المالية واحدة من أهم الوسائل المستخدمة في المشاريع الكبرى والصغرى وفي الشركات والمؤسسات، بجانب الاستشارات الإدارية والاستشارات التسويقية.",
        },
          {
         icon: <Io.IoMdPodium size={30}/>,
        title: "التداولات والأسهم",
        textcontent: "مئات المتداولين يستفيدون من توصياتنا يومياً انضم الان لفترة تجريبية وشاهد نتائجنا بنفسك.",
        },
           {
         icon: <Fa.FaUmbrella size={30}/>,
        title: "التدقيق والتأكيد",
        textcontent: "الالتزام بالوقت المحدد لتنفيذ أعمال التدقيق دون تأخير أو مفاجآت .",
        },
            {
         icon: <Si.SiCashapp size={30}/>,
        title: "التوقعات المالية",
        textcontent: "التوقعات المالية او التنبؤ المالي هو عملية تقدير أو تنبؤ بكيفية أداء السوق في المستقبل. .",
        },
             {
         icon: <Io.IoMdWallet size={30}/>,
        title: "السندات والسلع",
        textcontent: "السندات بشكل عام هي أداة دين تلجأ إليها الحكومات والشركات لتمويل مشاريعها حيث أنها توفر عائدا جيدا ... سلع نهائية · سلعة أساسية.",
        },
        
    ]
    return (
        <div className="kdmat">
            <div className="container">
                <div className="kdmat_content_header_top">
                    <div>
                        <p style={{margin:2,fontSize:30}}>خدماتنا</p>
                        <h1 style={{fontWeight:700,marginTop:0}}>ما نقدمه لك</h1>
                    </div>
                    <a className="a_text" href="/">جميع الخدمات</a>
                </div>

                <div className="service-main">
                    {databox.map((res,i)=><BoxServes key={i} icon={res.icon} title={res.title} textcontent={res.textcontent}/>)}
                    
                </div>
               
            
    </div>
    </div>
           
    )
}

export default index
