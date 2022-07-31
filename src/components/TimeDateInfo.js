import React from 'react';

export default function TimeDateInfo(){
    return (
        <div>
            <div>
                <div>
                    <p className='font-size-1 upper'>Current timezone</p>
                    <p className='font-size-7 fw700'>Europe/London</p> 
                </div>
                <div>
                    <p className='font-size-1 upper'>day of the year</p>
                    <p className='font-size-7 fw700'>295</p> 
                </div>
            </div>
            <div>
                <div>
                    <p className='font-size-1 upper'>day of the week</p>
                    <p className='font-size-7 fw700'>5</p> 
                </div>
                <div>
                    <p className='font-size-1 upper'>week number</p>
                    <p className='font-size-7 fw700'>42</p> 
                </div>
            </div>
        </div>
    )
}