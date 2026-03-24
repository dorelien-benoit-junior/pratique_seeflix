import "./Hero.css"
import { Link, NavLink } from "react-router-dom"

export default function Hero(){
    return(
        <div className="heroStyle">
            <h1>Let's Stream everywhere!!!</h1>
            <p>All your favorite movies and series, <br></br>
            right on your screen from the comfort of your living room!!!</p>
            <br/>
            <Link to="/Media"><button>En savoir plus</button></Link>
        </div>
    )
}