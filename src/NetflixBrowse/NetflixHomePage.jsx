import React from 'react'
import TitleCards from './TitleCards'
import Footer from './Footer'



const NetflixHomePage = () => {

  return (
    <div className="home">
      <div className="hero">
        <img className="banner_img" src="https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQzoSqSg1HlhLnyHj-wlM2wmBGtqBSUZSkMAR9YqSYFFBCdFFJv2iZNaqoSMex3qVmdpjeZU2ExFSYtUOsbA2hzsKso-f-CryuWh.webp?r=d06" alt="" />
        <div className="trailer-vignettevignette-layer"></div>

        <div className="hero-caption">
          <img alt=" " className="caption_img" src="https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQZ6EnonxXFrfQJ4L9Lwwsxr7v13pphxzb294noukoH_gE-jSV8aV02DokT2HWs3ybJEjYSs63ZJfgJ0yzZOuwEnrVhuwGOEEJ7YA6XXU347IfUDw-FTf8nOponkIluVlApo-o5zC2lUFrxApiphYnH0XzgusH6wCjTCfK8S5gO8c-lLz_0__Q.webp?r=141" title=" " />

          <div className="synopsisno-supplemental">
            This critically acclaimed series, praised by Film Daily as "the most addictive show on TV," won Best Drama at the International Emmys and the Premios Fénix.
          </div>

          <div className="hero_btns">
            <button className='play_btn'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="28" height="28" viewBox="0 0 24 24" role="img" data-icon="PlayStandard" aria-hidden="true">
                <path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path>
              </svg>
              Play
            </button>

            <button className='more_btn'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="28" height="28" viewBox="0 0 24 24" role="img" data-icon="CircleIStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="white">
              </path>
              </svg>
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
        <div className="more-cards">
          <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
          <TitleCards title={"Only on Netflix"} category={"popular"}/>
          <TitleCards title={"Upcoming"} category={"upcoming"}/>
          <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
        </div>
        <Footer/>
    </div>

  )
}

export default NetflixHomePage