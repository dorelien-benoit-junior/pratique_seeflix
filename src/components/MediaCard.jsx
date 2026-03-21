
import "./MediaCard.css"

export default function MediaCard({ id, title, cover, rating, type}){

    return(
        <div className='listMediaStyle'>
        <card className="CardStyle">
            <img src={cover}></img>
            <h3>{id}. {title}</h3>
            <span>Rating: {rating}</span>
            <p>{type}</p>
        </card>


        </div>
    )

}