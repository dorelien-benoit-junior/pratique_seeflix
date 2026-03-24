import React from "react";
import MediaCard from "./MediaCard";



export default function MediaList({title,items=[]}){

    return(
        
    <>
        {/* <div><h2>{title}</h2></div> */}
        <div className="listMediaStyle">
            {items.map((item)=>(
                <MediaCard id={item.id} title={item.title} cover={item.cover} rating={item.rating} type={item.type}/>
            ))}
        </div>
    </>

    )
}