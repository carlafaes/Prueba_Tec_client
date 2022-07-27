import React, { useState, useEffect } from "react";
import InfoForm from "./infoForm";
import ArrInfo from "./ArrInfo";


export default function Home() {
  const [info,setInfo]=useState(null);
  console.log(info,'info')
  let [listInfo,setListInfo]=useState([])
  console.log(listInfo,'listInfo')

  useEffect(() => {
    searchWords();
  }, []);
  
  useEffect(() => {
    console.log(listInfo,'listInfo')
    if(info){
      setListInfo([...listInfo,info])
    }
  },[info]);

  const arrInfo= ()=>{
    if(!info){
      return;
    }
    const newInfo=listInfo.concat(info);
    return setListInfo(newInfo);

  }
 
 
  function handleChangeInfo(words){
    setInfo(null);
    searchWords(words);
  }

  async function searchWords(words='') {
    try{

      const request = await fetch(`https://prueba-tec-api.herokuapp.com/api?word=${words}`);
      const data = await request.json();
      console.log(data, 'data');
      setInfo(data);
    }
    catch(error){
      console.log(error);
    }
  }

  
  return (
    <div>
      <h1>Home</h1>
     <InfoForm onChangeInfo={handleChangeInfo} arrInfo={arrInfo}/>
     <ArrInfo lisInfo={listInfo} />
    </div>
  );
}