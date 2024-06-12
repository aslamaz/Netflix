import React from 'react'
import backgroundImg from './UserImages/popsignuptwoweeks.jpg'
import netflixIcon from './UserImages/netflix.svg'
import { Box, Button, Checkbox, TextField, styled } from '@mui/material'
import './UserStyle.css'
import { Link } from 'react-router-dom'


const SignInPageBtn = styled(Button)({
    backgroundColor: 'rgb(229,9,20)',
    width: "314px",
    margin: "0px 0px 16px",
    '&:hover': {
        backgroundColor: 'rgb(193 14 23)',
    },
});

const CssTextField = styled(TextField)({
    width: "314px",
    height: "56px",
    margin: "0px 0px 16px",
    '& .MuiOutlinedInput-input': {
        backgroundColor: 'rgb(70, 90, 126, 0.4))',

    },

    '& label.Mui-focused': {
        color: 'white',

    },
    '& label': {
        color: 'white',
        fontFamily: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
    },

    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#8c8c8c',
        },
        '&:hover fieldset': {
            borderColor: '#8c8c8c',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#8c8c8c',
        },

    },

});



const SignInPage = () => {
    return (
        <div>
            <Box className='headG'>

                <img src={netflixIcon} alt='img' style={{ width: "148px", height: "40px", zIndex: "999", marginLeft: "10px" }} className='iconDiv' />
            </Box>

            <div class="image-container">

                <img src={backgroundImg} alt='img' className='BackgrndImgSignIN' />
                <div className='gradient-overlay'>

                    <div className='mainSignInDiv'>

                        <div className='signInDiv'>
                            <h1 className=" login-page-title">Sign In</h1>

                            <div style={{ width: "314px", height: "334px" }}>

                                <CssTextField label="Email or phone number" id="custom-css-outlined-input" />

                                <CssTextField label="Password" id="custom-css-outlined-input" />


                                <SignInPageBtn variant="contained" >SignIn</SignInPageBtn>

                                <div className='frgtPswrdDiv'>Forgot Password?</div>

                            </div>
                            <div style={{ width: "314px", height: "193px", marginTop: "20px" }}>

                                <div style={{display:"flex",alignItems:"center",marginLeft:"-10px"}}>
                                    <Checkbox
                                        sx={{
                                            color: 'white',
                                            '&.Mui-checked': {
                                                color: 'white',
                                            },
                                        }}
                                    />
                                    <div style={{color:"white",fontSize:"16px",fontFamily:"Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif"}}>Remember me</div>
                                </div>

                                <div style={{display:"flex",alignItems:"center",margin:"16px 0px 0px",gap:"8px",}}>
                                    <div style={{fontFamily:"Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",color:"#8c8c8c"}}>New to Netflix?</div>
                                  <Link to={'/Guest/LandingPage'} style={{textDecoration: 'none'}}>  <div style={{fontFamily:"Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",color:"white",fontWeight:"500",
                                textDecoration: "none",
                                transition: "text-decoration 0.3s ease"
                                }}
                                onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
                                onMouseLeave={(e) => e.target.style.textDecoration = "none"}
                                >Sign up now.</div></Link>

                                </div>
                                <div style={{margin:"13px 0px",fontFamily:"Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",color:'#8c8c8c',fontSize:"14px", fontWeight:"lighter",}}>
                                This page is protected by Google reCAPTCHA to <br/>ensure you're not a bot.<span style={{color:"#0071EB"}}>Learn More</span>
                                </div>

                            </div>



                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default SignInPage