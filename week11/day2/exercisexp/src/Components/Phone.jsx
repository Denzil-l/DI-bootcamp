import React, { useState } from "react";

const Phone = (props) => {
    const [brand, setBrand] = useState('Samsung')
    const [model, setmodel] = useState('Galaxy S20')
    const [color, setColor] = useState('black')
    const [year, setYear] = useState(2020)

    const ChangeColor = () => {
        setColor('blue')
    }


    return (
        <>
            <h2>My phone is a {brand}</h2>
            <h4>It is a {color} {model} from {year}</h4>
            <button onClick={ChangeColor}>Change Color</button>
        </>
    )
}

export default Phone
