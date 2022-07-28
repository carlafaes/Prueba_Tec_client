import React, { useState, useEffect } from "react";
import InfoForm from "./infoForm";
import ArrInfo from "./ArrInfo";


export default function Home() {
  const [info,setInfo]=useState(null);
  console.log(info,'info')
  let [listInfo,setListInfo]=useState([])
  console.log(listInfo,'listInfo')
 
 
  function handleChangeInfo(info){
    searchWords(info);
    setInfo(null);
  }

  async function searchWords(info) {
    try{

      const request = await fetch(`https://prueba-tec-api.herokuapp.com/api?word=${info}`);
      const data = await request.json();
      console.log(data, 'data');
      setInfo(data);
      setListInfo([...listInfo,data]);
    }
    catch(error){
      console.log(error);
    }
  }

  
  return (
    <div style={{backgroundColor:'#aca2a2',height:'100vh'}}>
     <InfoForm onChangeInfo={handleChangeInfo}  value={info}/>
     <ArrInfo listInfo={listInfo}  />
    </div>
  );
}