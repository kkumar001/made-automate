import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const TotalOrders = () => {
    return (
        <OrdersSummary>
            <Head>
                <Heading>
                    <h3 style={{ color: '#4d5357' }}>Total Orders</h3>
                    <p style={{ color: '#4d5357', marginTop: '-15px' }}>A summary of your Orders.</p>
                </Heading>
                <Button variant="contained" href='/AllOrders' sx={{ background: '#149bf5', fontWeight: 700 }}>View All</Button>
            </Head>
            <O1>
                <h5 style={{ color: '#4d5357', marginLeft: '5px' }}>IR Sensor</h5>
                <p style={{ color: '#4d5357', marginTop: '-15px', marginLeft: '5px' }}>Description</p>
                <p style={{ color: '#4d5357', marginTop: '-15px', marginLeft: '5px' }}>Quantity : <b >112</b></p>
            </O1>
            <O2>
                <h5 style={{ color: '#4d5357', marginLeft: '5px' }}>Metal Sensor</h5>
                <p style={{ color: '#4d5357', marginTop: '-15px', marginLeft: '5px' }}>Description</p>
                <p style={{ color: '#4d5357', marginTop: '-15px', marginLeft: '5px' }}>Quantity : <b >112</b></p>
            </O2>
        </OrdersSummary>
    )
}

export default TotalOrders;

const OrdersSummary = styled.div`
`;

const O1 = styled.div`
    margin-top: -15px;
    border-left: 5px solid #149bf5;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

const O2 = styled.div`
border-left: 5px solid #149bf5;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

const Head = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center
`;

const Heading = styled.div`
`;