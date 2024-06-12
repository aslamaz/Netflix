import React from 'react'
// import './Guest.css'
import netflixIcon from './GuestImages/netflix.svg'
import { Box, Button} from '@mui/material'
import { Link } from 'react-router-dom'




const Head = () => {

  


  return (
    <div className='headfulldiv'>
      <Box className='iconDiv'>

        <img src={netflixIcon} alt='img' style={{ width: "148px", height: "40px", zIndex: "999", position: "relative" }} className='iconDiv' />
      </Box>

      <Box sx={{ marginLeft: "1000px" }}>
        
        <select name='options' class="demo-simple-select">
          <option value='option-1' style={{color:"black"}}>English</option>
          <option value='option-2' style={{color:"black"}}>Malayalam</option>
          <option value='option-3' style={{color:"black"}}>Hindi</option>
        </select>
      </Box>

      <Box className="btnSignIn">

        <Link to={'/User/SignInPage'}>
      <Button style={{color:"white",backgroundColor:"rgb(229,9,20)",width:"76.91px",height:"33px",textTransform:"none",fontFamily:"Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif"}} > SignIn</Button>
      </Link>

      </Box>



    </div>
  )
}

export default Head