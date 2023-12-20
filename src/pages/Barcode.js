import React, { useState, useRef } from 'react';
import { Button, TextField, Container, Grid } from '@mui/material';
import { useBarcode } from 'react-barcode';
import JsBarcode from 'jsbarcode';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import m2a from '../Images/m2a.jpg'

const Barcode = () => {
  const [barcodeValue, setBarcodeValue] = useState('');
  const svgRef = useRef();

  const generateBarcode = () => {
    const newBarcodeValue = Math.floor(Math.random() * 1000000000000).toString();
    setBarcodeValue(newBarcodeValue);

    // Use JsBarcode to update the barcode immediately
    JsBarcode(svgRef.current, newBarcodeValue, {
      format: 'CODE128',
      width: 2,
      height: 100,
    });
  };

  return (
    // <Container maxWidth="md">
    //   <Grid container spacing={2} justifyContent="center">
    //     <Grid item xs={12}>
    //       <Button variant="contained" color="primary" onClick={generateBarcode}>
    //         Generate Barcode
    //       </Button>
    //     </Grid>
    //     <Grid item xs={12}>
    //       <TextField
    //         label="Barcode Value"
    //         fullWidth
    //         value={barcodeValue}
    //         onChange={(e) => setBarcodeValue(e.target.value)}
    //       />
    //     </Grid>
    //     <Grid item xs={12}>
    //       <svg ref={svgRef} />
    //     </Grid>
    //   </Grid>
    // </Container>
    <BCode>
      <Heading>
        <h3>BARCODE</h3>
      </Heading>
      <PAdded>
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#00a365", marginRight: '5px', fontSize: '40px' }} />
        <h3 style={{ color: "#00a365", marginRight: '5px', fontSize: '30px' }}>Succesfully Added Product</h3>
      </PAdded>
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
      <BCodeSection>
        <Code>
         <svg ref={svgRef} onChange={(e) => setBarcodeValue(e.target.value)}/>
        </Code>
        <Button variant="contained" color="primary" onClick={generateBarcode} sx={{ fontWeight: 700 }}>
          Generate Barcode
        </Button>
        <Button variant="contained" color="primary" sx={{ fontWeight: 700 }}>
          Print Barcode
        </Button>
        <Button variant="contained" color="primary" sx={{ fontWeight: 700 }}>
          Save to Device
        </Button>
      </BCodeSection>
      <Btn>
        <Button variant="contained" color="error" sx={{ fontWeight: 700 }}>
          Edit Details
        </Button>
        <Button variant="contained" color="primary" sx={{ fontWeight: 700 }}>
          Save Changes
        </Button>
      </Btn>
    </BCode>
  );
};

export default Barcode;

const BCode = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

const PAdded = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   background: white;
   width: 90%;
   border-radius: 15px;
   box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const PDetails = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
background: white;
border-radius: 15px;
   box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const BCodeSection = styled.div`
     width: 90%;
     display: flex;
     justify-content: space-around;
     align-items: center;
     background: white;
     border-radius: 15px;
     box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const Btn = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between
`;

const ADetails = styled.div`
    display:flex;
    flex-direction: column;
    //justify-content: center;
    //align-items: center;
    width: 70%;
    margin-right: 15px
`;

const L1 = styled.div`
    display: flex;
    justify-content: space-around;
`;

const L2 = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: flex-start
`;

const Code = styled.div`
     width: 250px;
     heigth: 200px;
     margin: 15px;
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 15px;
     box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

