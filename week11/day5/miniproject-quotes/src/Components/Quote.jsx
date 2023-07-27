import { useState, useEffect } from "react";

const Quote = (props) => {
    const [data, setData] = useState(props.quote);

    useEffect(() => {
        setData(props.quote);
    }, [props.quote]);

    return (
        <>
            <h1>{data.quote}</h1>
            <h6>{data.author}</h6>
            <button onClick={props.handle}>New Quote</button>
        </>
    );
};

export default Quote;