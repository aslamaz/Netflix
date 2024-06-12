import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom"
import netflixTrailer from './netflixImages/Godzilla x Kong.mp4'
import { IoPlayCircleSharp } from "react-icons/io5"
import { RiThumbDownFill, RiThumbUpFill } from "react-icons/ri"
// import { BsCheck } from "react-icons/bs"
// import { AiOutlinePlus } from "react-icons/ai"
import { BiChevronDown } from "react-icons/bi"

const TitleCards = ({ title, category }) => {
    const cardsRef = useRef();
    const navigate = useNavigate();
    const [showMovies, setShowMovies] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    // const [isLiked, setIsLiked] = useState(false);

    const optionsMovie = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmRmMjFjNGE4YjZhNzhiZWIyMjIxMDMwOTNhYzNkYiIsInN1YiI6IjY1OWQwYzZmY2Y0OGExMDA5NGU2ZjEyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6R8RiKMyoAi1-YioDqdcWmCfE2YwJyTBvYK68DTIf-g'
        }
    };




    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, optionsMovie)
            .then(response => response.json())
            .then(response => setShowMovies(response.results))
            .catch(err => console.error(err));

        cardsRef.current.addEventListener('wheel', handleWheel)
    }, )
    
    return (
        <div>
            <div className="titlecards">

                <h2>{title ? title : "Popular on Netflix"}</h2>

                <div className="card_list" ref={cardsRef}>
                    {showMovies.map((movies, key) => {
                        return <div className="card"
                        key={key}
                        onMouseEnter={() => setHoveredIndex(key)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img src={`https://image.tmdb.org/t/p/w500` + movies.backdrop_path} alt="img" />
                            {
                                hoveredIndex === key && (
                                    <div className="hoverClass">
                                        <div className="image-video-container">
                                            <img src={`https://image.tmdb.org/t/p/w500` + movies.backdrop_path} alt="img"
                                                onClick={() => navigate("/player")}
                                            />
                                            <video
                                            src={netflixTrailer}
                                            autoPlay
                                            loop
                                            muted
                                            onClick={() => navigate("/player")}
                                            />

                                        </div>
                                        <div className="info-container">
                                            <h3 className='Moviename' onClick={() => navigate("/player")}>
                                                {movies.original_title}
                                            </h3>
                                            <div className="classIcon">
                                                <div className="classControls">
                                                    <IoPlayCircleSharp
                                                        title='play'
                                                        onClick={() => navigate("/player")}
                                                    />
                                                    <RiThumbUpFill title='Like' />
                                                    <RiThumbDownFill title='DisLike' />
                                                    {/* {
                                                        isLiked ? (
                                                            <BsCheck title='remove from List' />
                                                        ) : (
                                                            <AiOutlinePlus title='Add to my List' />
                                                        )
                                                    } */}
                                                </div>
                                                <div className="class-info">
                                                    <BiChevronDown title='More Info' />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            }
                        </div>

                    })}
                </div>

            </div>

            {/* <div className="titlecards">

                <h2>Popular on Netflix</h2>

                <div className="card_list" ref={cardsRef}>
                    <img src={slideimg} alt="img" />
                    <img src={slideimg} alt="img" />
                    <img src={slideimg} alt="img" />
                    <img src={slideimg} alt="img" />
                    <img src={slideimg} alt="img" />
                    <img src={slideimg} alt="img" />
                    <img src={slideimg} alt="img" />
                    <img src={slideimg} alt="img" />
                    <img src={slideimg} alt="img" />
                    <img src={slideimg} alt="img" />
                    <img src={slideimg} alt="img" />
                </div>


            </div> */}
        </div>
    )
}

export default TitleCards 