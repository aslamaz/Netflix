import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import netflixIcon from './UserImages/netflix.svg'
import lockImg from './UserImages/lock.png'
import { CircularProgress, styled } from '@mui/material'

const CircularProgressBar = styled(CircularProgress)({
    color: '#E50914',

})
const PaymentPicker = () => {

    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        // Show loading state
        setLoading(true);

        // Simulate an asynchronous action, e.g., making an API call or navigating to the next page after a delay
        setTimeout(() => {
            window.location.href = '/User/CreditCardPage';
        }, 1000);
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

            <div className='centerContainerPaymentPicker'>
                <div className='planContainerDivPaymentPicker'>
                    <div className='paymentPickerHeader'>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "25px" }}>
                            <img src={lockImg} alt='img' className='paymentStepLogo' />
                        </div>
                        <div className='stepHeaderContainer'>
                            <div className='stepIndicatorDivPayment' >STEP <b>3</b> OF <b>3</b></div>
                            <div className='step2TitleDiv' >Choose how to pay</div>
                        </div>

                        <div className='NarrowContainerPayment'>
                            <div className="paymentcontextRow" >Your payment is encrypted and you can change your payment method at anytime.</div>
                            <div class="contextRowEmphasized">Secure for peace of mind.</div>
                            <div class="contextRowEmphasized">Cancel easily online.</div>
                        </div>

                    </div>

                    <div class="secure-server-badge">
                        <svg width='16' height='16' id="secure-server-icon" viewBox="0 0 12 16" class="secure-server-badge--icon default-ltr-cache-189sllk">
                            <g fill="none">
                                <g fill="#FFB53F">
                                    <path d="M8.4 5L8.4 6.3 10 6.3 10 5C10 2.8 8.2 1 6 1 3.8 1 2 2.8 2 5L2 6.3 3.6 6.3 3.6 5C3.6 3.7 4.7 2.6 6 2.6 7.3 2.6 8.4 3.7 8.4 5ZM11 7L11 15 1 15 1 7 11 7ZM6.5 11.3C7 11.1 7.3 10.6 7.3 10.1 7.3 9.3 6.7 8.7 6 8.7 5.3 8.7 4.7 9.3 4.7 10.1 4.7 10.6 5 11.1 5.5 11.3L5.2 13.4 6.9 13.4 6.5 11.3Z"></path>
                                </g>
                            </g>
                        </svg>
                        <div class="secure-server-badge--text">End-to-end encrypted</div>
                    </div>

                    <button className="paymentTabpaymentPicker" id="creditOrDebitCardDisplayStringId" type="button" onClick={handleClick}
                        disabled={loading}>
                        <div className="mopNameAndLogos">
                            <div className="paymentTab--text">
                                <span className="selectionLabel">Credit or Debit Card</span>
                            </div>
                            <div class="logosContainer">
                                <span class="logos logos-inline" data-uia="cardLogos-comp" aria-label="We accept Visa, Mastercard and Diners Club.">
                                    <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png" alt="Visa" className="logoIconVISA " srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA@2x.png 2x" data-uia="logoIcon-VISA" />
                                    <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png" alt="Mastercard" className="logoIconMASTERCARD " srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD@2x.png 2x" data-uia="logoIcon-MASTERCARD" />
                                    <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DINERS.png" alt="Diners Club" className="logoIconDINERS " srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DINERS@2x.png 2x" data-uia="logoIcon-DINERS" />
                                </span>
                            </div>
                        </div>
                        <span class="arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="ChevronRight" aria-labelledby=":r4:" aria-hidden="true">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor">
                                </path>
                            </svg>
                        </span>

                        {loading && (
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
                        }}>
                            <CircularProgressBar thickness={2} />
                        </div>
                    )}
                    </button>

                    


                    <button className="paymentTabpaymentPicker" id="creditOrDebitCardDisplayStringId" type="button">
                        <div className="mopNameAndLogos">
                            <div className="paymentTab--text">
                                <span className="selectionLabel">UPI AutoPay</span>
                            </div>
                            <div class="logosContainer">
                                <span class="logos logos-inline" data-uia="cardLogos-comp" aria-label="We accept BHIM, PhonePe, Amazon Pay and Google Pay.">
                                    <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/BHIM.png" alt="BHIM" className="logoIconPaymentPicker " srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/BHIM@2x.png 2x" data-uia="logoIcon-BHIM" />
                                    <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PHONEPE.png" alt="PhonePe" className="logoIconPaymentPicker " srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PHONEPE@2x.png 2x" data-uia="logoIcon-PHONEPE" />
                                    <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMAZONPAY.png" alt="Amazon Pay" className="logoIconPaymentPicker " srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMAZONPAY@2x.png 2x" data-uia="logoIcon-AMAZONPAY" />
                                    <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/GPAY.png" alt="Google Pay" className="logoIconPaymentPicker" srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/GPAY@2x.png 2x" data-uia="logoIcon-GPAY" />

                                </span>
                            </div>
                        </div>
                        <span class="arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="ChevronRight" aria-labelledby=":r4:" aria-hidden="true">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor">
                                </path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PaymentPicker