import React from "react";

export default function ArrInfo({listInfo}){

    return(
        <div>
            <h1>ArrInfo</h1>
           {listInfo.length !== undefined? listInfo.map((item,index)=>{
                return(
                     <div key={index}>
                          <p>{item.text}</p>
                     </div>
                )
           }) : <p>No hay datos</p>} 
        </div>
    )
}