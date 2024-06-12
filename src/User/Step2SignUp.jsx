import React from 'react'
import { Link } from 'react-router-dom'
import netflixIcon from './UserImages/netflix.svg'
import icons8checkmark from './UserImages/icons8-checkmark.png'
import { Button, styled } from '@mui/material';


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

const Step2SignUp = () => {
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

            <div className='centerContainerDiv'>
                <div className='planContainerDiv'>
                    <div class="stepLogoContainer"><img src={icons8checkmark} alt='img' className='LogoContainerDiv' /></div>
                    <div className='stepIndicatorDiv' >STEP <b>2</b> OF <b>3</b></div>
                    <div className='step2TitleDiv' >Choose your plan.</div>
                    <div className='contentCheckmarkDiv'>
                        
                            <div class="checkmark-group--row">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" color='#E50914' >
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                                <span class="checkmark-group--text" data-uia="checkmark-group+row-0+content">No commitments, cancel anytime.</span>
                            </div>

                            <div class="checkmark-group--row" style={{ margin: "20px 0px 0px" }}>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" color='#E50914' >
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                                <span class="checkmark-group--text" data-uia="checkmark-group+row-0+content">Everything on Netflix for one low price.</span>
                            </div>

                            <div class="checkmark-group--row" style={{ margin: "20px 0px 0px", width:"285.938px"}}>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" color='#E50914' >
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                                <span class="checkmark-group--text" data-uia="checkmark-group+row-0+content">No ads and no extra fees. Ever.</span>
                            </div>
                        
                    </div>
                </div>

                <div style={{display:"flex",alignItems:"end",justifyContent:"center",}}>
                <Link to={'/User/PlanForm'} ><NextPageBtn variant="contained" >Next</NextPageBtn></Link>
                </div>

            </div>
        </div>
    )
}

export default Step2SignUp