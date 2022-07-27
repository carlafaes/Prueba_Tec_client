import React from "react";

export default function ArrInfo({lisInfo}){

    return(
        <div>
            <h1>ArrInfo</h1>
           {lisInfo? lisInfo.map((item,index)=>{
                return(
                     <div key={index}>
                          <p>{item.text}</p>
                     </div>
                )
           }) : <p>No hay datos</p>} 
        </div>
    )
}