import { useState } from "react"
import './Card.css'
export const Card = (props) => {
    const [card, setCard] = useState(props.data)

    return (
        <div onClick={() => props.handleClick(card.id)} className="Card">
            <div className="image"> <img src={card.image} alt={card.name} /></div>
            <h2>{card.name}</h2>
        </div>
    )
}


