import React, { useState, useEffect } from "react";

export default function Home() {
  const [word, setWord] = useState("");
  console.log(word, 'word');

  useEffect(() => {
    searchWords();

  }, []);

  async function searchWords(word = 'heeh') {
    const request = await fetch(`https://prueba-tec-api.herokuapp.com/api?word=${word}`);
    const data = await request.json();
    console.log(data, 'data');
    setWord(data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setWord(e.target.value);

  }
  return (
    <div>
      <h1>Home</h1>
      <input type="text" value={word} onChange={handleSubmit} />
    </div>
  );
}