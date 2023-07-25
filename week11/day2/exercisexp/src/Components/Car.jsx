import React, { useState } from "react";
import Garage from "./Garage";
const Car = (props) => {
    const { name, model } = props.carinfo

    const [color, setColor] = useState('blue')

    return (
        <header>
            <Garage size='big' />

            <h2>This car is {name} {model}</h2>
            <h2>The color is {color}</h2>
        </header>
    )
}

export default Car