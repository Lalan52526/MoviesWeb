import React from 'react'
import '../Components/MovieBox.css'
import { poster_img400 } from './config'
import MoviHome from './MoviHomeNav'
const MovieBox = ({list,title,name,original_language,id,poster,date,media_type, vote_average,overview,release_date}) => {
    return (
        <div  className="MovieBox">
         <span className="badge position-relative">{vote_average}</span>
            {/* <img src={`https://image.tmdb.org/t/p/w400/${list && list.poster_path }`} alt={`${list && list.release_date } Poster`} /> */}
            <img src={`${poster_img400}/${poster}`} alt={title}/>
           <div className="title">
               <h4>{title || name}</h4>
           </div>
         <div className="Movie_title_lang">
         <span className="lang" >{original_language} </span>
         <span className="type">{media_type} </span>
         </div>
           <div className="Movie_info">
               <span>ID : {id}</span>
               <span>Name : {title || name}</span>
               <span>Original Language : {original_language}</span>
               <span>Date : {date || release_date}</span>
               <span>Media Type : {media_type}</span>
               <span>Vote Average : {vote_average}</span>
               <h4>Overview : </h4>
               <span>{overview}</span>
             
            
            </div>

            

        </div>


    )
}

export default MovieBox
