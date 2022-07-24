import refresh from '../assets/desktop/icon-refresh.svg';
import React from 'react';

export default function Quote(){

    const [ProgrammingQuote, setQuote] = React.useState({});

    React.useEffect(() => {
        fetch('https://programming-quotes-api.herokuapp.com/Quotes/random')
        .then(res => res.json())
        .then(data => setQuote(data))
    }, [])

    console.log(ProgrammingQuote)

    return (
        <div className="fs-3">
            <div>
                <p>{ProgrammingQuote.en}</p>
                <img src={refresh} alt='refresh icon'/>
            </div>
            <p>{ProgrammingQuote.author}</p>
        </div>
    )
}