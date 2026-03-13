import "./NavStyle.css"


export default function NavBar() {
    return(
        <section className="NavBarStyle">
            <div >
                <img src="/seeflix.png"></img>
            </div>

            <div>
                <ul>
                    <b><li><a href="">Home</a></li></b>
                    <b><li><a href="">Media</a></li></b>
                    <b><li><a href="">About</a></li></b>
                    <b><li><a href="">Contact</a></li></b>
                </ul>
            </div>
        </section>
    )
}