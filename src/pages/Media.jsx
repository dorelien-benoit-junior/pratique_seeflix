import React from "react";
import MediaCard from "../components/MediaCard";
import { MediaData } from "../data/mediaData";

export default function Media(){
    return(
        <>
            <MediaList items={MediaData} title={"Streaming"}/>
        
        </>
    )
}