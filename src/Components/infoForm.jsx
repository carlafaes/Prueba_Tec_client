import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function InfoForm({ onChangeInfo}) {
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
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicWords">
                <Form.Control type="text" onChange={handleChange} />
                <Button variant="primary" type="submit">
                    add
                </Button>
                </Form.Group>
            </Form>
        </div>
    ]
}