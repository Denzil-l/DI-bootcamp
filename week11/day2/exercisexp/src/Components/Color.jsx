import React, { useEffect, useState } from "react";


const Color = () => {
    const [favoriteColor, setColor] = useState('red')

    useEffect(() => {
        setColor('yellow')
        alert('useEffect reached')

    }, [])
    const ChangeColor = () => {
        setColor('blue')
    }


    return (
        <>
            <h2>My favorite colors is {favoriteColor}</h2>
            <button onClick={ChangeColor}>Change Color</button>

        </>
    )
}

export default Color