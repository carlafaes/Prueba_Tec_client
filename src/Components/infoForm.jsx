import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';



import style from '../style/Form.module.css';


export default function InfoForm({ onChangeInfo }) {
    const [words, setWords] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;

        if (value.length > 0) {
            setWords(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onChangeInfo(words)
    }

    return (
        <>
             <Box component="form" onSubmit={handleSubmit} sx={{ flexGrow: 1 }}>
                <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"

                style={{backgroundColor:'red',height:'40px'}} >
                   
                    <Grid item xs={8} md={10} xl={10}>

                        <Input id="outlined-basic" variant="outlined" type="text" onChange={handleChange} style={{backgroundColor:'azure'}}/>
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Grid>
                   
                </Grid>

                        
            </Box>
        </>
    )
}