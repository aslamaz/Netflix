import React from 'react'
import netflixIcon from './UserImages/netflix.svg'
import { Link } from 'react-router-dom'
import { Button, TextField, styled } from '@mui/material';


const NextPageBtn = styled(Button)({
  backgroundColor: '#E50914',
  fontSize: "24px",
  width: "440px",
  height: "65px",
  fontFamily: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
  textTransform: "none",
  '&:hover': {
    backgroundColor: 'rgb(193 14 23)',
  },
});

const CssTextField = styled(TextField)({
  width: "440px",
  height: "56px",

  '& .MuiOutlinedInput-input': {
    backgroundColor: 'rgb(70, 90, 126, 0.4))',

  },

  '& label.Mui-focused': {
    color: 'black',

  },
  '& label': {
    color: 'black',
    fontFamily: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },

  },

});

const RegSignUp = () => {
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


      
        <div className='Step1DivMainRegsignUp'>
          <div className='regContainerDivRegsignUp'>


            <div className='stepIndicatorDivRegsignUp' >STEP <b>1</b> OF <b>3</b></div>
            <div className='stepTitleDivRegsignUp'>Create a password to start your membership</div>
            <div class="contextRowRegSignUp" >Just a few more steps and you're done!</div>
            <span class="contextRowRegSignUp" >We hate paperwork, too.</span>

            <div style={{ margin: "16px 0px 20px" }} >
              <CssTextField label="Email address" id="custom-css-outlined-input" sx={{ marginBottom: "10px" }} />
              <CssTextField label="Add a password" id="custom-css-outlined-input" />
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
              <Link to={'/User/Step2SignUp'} style={{margin:"0px"}} ><NextPageBtn variant="contained" >Next</NextPageBtn></Link>
            </div>
          </div>

        </div>
      </div>
   
  )
}

export default RegSignUp