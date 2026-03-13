import React from "react";
import MediaCard from "./MediaCard";




export default function MediaList(){

    return(
    <MediaCard
    id= {1}
    title={"Inception"}
    cover= {"/src/assets/movie_covers/Inception.jpg"}
    rating={8.8} 
    
    // id= {2}
    // title={"The Dark Knight"}
    // cover= {"/src/assets/movie_covers/The_Dark_Knight.webp"}
    // rating={9.0}
    />


 
    )
}