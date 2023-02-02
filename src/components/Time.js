import React from "react";



export function Time(props){
    const {days, hours, minutes, seconds} = props;
    return (
        <div className="time-container">
            <div className='days'>
                <p>{days}</p>
                <span>days</span>
            </div>
            <div className='hours'>
                <p>{hours}</p>
                <span>hours</span>
            </div>
            <div className='minutes'>
                <p>{minutes}</p>
                <span>minutes</span>
            </div>
            <div className='seconds'>
                <p>{seconds}</p>
                <span>seconds</span>
            </div>
        </div>
    )
}