import React from "react";
import MediaCard from "./MediaCard";




export default function MediaList({title,items=[]}){

    return(
    <>
    <div>
        <h2>{title}</h2>
        {items.map((item)=>(
            <MediaCard title={item.title} cover={item.cover} rating={item.rating}/>
        ))}
    </div>
    </>


 
    )
}