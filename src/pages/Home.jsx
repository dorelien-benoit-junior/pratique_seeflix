import Header from "../components/Header";
import MediaList from "../components/MediaList";
import { MediaData } from "../data/mediaData";
// import { trending_movies } from "../data/trending_movies";

export default function Home(){
    return(
        <>
        <Header/>
        <MediaList items={MediaData} title={"Streaming"}/>
         {/* <MediaList items={top_shows} title={"Top Shows"}/> */}
        </>
    )
}