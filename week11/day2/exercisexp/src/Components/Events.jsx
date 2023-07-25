import React, { useState } from "react";

const clickMe = () => {
    alert('I was clicked')
}
const handleKeyDown = (event) => {
    if (event.key === "Enter") {
        alert(`It was Enter and the value is ${event.target.value}`);
    }
}

const Events = (props) => {
    const [isToggleOn, setToggle] = useState(true);
    const isToggleFunc = () => {
        isToggleOn ? setToggle(false) : setToggle(true)
    }
    return (
        <>
            <input type="text" onKeyDown={handleKeyDown} />
            <button onClick={clickMe}>Click</button>
            <button onClick={isToggleFunc}>{isToggleOn ? 'On' : 'Off'}</button>
        </>
    )
}

export default Events


