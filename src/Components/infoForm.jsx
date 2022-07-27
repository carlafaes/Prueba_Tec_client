import React, { useState } from "react";

export default function InfoForm({ onChangeInfo, ArrInfo }) {
const [words, setWords] = useState("");
console.log(words,'words')



const handleChange=(e)=>{
    const value= e.target.value;

    if(value.length > 0){
        setWords(value);
    }
}

const handleSubmit = (e)=>{
    e.preventDefault();
    onChangeInfo(words)
}
    return [
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} />
            </form>
        </div>
    ]
}