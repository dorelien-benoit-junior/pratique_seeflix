// import React from "react";
import MediaList from "../components/MediaList";
import { MediaData } from "../data/mediaData";
import NavBar from "../components/NavBar";

export default function Media(){
    return(
        <>
            <NavBar/>
            <MediaList items={MediaData} title={"Streaming"}/>
        
        </>
    )
}