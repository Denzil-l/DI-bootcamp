import { useState } from 'react'
import './Block.css'
import quotes from './data'
import Quote from './Quote'
const Main = () => {

    const [randomQuote, setRandomQuote] = useState({})

    const changeNumber = () => {
        const randomium = Math.floor(Math.random() * quotes.length)
        setRandomQuote(quotes[randomium])
    }

    return (
        <div className="block">
            <Quote quote={randomQuote} handle={changeNumber} />
        </div>
    )
}

export default Main