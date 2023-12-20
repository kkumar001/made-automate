import React from 'react';
import styled from 'styled-components';
import TotalOrders from '../components/TotalOrders';
import TotalLeads from '../components/TotalLeads';

const Home = () => {
    return (
        <HomePage>
            <Summary>
                <TO>
                    <h1 style={{ color: '#0297fa' }}>112</h1>
                    <h3 style={{ color: '#4d5357' }}>Total Orders</h3>
                </TO>
                <NS>
                    <h1 style={{ color: '#027ac9' }}>152</h1>
                    <h3 style={{ color: '#4d5357' }}>New Stocks</h3>
                </NS>
                <DS>
                    <h1 style={{ color: '#025e9c' }}>100</h1>
                    <h3 style={{ color: '#4d5357' }}>Dead Stocks</h3>
                </DS>
                <TL>
                    <h1 style={{ color: '#027ac9' }}>25</h1>
                    <h3 style={{ color: '#4d5357' }}>Total Orders</h3>
                </TL>
                <TR>
                    <h1 style={{ color: '#0297fa' }}>1,11,200</h1>
                    <h3 style={{ color: '#4d5357' }}>Total Revenue</h3>
                </TR>
            </Summary>
            <TOrders>
                <TotalOrders />
            </TOrders>
            <TLeads>
                <TotalLeads />
            </TLeads>
        </HomePage>
    )
}

export default Home;

const HomePage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #d2e9f7
`;

const Summary = styled.div`
    width: 100%;
    height: 28%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 15px;
`;

const TOrders = styled.div`
    //height: 37%;
    width: 95%;
    background: white;
    border-radius: 7px; 
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px
`;

const TLeads = styled.div`
//height: 36%;
width: 95%;
background: white;
border-radius: 7px; 
padding-left: 15px;
padding-right: 15px;
padding-bottom: 15px;
margin-top: 15px;
`;

const TO = styled.div`
    background: white;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    width: 15%
`;

const NS = styled.div`
    background: white;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    width: 15%
`;

const DS = styled.div`
    background: white;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    width: 15%
`;

const TL = styled.div`
    background: white;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    width: 15%
`;

const TR = styled.div`
    background: white;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    width: 15%
`;
