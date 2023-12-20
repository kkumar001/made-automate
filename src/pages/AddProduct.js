import React, { useState, useRef } from 'react';
import { Button, TextField, Typography, Container, Grid } from '@mui/material';
import styled from 'styled-components';
import { FaCamera } from "react-icons/fa";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
//import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import { useRef } from 'react';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productId, setProductId] = useState('');
  const [manufacturerName, setManufacturerName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [category, setCategory] = useState('New Stock');
  //const [productImage, setProductImage] = useState(null);
  const imageFile = useRef();
  const type = ['png', 'jpg', 'webp', 'jpeg'];
  const [image, setImage] = useState(null);
  const [popUp, setPopUp] = useState("");

  const handleChange = (e) => {
    console.log(e.target.files[0])
    if (
      e.target.files[0] &&
      type.includes(e.target.files[0].type.split('/')[1].toLowerCase())
    ) {
      if (e.target.files[0].size / 1024 / 1024 < 5) {
        setImage(e.target.files[0]);
        console.log(image);
        const src1 = URL.createObjectURL(e.target.files[0]);
        //formik.setFieldValue('Product_Image', src1);
      } else {
        setPopUp('Image Should Less than 5MB');
      }
    } else {
      setPopUp('Please upload only png ,jpg or jpeg files');
    }
  };

  const handleSaveChanges = () => {
    // Handle save changes logic
    console.log('Product details:', {
      productName,
      productId,
      manufacturerName,
      productDescription,
      productQuantity,
      //productImage,
    });
    // Add your logic to save changes to the backend
  };

  const handleCancel = () => {
    // Handle cancel logic
    console.log('Form canceled');
    // Add your logic to handle form cancellation
  };

  return (
    <ProductDetails>
      <Container maxWidth='lg' sx={{
        background: 'white', paddingY: '25px', marginTop: '1.5%', borderRadius: '20px',
        boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
      }}>
        <Typography variant="h4" gutterBottom sx={{display: 'flex', justifyContent:'center', color:'#0768a8', fontFamily:'inherit', fontWeight: 700}}>
          ADD PRODUCT
        </Typography>
        <form>
          <DesNImg>
            <TextField
              label="Product Description"
              multiline
              rows={7}
              fullWidth
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              type='text'
            />
            <SocialMediaImage>
              <input
                ref={imageFile}
                type='file'
                id='file'
                name='file'
                accept="image/*"
                //required
                onChange={handleChange}
              //disabled={userPermission.disableUpdate}
              />
              <label htmlFor='file'>
                <img
                  //src={formik.values.Product_Image}
                  alt='test'
                  onError={(e) => {
                    e.target.src = '/Assets/loading.png';
                  }}
                />
                <FaCamera />
              </label>
            </SocialMediaImage>
          </DesNImg>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Product Name"
                fullWidth
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                type='text'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Product ID"
                fullWidth
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                //sx={{color: '#149bf5'}}
                type='text'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Manufacturer Name"
                fullWidth
                value={manufacturerName}
                onChange={(e) => setManufacturerName(e.target.value)}
                type='text'
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                label="Product Description"
                multiline
                rows={4}
                fullWidth
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                type='text'
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                label="Product Quantity"
                fullWidth
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}
                type='number'
              />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems:'center', gap: 10 }}> 
              <InputLabel id="category">Select Category</InputLabel>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value={'Old Stock'}>Old Stock</MenuItem>
                <MenuItem value={'New Stock'}>New Stock</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" color="error" onClick={handleCancel} href='/' sx={{fontWeight: 700}}>
                Cancel
              </Button>
              <Button variant="contained" color="primary" onClick={handleSaveChanges} href='/Barcode' sx={{fontWeight: 700}}>
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </ProductDetails>
  );
};

export default AddProduct;

const ProductDetails = styled.div`
    background: #d2e9f7 ;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const SocialMediaImage = styled.div`
	width: 100%;
	height: 220px;
	display: flex;
  margin-top: auto;
  justify-content: center;
  text-align: center;
	//place-items: center;
	position: relative;
  overflow: auto;
	//margin: 10px 20px 10px 0;
	img {
		width: 180px;
		height: 180px;
		border-radius: 10px;
		object-fit: cover;
	}
	input {
		display: none;
	}
	label {
		//position: absolute;
		top: 50px;
		left: 0;
		//transform: translateX(30px);
		width: 180px;
		height: 180px;
		color: #149bf5;
		display: grid;
		place-items: center;
		font-size: 2rem;
		background-color: #00000030;
		&:hover {
			background-color: #00000060;
			cursor: pointer;
		}
    border-radius: 15px
	}
`;

const DesNImg = styled.div`
   display:flex;
   justify-content: space-between;
`;

