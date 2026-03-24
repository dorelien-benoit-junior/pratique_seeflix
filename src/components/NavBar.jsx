import "./NavStyle.css"
import { Link, NavLink } from "react-router-dom"


export default function NavBar() {
    return(
        <section className="NavBarStyle">
            <div >
                <Link to={"/"}><img src="/seeflix.png"></img></Link>
            </div>

            <div>
                <ul>
                    <b><li><Link to={"/"}>Home</Link></li></b>
                    <b><li><Link to={"/Media"}>Media</Link></li></b>
                    <b><li><Link to={"/About"}>About</Link></li></b>
                    <b><li><Link to={"/Contact"}>Contact</Link></li></b>
                </ul>
            </div>
        </section>
    )
}