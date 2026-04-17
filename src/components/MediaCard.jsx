
import { useState } from "react";
import "./MediaCard.css"

export default function MediaCard({ id, title, cover, rating, type}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div>
            <card className="CardStyle">
                <img src={cover}></img>
                <h3>{id}. {title}</h3>
                <span>Rating: {rating}</span>
                
                <div className="dropdownContainer">
                    <button 
                        className="dropdownButton" 
                        onClick={toggleDropdown}
                    >
                        <span>Overview</span>
                        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
                    </button>
                    {isOpen && (
                        <div className="dropdownContent">
                            {type}
                        </div>
                    )}
                </div>
            </card>
        </div>
    )

}