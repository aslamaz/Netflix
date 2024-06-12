import React, { useState } from 'react'
import netflixIcon from './UserImages/netflix.svg'
import { Link } from 'react-router-dom'
import { Box, Button, CircularProgress, styled } from '@mui/material';

const NextPageBtn = styled(Button)({
    backgroundColor: '#E50914',
    fontSize: "24px",
    width: "440px",
    height: "56px",
    fontFamily: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
    textTransform: "none",
    '&:hover': {
        backgroundColor: 'rgb(193 14 23)',
    },
});



const PlanForm = () => {
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);

    const handleClick = (divNumber) => {
        switch (divNumber) {
            case 1:
                setIsVisible1(!isVisible1);
                break;
            case 2:
                setIsVisible2(!isVisible2);
                break;
            case 3:
                setIsVisible3(!isVisible3);
                break;
            case 4:
                setIsVisible4(!isVisible4);
                break;
            default:
                break;
        }
    };

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleButtonClick = () => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = setTimeout(() => {
                setSuccess(true);
                setLoading(false);
                window.location.href = '/User/PaymentPicker'; 
            }, 1000);
            
        }
       
    };
console.log(success);
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

            <div className='planFormCenterContainerDiv'>
                <div className='planFormContainerDiv'>
                    <div className='stepIndicatorPlanformDiv' >STEP <b>2</b> OF <b>3</b></div>
                    <div className='step2TitleDivPlanForm' >Choose your plan that's right for you</div>
                    <div className='checkmarkContainerPlanForm'>

                        <div className='checkmark-group--rowPlanForm'>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" color='#E50914' >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                            <span class="checkmark-group--text" data-uia="checkmark-group+row-0+content">Watch all you want.</span>
                        </div>

                        <div className='checkmark-group--rowPlanForm'>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" color='#E50914' >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                            <span class="checkmark-group--text" data-uia="checkmark-group+row-0+content">Recommendations just for you.</span>
                        </div>

                        <div className='checkmark-group--rowPlanForm'>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" color='#E50914' >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                            <span class="checkmark-group--text" data-uia="checkmark-group+row-0+content">Change or cancel your plan anytime.</span>
                        </div>

                    </div>
                </div>

                <div className='PlanformSelectionDiv'>
                    <div className='default-ltr-cache-zs53xs' onClick={() => handleClick(1)}>
                        <div className='default-ltr-cache-hljwm5'>
                            <div className='default-ltr-cache-1gwr2i2'>
                                Premium
                            </div>
                            <div className='default-ltr-cache-42bcy3'>4k + HDR</div>
                            <div className='default-ltr-cache-e1y70f' ></div>
                            {isVisible1 && (
                                <div class="default-ltr-cache-1a130f1" >
                                    <svg width="14" height="14" viewBox="0 0 24 22" fill="none" class="success-icon" data-uia="success-svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0183 21.0833C17.7761 21.0833 22.4438 16.5688 22.4438 11C22.4438 5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="white"></path>
                                    </svg>
                                </div>
                            )}

                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Monthly price</div>
                                    <div class="default-ltr-cache-15jb4ma">₹649</div>
                                </div>
                            </div>
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Video and sound quality</div>
                                    <div class="default-ltr-cache-15jb4ma">Best</div>
                                </div>
                            </div>
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Resolution</div>
                                    <div class="default-ltr-cache-15jb4ma">4K (Ultra HD) + HDR</div>
                                </div>
                            </div>
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Spatial audio (immersive sound)</div>
                                    <div class="default-ltr-cache-15jb4ma">Included</div>
                                </div>
                            </div>
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Supported devices</div>
                                    <div class="default-ltr-cache-15jb4ma" style={{ fontSize: "14px" }}>TV, computer, mobile phone, tablet</div>
                                </div>
                            </div>
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn" >Devices your household can watch at the same time</div>
                                    <div class="default-ltr-cache-15jb4ma">4</div>
                                </div>
                            </div>
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o" style={{ border: "none" }}>
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Download devices</div>
                                    <div class="default-ltr-cache-15jb4ma">6</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='default-ltr-cache-zs53xs' onClick={() => handleClick(2)}>
                        <div className='default-ltr-cache-hljwm5Plan2'>
                            <div className='default-ltr-cache-1gwr2i2'>
                                Standard
                            </div>
                            <div className='default-ltr-cache-42bcy3'>1080p</div>
                            <div className='default-ltr-cache-e1y70f' ></div>
                            {isVisible2 && (
                                <div class="default-ltr-cache-1a130f1" >
                                    <svg width="14" height="14" viewBox="0 0 24 22" fill="none" class="success-icon" data-uia="success-svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0183 21.0833C17.7761 21.0833 22.4438 16.5688 22.4438 11C22.4438 5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="white"></path>
                                    </svg>
                                </div>
                            )}
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Monthly price</div>
                                    <div class="default-ltr-cache-15jb4ma">₹499</div>
                                </div>
                            </div>
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Video and sound quality</div>
                                    <div class="default-ltr-cache-15jb4ma">Great</div>
                                </div>
                            </div>
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Resolution</div>
                                    <div class="default-ltr-cache-15jb4ma">1080p (Full HD)</div>
                                </div>
                            </div>
                        </div>

                        {/* <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Spatial audio (immersive sound)</div>
                                    <div class="default-ltr-cache-15jb4ma">TV, computer, mobile phone, tablet</div>
                                </div>
                            </div>
                        </div> */}

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Supported devices</div>
                                    <div class="default-ltr-cache-15jb4ma" style={{ fontSize: "14px" }}>TV, computer, mobile phone, tablet</div>
                                </div>
                            </div>
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn" >Devices your household can watch at the same time</div>
                                    <div class="default-ltr-cache-15jb4ma">2</div>
                                </div>
                            </div>
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o" style={{ border: "none" }}>
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Download devices</div>
                                    <div class="default-ltr-cache-15jb4ma">2</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='default-ltr-cache-zs53xs' style={{
                        bordertopStyle: "none",
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                    }} onClick={() => handleClick(3)}>

                        <div class="default-ltr-cache-1imvt7">
                            <span class="default-ltr-cache-16f3tkf">Most Popular</span>
                        </div>

                        {isVisible3 && (
                            <div class="default-ltr-cache-1imvt7Select">
                                <span class="default-ltr-cache-16f3tkf">Most Popular</span>
                            </div>
                        )}

                        <div className='default-ltr-cache-hljwm5Plan3'>
                            <div className='default-ltr-cache-1gwr2i2'>
                                Basic
                            </div>
                            <div className='default-ltr-cache-42bcy3'>720p</div>
                            <div className='default-ltr-cache-e1y70f' ></div>
                            {isVisible3 && (
                                <div class="default-ltr-cache-1a130f1" >
                                    <svg width="14" height="14" viewBox="0 0 24 22" fill="none" class="success-icon" data-uia="success-svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0183 21.0833C17.7761 21.0833 22.4438 16.5688 22.4438 11C22.4438 5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="white"></path>
                                    </svg>
                                </div>
                            )}
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Monthly price</div>
                                    <div class="default-ltr-cache-15jb4ma">₹199</div>
                                </div>
                            </div>
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Video and sound quality</div>
                                    <div class="default-ltr-cache-15jb4ma">Good</div>
                                </div>
                            </div>
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Resolution</div>
                                    <div class="default-ltr-cache-15jb4ma">720p (HD)</div>
                                </div>
                            </div>
                        </div>

                        {/* <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Spatial audio (immersive sound)</div>
                                    <div class="default-ltr-cache-15jb4ma">Included</div>
                                </div>
                            </div>
                        </div> */}

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Supported devices</div>
                                    <div class="default-ltr-cache-15jb4ma" style={{ fontSize: "14px" }}>TV, computer, mobile phone, tablet</div>
                                </div>
                            </div>
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn" >Devices your household can watch at the same time</div>
                                    <div class="default-ltr-cache-15jb4ma">1</div>
                                </div>
                            </div>
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o" style={{ border: "none" }}>
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Download devices</div>
                                    <div class="default-ltr-cache-15jb4ma">1</div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='default-ltr-cache-zs53xs' onClick={() => handleClick(4)}>
                        <div className='default-ltr-cache-hljwm5Plan4'>
                            <div className='default-ltr-cache-1gwr2i2'>
                                Mobile
                            </div>
                            <div className='default-ltr-cache-42bcy3'>420p</div>
                            <div className='default-ltr-cache-e1y70f' ></div>

                            {isVisible4 && (
                                <div class="default-ltr-cache-1a130f1" >
                                    <svg width="14" height="14" viewBox="0 0 24 22" fill="none" class="success-icon" data-uia="success-svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0183 21.0833C17.7761 21.0833 22.4438 16.5688 22.4438 11C22.4438 5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="white"></path>
                                    </svg>
                                </div>
                            )}
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Monthly price</div>
                                    <div class="default-ltr-cache-15jb4ma">₹149</div>
                                </div>
                            </div>
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Video and sound quality</div>
                                    <div class="default-ltr-cache-15jb4ma">Fair</div>
                                </div>
                            </div>
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Resolution</div>
                                    <div class="default-ltr-cache-15jb4ma">420p</div>
                                </div>
                            </div>
                        </div>

                        {/* <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Spatial audio (immersive sound)</div>
                                    <div class="default-ltr-cache-15jb4ma">Included</div>
                                </div>
                            </div>
                        </div> */}

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Supported devices</div>
                                    <div class="default-ltr-cache-15jb4ma" style={{ fontSize: "14px" }}>Mobile phone, tablet</div>
                                </div>
                            </div>
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o">
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn" >Devices your household can watch at the same time</div>
                                    <div class="default-ltr-cache-15jb4ma">1</div>
                                </div>
                            </div>
                        </div>

                        <div className='default-ltr-cache-1o0ivj0'>
                            <div class="default-ltr-cache-1ftsr9o" style={{ border: "none" }}>
                                <div class="default-ltr-cache-ag5bda">
                                    <div class="default-ltr-cache-48o6gn">Download devices</div>
                                    <div class="default-ltr-cache-15jb4ma">1</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div style={{ height: "56px", display: 'flex', justifyContent: "center", alignItems: "center", marginTop: "26px" }}>
                    <Box sx={{ m: 1, position: 'relative' }}>
                    
                         <NextPageBtn
                            variant="contained"
                            disabled={loading}
                            onClick={handleButtonClick}
                        >
                            Next
                        </NextPageBtn>
                       
                        {loading && (
                           
                            <CircularProgress
                                size={24}
                                sx={{
                                    color: 'black',

                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    marginTop: '-12px',
                                    marginLeft: '-12px',
                                }}
                            /> 
                        )}
                    </Box>
                </div>

                <div style={{ gap: "10px", marginTop: "32px" }}>
                    <div className='trmscdtnDiv' >
                        HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our
                        <a href="https://help.netflix.com/legal/termsofuse" style={{ textDecoration: "none", color: "blue" }}>Terms of Use</a>
                        for more details.
                    </div>
                    <div className='trmscdtnDiv' style={{ marginTop: "10px" }}>
                        Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanForm