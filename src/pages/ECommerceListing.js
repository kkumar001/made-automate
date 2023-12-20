import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import m2a from '../Images/m2a.jpg'

const ECommerceListing = () => {
  return (
    <ECommerce>
      <Heading>
        <h3>E-Commerce Listing</h3>
      </Heading>
      <PDetails>
        <img src={m2a} style={{ width: '300px', borderRadius: '15px', height: '200px' }} />
        <ADetails>
          <p>Product Name</p>
          <p>Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries.</p>
          <L1>
            <p>Manufacturer:<b>Name</b></p>
            <p>Product ID:<b>ID</b></p>
          </L1>
          <L2>
            <p>Price:<b>Rs. 2000</b></p>
            <p>Quantity:<b>200</b></p>
            <p>Category:<b>New Stock</b></p>
          </L2>
        </ADetails>
      </PDetails>
      <List>
        <h3 style={{ color: '#0768a8' }}>E-Commerce Listing</h3>
        <Site>
          <p style={{ fontWeight: 700 }}>Amazon</p>
          <Button variant="contained" color="primary" sx={{ fontWeight: 700 }}>
            Upload
          </Button>
        </Site>
        <Site>
          <p style={{ fontWeight: 700 }}> Flipkart</p>
          <Button variant="contained" color="primary" sx={{ fontWeight: 700 }}>
            Upload
          </Button>
        </Site>
        <Site>
          <p style={{ fontWeight: 700 }}>Indiamart</p>
          <Button variant="contained" color="primary" sx={{ fontWeight: 700 }}>
            Upload
          </Button>
        </Site>
        <Site>
          <p style={{ fontWeight: 700 }}>Website</p>
          <Button variant="contained" color="primary" sx={{ fontWeight: 700 }}>
            Upload
          </Button>
        </Site>
      </List>
      <Btn>
        <Button variant="contained" color="error" sx={{ fontWeight: 700 }}>
          Back
        </Button>
        <Button variant="contained" color="success" href='/' sx={{ fontWeight: 700 }}>
          Continue to Home Page
        </Button>
      </Btn>
    </ECommerce>
  )
}

export default ECommerceListing

const ECommerce = styled.div`
    width: 100%;
    min-height: 90vh;
    //height: 90vh;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    background: #d2e9f7;
    padding: 15px;
`;

const Heading = styled.div`
   color: #0768a8;
   background: white;
   width: 30%;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 15px;
   box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;`;


const PDetails = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
height: 220px;
background: white;
margin-top: 15px;
border-radius: 15px;
   box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const ADetails = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    //align-items: center;
    width: 70%;
    margin-right: 15px;
`;

const L1 = styled.div`
    display: flex;
    justify-content: space-around;
`;

const L2 = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: flex-start;
     margin-top: -10px
`;

const List = styled.div`
     display: flex;
     width: 90%;
     margin-top: 20px;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     border-radius: 15px;
     background: white;
     box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const Site = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
padding: 15px
`;

const Btn = styled.div`
    margin-top: 15px;
    width: 90%;
    display: flex;
    justify-content: space-between;
`;