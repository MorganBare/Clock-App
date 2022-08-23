import Quote from './Quote.js';
import TimeDateInfo from './TimeDateInfo'
import Sun from '../assets/desktop/icon-sun.svg';
import Moon from '../assets/desktop/icon-moon.svg';
import DownArrow from '../assets/desktop/icon-arrow-down.svg';
import UpArrow from '../assets/desktop/icon-arrow-up.svg';
import React from 'react';

export default function FullPage(props){

    const worldTime = props.worldTime.datetime;
    const splitTime = worldTime.split(':');

    function greeting(){
        if(splitTime[0].slice(-2) <= 11){
            return 'Good Morning'
        } else if(splitTime[0].slice(-2) >= 12 && splitTime[0].slice(-2) <= 17){
            return 'Good Afternoon'
        } else {
            return 'Good Evening'
        }
    };
    
    return (
        <div className='full_page_container'>
            {/* quote is only shown when displayMoreInfo is false */}
            {!props.displayMoreInfo && <Quote />}
            <div>
                <div className='upper fc-white'>
                    <p className='font-size-4 ls-3'>{splitTime[0].slice(-2) <= 18 && splitTime[0].slice(-2) > 7 ? <span><img src={Sun} alt='sun icon'/></span> : <span><img src={Moon} alt='moon icon'/></span>}{greeting()}</p>
                    <p className='font-size-8 ls-2'>{splitTime[0].slice(-2)}:{splitTime[1]}<span className='font-size-6'>BST</span></p>
                    <p className='font-size-5 ls-3'>in {props.city}, {props.country_code}</p>
                </div>
                <button onClick={props.handleDisplay} 
                    className='font-size-2 upper'>
                    {props.displayMoreInfo ? <p>Less<span><img src={UpArrow} alt='up arrow'/></span></p> : <p>More<span><img src={DownArrow} alt='down arrow'/></span></p> }
                </button>
            </div>
            { props.displayMoreInfo && 
            <TimeDateInfo
            timezone={props.timezone}
            day_of_year={props.day_of_year}
            day_of_week={props.day_of_week}
            week_number={props.week_number}
            />}
        </div>
    )
}
   




