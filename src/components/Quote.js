import refresh from '../assets/desktop/icon-refresh.svg';
import React from 'react';
import axios from "axios";

export default function Quote(){

    const [ProgrammingQuote, setQuote] = React.useState({});

    const fetchQuote = async () => {
        try{
          const response = await axios('https://programming-quotes-api.herokuapp.com/Quotes/random');
          setQuote(response.data);
          console.log(response.data)
        }catch(err){
          console.error(err)
        }
      };

    React.useEffect(() => {
        fetchQuote();
        }, []);

    function getNewQuote(){
        fetchQuote()
        setQuote(ProgrammingQuote)
    }

    return (
        <div className="fs-3">
            <div>
                <p>{ProgrammingQuote.en}</p>
                <img 
                src={refresh} 
                alt='refresh icon'
                onClick={getNewQuote}
                />
            </div>
            <p>{ProgrammingQuote.author}</p>
        </div>
    )
}