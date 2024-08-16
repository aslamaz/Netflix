import React, { useEffect, useState } from 'react'
import leftArow from './playerImages/left-arrow.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmRmMjFjNGE4YjZhNzhiZWIyMjIxMDMwOTNhYzNkYiIsIm5iZiI6MTcyMDYwMDAzMC4zNjM3OTQsInN1YiI6IjY1OWQwYzZmY2Y0OGExMDA5NGU2ZjEyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QVR-Vkzio8Un0fD-lNnUznCBk5T6VyHcbmkViCCLgIk'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  }, [])



  return (
    <div className='player'>
      <img src={leftArow} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player