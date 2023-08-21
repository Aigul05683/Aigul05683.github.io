import React from 'react';

const TableInfo = ({tableData}) => {
    return (
        <div>
            <h1>Расписание группы: <span>{tableData[0]?.name}</span> </h1>
           <div className="flex">
               <div className="box"><h3>Понедельник</h3>
               <ol>
                   <li>{tableData[0]?.mon?.sub1}</li>
                   <li>{tableData[0]?.mon?.sub2}</li>
                   <li>{tableData[0]?.mon?.sub3}</li>
                   <li>{tableData[0]?.mon?.sub4}</li>
                   <li>{tableData[0]?.mon?.sub4}</li>
               </ol></div>
               <div className="box"><h3>Вторник</h3>
               <ol>
                   <li>{tableData[0]?.tue?.sub1}</li>
                   <li>{tableData[0]?.tue?.sub2}</li>
                   <li>{tableData[0]?.tue?.sub3}</li>
                   <li>{tableData[0]?.tue?.sub4}</li>
                   <li>{tableData[0]?.tue?.sub4}</li>
               </ol></div>
               <div className="box"><h3>Среда</h3>
               <ol>
                   <li>{tableData[0]?.wed?.sub1}</li>
                   <li>{tableData[0]?.wed?.sub2}</li>
                   <li>{tableData[0]?.wed?.sub3}</li>
                   <li>{tableData[0]?.wed?.sub4}</li>
                   <li>{tableData[0]?.wed?.sub4}</li>
               </ol></div>
               <div className="box"><h3>Четверг</h3>
               <ol>
                   <li>{tableData[0]?.thu?.sub1}</li>
                   <li>{tableData[0]?.thu?.sub2}</li>
                   <li>{tableData[0]?.thu?.sub3}</li>
                   <li>{tableData[0]?.thu?.sub4}</li>
                   <li>{tableData[0]?.thu?.sub4}</li>
               </ol></div>
               <div className="box"><h3>Пятница</h3>
               <ol>
                   <li>{tableData[0]?.fri?.sub1}</li>
                   <li>{tableData[0]?.fri?.sub2}</li>
                   <li>{tableData[0]?.fri?.sub3}</li>
                   <li>{tableData[0]?.fri?.sub4}</li>
                   <li>{tableData[0]?.fri?.sub4}</li>
               </ol></div>
               <div className="box"><h3>Суббота</h3>
               <ol>
                   <li>{tableData[0]?.sat?.sub1}</li>
                   <li>{tableData[0]?.sat?.sub2}</li>
                   <li>{tableData[0]?.sat?.sub3}</li>
                   <li>{tableData[0]?.sat?.sub4}</li>
                   <li>{tableData[0]?.sat?.sub4}</li>
               </ol></div>
           </div>
        </div>
    );
};

export default TableInfo;