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

  const arrInfo= ()=>{
    return setListInfo([...listInfo,info])

  }
 
 
  function handleChangeInfo(words){
    setInfo(null);
    searchWords(words);
    arrInfo()
  }

  async function searchWords(words='oso') {
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
     <InfoForm onChangeInfo={handleChangeInfo}/>
     <ArrInfo lisInfo={listInfo}/>
    </div>
  );
}