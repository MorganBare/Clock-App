import Quote from './Quote.js';
import Sun from '../assets/desktop/icon-sun.svg';
import DownArrow from '../assets/desktop/icon-arrow-down.svg';
import React from 'react';

export default function FullPage(props){

    const worldTime = props.worldTime.datetime;
    const splitTime = worldTime.split(':');
    
    return (
        <div>
            <Quote />
            <div>
                <div className='upper'>
                    <p className='font-size-4'><span><img src={Sun} alt='sun icon'/></span>Good Morning, it's currently</p>
                    <p className='font-size-8'>{splitTime[0].slice(-2)}:{splitTime[1]}<span className='font-size-6'>BST</span></p>
                    <p className='font-size-5'>in {props.city}, {props.country_code}</p>
                </div>
                <button onClick={props.handleDisplay}className='font-size-2'>MORE<span><img src={DownArrow} alt='down arrow'/></span></button>
            </div>
        </div>
    )
}
   




