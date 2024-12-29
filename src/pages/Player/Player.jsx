import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
const navigate = useNavigate()

const {id} = useParams()

const [apiData, setApiData] = useState({
  name : "",
  key : "",
  published_at : "",
  typeof : "",
})

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODdhYTcwYmE2ZDU2NmRlYjljMGRlMmVlOTY3OWNhMCIsIm5iZiI6MTczMTQ5MTgzOC4wNzcyMjM1LCJzdWIiOiI2NzM0NmJhNWE2N2UzNmJiNjY4ZDhiYWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._gyKNcKt8kbaqbAGtflmaBkLpXNcndh-_vpDBRLIuUk'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} frameBorder="0" width='90%' height='90%' 
      title='trailer' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
      
    </div>
  )
}

export default Player