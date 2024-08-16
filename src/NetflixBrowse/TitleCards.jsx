import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
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
    },)

    return (
        <div>
            <div className="titlecards">

                <h2>{title ? title : "Popular on Netflix"}</h2>

                
                    <div className="card_list" ref={cardsRef}>
                        {showMovies.map((movies, key) => {
                            return <Link to={`/Player/${movies.id}`} className="card" key={key}>
                            
                                <img src={`https://image.tmdb.org/t/p/w500` + movies.backdrop_path} alt="img" />

                                </Link>

                        })}
                    </div>
                

            </div>


        </div>
    )
}

export default TitleCards 