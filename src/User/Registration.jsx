import React from 'react'
import netflixIcon from './UserImages/netflix.svg'
import stepImg from './UserImages/Screenshot .png'
import {  Button, styled } from '@mui/material'
import { Link } from 'react-router-dom'


const NextPageBtn = styled(Button)({
    backgroundColor: '#E50914',
    fontSize: "24px",
    width: "340px",
    height: "65px",
    fontFamily: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
    textTransform: "none",
    '&:hover': {
        backgroundColor: 'rgb(193 14 23)',
    },
});
const Registration = () => {
    return (
        <div>
            <div style={{ height: "91px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e6e6e6" }}>

                <img src={netflixIcon} alt='img' style={{ width: "167px", height: "45px", margin: "0px 0px 0px 57.1406px" }} />
                <Link to={'/Guest/LandingPage'} style={{ textDecoration: 'none' }}> <div style={{
                    margin: "0px 57.1406px", fontFamily: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif", fontSize: "19px", fontWeight: "600",
                    textDecoration: "none",
                    transition: "text-decoration 0.3s ease",
                    color: "black"
                }}
                    onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
                    onMouseLeave={(e) => e.target.style.textDecoration = "none"}
                >Sign In</div>
                </Link>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                <div className='Step1DivMain'>
                    <div className='regContainerDiv'>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={stepImg} alt='img' style={{ margin: "100px 0px 20px" }} />
                        </div>
                        
                        <div className='stepIndicatorDiv' >STEP <b>1</b> OF <b>3</b></div>
                        <div className='stepTitleDiv'>Finish setting up your account</div>
                        <div className='stepContentDiv'>Netflix is personalised for you. Create a password to watch on any device at any time.</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Link to={'/User/RegSignUp'} ><NextPageBtn variant="contained" >Next</NextPageBtn></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Registration