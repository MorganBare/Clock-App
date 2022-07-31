import React from 'react';

export default function TimeDateInfo(props){


    return (
        <div>
            <div>
                <div>
                    <p className='font-size-1 upper'>current timezone</p>
                    <p className='font-size-7 fw700'>{props.timezone}</p> 
                </div>
                <div>
                    <p className='font-size-1 upper'>day of the year</p>
                    <p className='font-size-7 fw700'>{props.day_of_year}</p> 
                </div>
            </div>
            <div>
                <div>
                    <p className='font-size-1 upper'>day of the week</p>
                    <p className='font-size-7 fw700'>{props.day_of_week}</p> 
                </div>
                <div>
                    <p className='font-size-1 upper'>week number</p>
                    <p className='font-size-7 fw700'>{props.week_number}</p> 
                </div>
            </div>
        </div>
    )
}