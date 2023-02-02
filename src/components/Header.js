import React, { useState } from "react";
import {useRef, useEffect} from 'react';

export const Header = () => {
    const ref = useRef(null);
    const [isClicked, setIsClicked] = useState(false);
    

    function showGif(){
        setIsClicked(!isClicked);
        setTimeout(() => {
            setIsClicked(false)
        }, 1500)
    }

    return (
        <div className="header">
            <h1>Hello there!</h1>
            <p>It's almost the end of 2022, have you acomplished your goals yet?</p>
            <p>No? What do you mean no? Get to work you <span ref={ref} className='gif-proc' onClick={showGif} >fool!</span></p>
            <img src="https://media1.giphy.com/media/W3Ch3vjHi5FGefDT0G/giphy.gif?cid=790b7611baaebf16d8a9257435361678780354c5a57a4a6f&rid=giphy.gif&ct=g" className={isClicked ? 'show' : 'hide'} />
        </div>
    )
}