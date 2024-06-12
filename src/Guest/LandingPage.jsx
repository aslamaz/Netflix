import React, { useState } from 'react'
import { Box, Button, TextField, styled, } from '@mui/material'
import backgroundImg from './GuestImages/popsignuptwoweeks.jpg'
import chldrnntflx from './GuestImages/Screenshot from 2024-03-01 17-51-26.png'
import { ArrowForward } from '@mui/icons-material'
import closeBtnSvg from './GuestImages/icons8-close-36.png'
import { Link } from 'react-router-dom'
import Footer from '../NetflixBrowse/Footer'


const CssTextField = styled(TextField)({
  width: "370.766px",
  height: "56px",

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
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },

  },

});

const SignInPageBtn = styled(Button)({
  backgroundColor: 'rgb(229,9,20)',
  width: "205.234px",
   height: "56px" ,
  textTransform:"none",
  fontFamily: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
  fontSize:"24px",
  '&:hover': {
      backgroundColor: 'rgb(193 14 23)',
  },
});

const LandingPage = () => {
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [descriptionVisible2, setDescriptionVisible2] = useState(false);
  const [descriptionVisible3, setDescriptionVisible3] = useState(false);
  const [descriptionVisible4, setDescriptionVisible4] = useState(false);
  const [descriptionVisible5, setDescriptionVisible5] = useState(false);
  const [descriptionVisible6, setDescriptionVisible6] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!descriptionVisible);

  };
  const toggleDescription2 = () => {
    setDescriptionVisible2(!descriptionVisible2);
    setDescriptionVisible(descriptionVisible);
  }
  const toggleDescription3 = () => {
    setDescriptionVisible3(!descriptionVisible3);
  };
  const toggleDescription4 = () => {
    setDescriptionVisible4(!descriptionVisible4);
  };
  const toggleDescription5 = () => {
    setDescriptionVisible5(!descriptionVisible5);
  };
  const toggleDescription6 = () => {
    setDescriptionVisible6(!descriptionVisible6);
  };
  return (
    <Box>
      <Box >
        <div class="image-container">

          <img src={backgroundImg} alt='img' className='BackgrndImg' />
          <div className='gradient-overlay'>
          </div>

          <div class="overlay-text">
            <div className='heading1'>Unlimited movies, TV shows and more</div>
            <div className='heading2'>
              Watch anywhere. Cancel anytime.
            </div>
            <div className='heading3'>
              Ready to watch? Enter your email to create or restart your membership.
            </div>
            <div className='emailInptBox'>
              <CssTextField label="Email address" id="custom-css-outlined-input" />
             <Link to={'/User/Registration'} > <SignInPageBtn variant="contained" endIcon={<ArrowForward />}>Get Started</SignInPageBtn></Link>
            </div>
          </div>

        </div>
      </Box>
      <div class="default-ltr-cache-1yz1b0z "></div>

      <div className='EnjoyTvDiv'>
        <div className='enjoyInnerDiv'>

          <div style={{ padding: "0px 6px 0px 0px", width: "580.984px", height: "162px", }}>
            <div class="default-ltr-cache-jpuyb8">Enjoy on your TV</div>
            <p class="default-ltr-cache-10i4ild ">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>

          <div class="default-ltr-cache-7cljuy ">
            <div class="default-ltr-cache-bjn8wh">
              <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" class="default-ltr-cache-1d3w5wq" />
              <div class="default-ltr-cache-m5f3qu ">
                <video autoplay playsinline muted loop>
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" /></video>
                <div class="default-ltr-cache-0"></div>
                <div aria-hidden="true" class="default-ltr-cache-0 e15c37ii13">
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="default-ltr-cache-1yz1b0z "></div>

      <div className='EnjoyTvDiv'>
        <div className='enjoyInnerDiv'>

          <div class="default-ltr-cache-7cljuy ">
            <div class="default-ltr-cache-bjn8wh">
              <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" class="default-ltr-cache-1d3w5wq" />


              <div class="default-ltr-cache-xfttou ">

                <div class="default-ltr-cache-1cn8kex">
                  <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" class="default-ltr-cache-1t1z3a4" />
                </div>

                <div class="default-ltr-cache-tcf860">
                  <div id="" class="default-ltr-cache-162uqtg " data-uia="">Stranger Things</div>
                  <div id="" class="default-ltr-cache-44ib4m " data-uia="">Downloading...</div>
                </div>
                <div aria-hidden="true" class="default-ltr-cache-1q4up1i "></div>
              </div>


            </div>
          </div>

          <div style={{ padding: "0px 0px 0px 6px", width: "580.984px", height: "224px", }}>
            <div class="default-ltr-cache-jpuyb8-dwnld">Download your shows to watch offline</div>
            <p class="default-ltr-cache-10i4ild " style={{ marginTop: "16px" }}>Save your favourites easily and always have something to watch.</p>
          </div>


        </div>
      </div>

      <div class="default-ltr-cache-1yz1b0z "></div>

      <div className='EnjoyTvDiv'>
        <div className='enjoyInnerDiv'>

          <div style={{ padding: "0px 6px 0px 0px", width: "580.984px", height: "162px", }}>
            <div class="default-ltr-cache-jpuyb8">Watch everywhere</div>
            <p class="default-ltr-cache-10i4ild ">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>

          <div class="default-ltr-cache-7cljuy ">
            <div class="default-ltr-cache-bjn8wh">
              <img alt="" src="	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" class="default-ltr-cache-1d3w5wq" />



              <div class="default-ltr-cache-1626rqb ">
                <video autoplay="" playsinline="" muted="" loop="">
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
                </video>
                <div class="default-ltr-cache-0"></div>
                <div aria-hidden="true" class="default-ltr-cache-0 e15c37ii9">
                </div>
              </div>



            </div>
          </div>

        </div>
      </div>

      <div class="default-ltr-cache-1yz1b0z "></div>

      <div className='EnjoyTvDiv'>
        <div className='enjoyInnerDiv'>

          <div class="default-ltr-cache-7cljuy ">
            <div class="default-ltr-cache-bjn8wh">
              <img alt="" src={chldrnntflx} class="default-ltr-cache-1d3w5wq" />





            </div>
          </div>

          <div style={{ padding: "0px 0px 0px 6px", width: "580.984px", height: "224px", }}>
            <div class="default-ltr-cache-jpuyb8-dwnld">Create profiles for kids</div>
            <p class="default-ltr-cache-10i4ild " style={{ marginTop: "16px" }}>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
          </div>


        </div>
      </div>


      <div class="default-ltr-cache-1yz1b0z "></div>

      <div className='dicriptionNetflixQues'>
        <div className='discriptionNetflixInnerQuesDiv'>

          <div class="euy28771">Frequently Asked Questions</div>

          <div className='Questionsdiv' onClick={toggleDescription} >
            <div className='queHeadDiv' >What is Netflix</div>

            {descriptionVisible ? (

              <img src={closeBtnSvg} alt='img' style={{ color: "white" }} />
            ) : (
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1" data-name="Plus" aria-labelledby=":rgo:" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
            )}

          </div>

          {descriptionVisible && (
            <div className='DescriptionDiv' style={{ marginBottom: "8px" }}>
              Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
              <br /><br />
              You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!

            </div>
          )}


          <div className='Questionsdiv' onClick={toggleDescription2}>
            <div className='queHeadDiv' >How much does Netflix cost?</div>

            {descriptionVisible2 ? (

              <img src={closeBtnSvg} alt='img' style={{ color: "white" }} />
            ) : (
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1" data-name="Plus" aria-labelledby=":rgo:" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
            )}

          </div>

          {descriptionVisible2 && (
            <div className='DescriptionDiv' style={{ marginBottom: "8px" }}>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts.

            </div>
          )}



          <div className='Questionsdiv' onClick={toggleDescription3}>
            <div className='queHeadDiv' >Where can I watch?</div>

            {descriptionVisible3 ? (

              <img src={closeBtnSvg} alt='img' style={{ color: "white" }} />
            ) : (
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1" data-name="Plus" aria-labelledby=":rgo:" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
            )}

          </div>

          {descriptionVisible3 && (
            <div className='DescriptionDiv' style={{ marginBottom: "8px" }}>
              <span >Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                <br /><br />
                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</span>
            </div>
          )}

          <div className='Questionsdiv' onClick={toggleDescription4}>
            <div className='queHeadDiv' >How do I cancel?</div>

            {descriptionVisible4 ? (

              <img src={closeBtnSvg} alt='img' style={{ color: "white" }} />
            ) : (
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1" data-name="Plus" aria-labelledby=":rgo:" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
            )}

          </div>

          {descriptionVisible4 && (
            <div className='DescriptionDiv' style={{ marginBottom: "8px" }}>
              <span >WNetflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</span>
            </div>
          )}


          <div className='Questionsdiv' onClick={toggleDescription5}>
            <div className='queHeadDiv' >What can I watch on Netflix?</div>

            {descriptionVisible5 ? (

              <img src={closeBtnSvg} alt='img' style={{ color: "white" }} />
            ) : (
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1" data-name="Plus" aria-labelledby=":rgo:" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
            )}

          </div>

          {descriptionVisible5 && (
            <div className='DescriptionDiv' style={{ marginBottom: "8px" }}>
              Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </div>
          )}


          <div className='Questionsdiv' onClick={toggleDescription6}>
            <div className='queHeadDiv' >Is Netflix good for kids?</div>

            {descriptionVisible6 ? (

              <img src={closeBtnSvg} alt='img' style={{ color: "white" }} />
            ) : (
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1" data-name="Plus" aria-labelledby=":rgo:" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
            )}

          </div>

          {descriptionVisible6 && (
            <div className='DescriptionDiv' style={{ marginBottom: "8px" }}>
              <span>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                <br /><br />
                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
              </span>
            </div>
          )}









        </div>
        <div style={{marginTop:"40px"}}></div>
        <div class="default-ltr-cache-1yz1b0z "></div>
        <Footer/>

      </div>


    </Box>
  )
}

export default LandingPage