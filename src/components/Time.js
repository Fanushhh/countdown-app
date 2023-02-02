import React from "react";



export function Time(props){
    const {days, hours, minutes, seconds} = props;
    return (
        <div className="time-container">
            <div className='days'>
                <p>{days}</p>
                <span>{days == 1 ? "Day" : "Days"}</span>
            </div>
            <div className='hours'>
                <p>{hours}</p>
                <span>{hours == 1 ? "Hour" : "Hours"}</span>
            </div>
            <div className='minutes'>
                <p>{minutes}</p>
                <span>{minutes == 1 ? "Minute" : "Minutes"}</span>
            </div>
            <div className='seconds'>
                <p>{seconds}</p>
                <span>{seconds == 1 ? "Second" : "Seconds"}</span>
            </div>
        </div>
    )
}