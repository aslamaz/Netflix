import React from 'react'
import netflixIcon from './UserImages/netflix.svg'
import { Link } from 'react-router-dom'
import { Button, Checkbox, FormControlLabel, TextField, styled } from '@mui/material';
import { useState } from 'react';

const CssTextField = styled(TextField)({
    marginTop: "10px",
    width: "440px",
    height: "50px",
    borderRadius: "none",
    background: 'url("https://img.icons8.com/fluency-systems-regular/48/000000/bank-card-back-side.png") no-repeat ',
    backgroundSize: "20px",
    backgroundPositionX: "410px",
    backgroundPositionY: "17px",

    '& label.Mui-focused': {
        color: '#8c8c8c',
        fontFamily: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
    },
    '& label': {
        color: '#8c8c8c',
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

const CssTextField4 = styled(TextField)({
    marginTop: "15px",
    width: "440px",
    height: "50px",
    borderRadius: "none",


    '& label.Mui-focused': {
        color: '#8c8c8c',
        fontFamily: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
    },
    '& label': {
        color: '#8c8c8c',
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

const CssTextField2 = styled(TextField)({
    marginTop: "15px",
    width: "215.594px",
    height: "50px",

    '& label.Mui-focused': {
        color: '#8c8c8c',
        fontFamily: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
    },
    '& label': {
        color: '#8c8c8c',
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

const CssTextField3 = styled(TextField)({
    marginTop: "15px",
    width: "215.594px",
    height: "50px",
    borderRadius: "none",
    background: 'url("https://img.icons8.com/ios/50/000000/help--v1.png") no-repeat ',
    backgroundSize: "20px",
    backgroundPositionX: "185px",
    backgroundPositionY: "17px",

    '& label.Mui-focused': {
        color: '#8c8c8c',
        fontFamily: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
    },
    '& label': {
        color: '#8c8c8c',
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

const StartMemberShipBtn = styled(Button)({
   
    backgroundColor: '#E50914',
    color: "white",
    fontSize: "24px",
    width: "440px",
    height: "66px",
    fontFamily: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
    textTransform: "none",
    '&:hover': {
        backgroundColor: 'rgb(193 14 23)',
    },
});
const CreditCardPage = () => {

    const [buttonClicked, setButtonClicked] = useState(false);

    // Function to handle button click
    const handleClick = () => {
        setButtonClicked(true);
    };

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

            <div className='centerContainerCreditCard'>
                <div className='planContainerCreditCard'>
                    <div>
                        <div className='stepHeaderContainerCreditCard'>
                            <div className='stepIndicatorDivPaymentCreditCard' >STEP <b>3</b> OF <b>3</b></div>
                            <div className='step2TitleDivCreditCard' >Set up your credit or debit card</div>
                        </div>
                    </div>
                    <div className='fieldContainer'>
                        <div className="logosContainerCreditCard">
                            <span class="logos logos-inline" data-uia="cardLogos-comp" aria-label="We accept Visa, Mastercard and Diners Club.">
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png" alt="Visa" className="logoIconVISA " srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA@2x.png 2x" data-uia="logoIcon-VISA" />
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png" alt="Mastercard" className="logoIconMASTERCARD " srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD@2x.png 2x" data-uia="logoIcon-MASTERCARD" />
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DINERS.png" alt="Diners Club" className="logoIconDINERS " srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DINERS@2x.png 2x" data-uia="logoIcon-DINERS" />
                            </span>
                        </div>

                        <div className='CreditCardsimpleForm'>
                            <CssTextField label="Card number" id="custom-css-outlined-input" />
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <CssTextField2 label="Expiration date" placeholder='MM/YY' id="custom-css-outlined-input" />
                                <CssTextField3 label="CVV" id="custom-css-outlined-input" />
                            </div>
                            <CssTextField4 label="Name on card" id="custom-css-outlined-input" />
                        </div>

                        <div style={{ display: "flex" }}>
                            <div className='orderInfo_Content'>
                                <div className='orderInfo_Content_title'>₹199/month</div>
                                <div className='orderInfo_Content_description'>Basic</div>
                            </div>
                            <Link to={'/User/PlanForm'} style={{ textDecoration: 'none',margin:"0px" }}> <div className='orderInfo_Content_ChngBtn'>Change</div> </Link>
                        </div>

                        <div className='tou-in-container'>
                            <p className="tou-in-mandate">Any payment above ₹ 2000 shall need additional authentication.</p>
                            <span className="termsOfUse-Disclosure">By checking the checkbox below, you agree to our
                                <a className='termsofuseLnk' href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>,
                                <a className='termsofuseLnk' href="https://help.netflix.com/legal/privacy">Privacy Statement</a>,
                                and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently ₹199/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.</span>

                            <div>


                                <FormControlLabel sx={{ color: "#8c8c8c", fontFamily: "Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif", fontSize: "16px" }}
                                    control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 38, } }} />} label="I agree." />



                            </div>
                        </div>

                    </div>
                    <Link to={'/NetflixBrowse/netflixHome'} style={{ textDecoration: 'none',margin:"0px"}}>
                        <StartMemberShipBtn>Start Membership</StartMemberShipBtn>
                    </Link>
                    <p>
                        <span className='tou-in-mandate'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                        &nbsp;
                        {!buttonClicked && (
                            <button class="recaptcha-terms-of-use--link-button"
                                onClick={handleClick}
                            >Learn more.</button>
                        )}
                    </p>
                    {buttonClicked && (
                        <div className="recaptcha-terms-of-use--disclosure -visible" data-uia="recaptcha-disclosure">
                            <span className="recaptcha-disclosure-text">The information collected by Google reCAPTCHA is subject to the Google
                                <a href="https://policies.google.com/privacy" id="recaptcha-privacy-link" className='termsofuseLnk' >Privacy Policy</a>
                                and
                                <a href="https://policies.google.com/terms" id="recaptcha-tos-link" className='termsofuseLnk' >Terms of Service</a>,
                                and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CreditCardPage