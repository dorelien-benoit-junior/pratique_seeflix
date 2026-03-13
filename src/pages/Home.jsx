import Header from "../components/Header";
import MediaList from "../components/MediaList";
import {top_shows} from "../data/top_shows"

export default function Home(){
    return(
        <>
        <Header/>
        <MediaList items={top_shows} title={"Top Shows"}/>
         <MediaList items={top_shows} title={"Top Shows"}/>
        </>
    )
}