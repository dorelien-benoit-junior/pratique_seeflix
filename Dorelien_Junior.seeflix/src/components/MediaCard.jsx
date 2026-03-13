// import {top_shows} from '/top_shows.js'
// import {trending_movies} from './trending_movies.js'
import React from 'react'
import "./MediaCard.css"

export default function MediaCard({ id, title, cover, rating }){

    return(
        <div className='listMediaStyle'>
        <card className="CardStyle">
            <img src={cover}></img>
            <h3>{id}. {title}</h3>
            <span>Rating: {rating}</span>
        </card>


        </div>
    )

}