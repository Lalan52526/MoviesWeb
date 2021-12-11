import React, { useEffect, useState} from 'react'
import './Login.css'
import MovieBox from './MovieBox'
import axios from 'axios'
import Pager from './Pager'
import MovieHomeNav from '../Components/MoviHomeNav'

const TrendingMovie = () => {
const [list, setList]= useState()
let [page, setPage]= useState(1)

useEffect(() =>{
   axios
   .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=977eefe575b9168b5e7fd6e6fabc58f1&language=en-US&page=${page}`)  
   .then(({data}) => setList(data.results))
   .catch((err) => console.log(err))
  
},[page])

  return (
    <div> <MovieHomeNav />
      <div className="container">
            <h1>Upcoming Movies...</h1>
              <Pager  page={page} setpage={setPage} />
        <div className="grid">  
          {
            list && list.map((list) => 
            <MovieBox
             key ={list.id}
             id={list.id}
             poster={list.poster_path}
             title={list.title || list.name}
             date={list.release_date}
             media_type={list.media_type}
             vote_average={list.vote_average}
             overview={list.overview}
             release_date={list.release_date}
             original_language={list.original_language}
             
             />)
          }
        </div>
        <Pager  page={page} setpage={setPage} />
          </div>
          </div>
  
    
    
  )
}

export default TrendingMovie
