import React, { useState } from "react";
import { Time } from "./components/Time";
import './index.css';
import { Header } from "./components/Header";
export function App(){
    const [days, setDays] = useState();
    const [hours, setHours] = useState('17');
    const [minutes, setMinutes] = useState('54');
    const [seconds, setSeconds] = useState('05');
    
    var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();
    const countdown = () => {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }
    setInterval(countdown, 1000);
    
    

    return (
    <main>
        <Header />
        <Time days={days} hours={hours} minutes={minutes} seconds={seconds}/>
    </main>);
}