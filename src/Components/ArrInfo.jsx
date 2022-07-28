import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


import TextField from '@mui/material/TextField';


export default function ArrInfo({ listInfo }) {

     return (
          <div>
               <Container fixed>
                    <Box sx={{ bgcolor: '#e2d6d6', height: '90vh', margin: '20px' }} >
                         <h4 style={{ display: 'flex', flexDirection: 'row', padding: '20px' }}>Results:</h4>
                         {listInfo.length !== undefined ? listInfo.map((item, index) => {
                              return (
                                   <div key={index} >
                                        <Card >
                                             <CardContent>
                                                  <Typography variant="body1" component="h5">
                                                       {item.text}, palindrome:{item.palindrome?'true':'false'}
                                                  </Typography>
                                             </CardContent>
                                        </Card>

                                   </div>
                              )
                         }) : <p>No hay datos</p>}
                    </Box>
               </Container>
          </div>
     )
}