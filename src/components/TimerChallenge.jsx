import React, { useState } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({title, targetTime}) { 
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleClick() {
        setTimeout(() => {
            setTimerExpired(true) 
            dialog.current.showModal()
        }, targetTime * 1000);
        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timerExpired.current);
    }


    return (
    <>
    {timerExpired && <ResultModal ref={dialog} targetTime={targetTime} result="You Lost" />}
    <section id="challenge">
        <h2>{title}</h2>
        <p className="challenge">
            {targetTime} seconds {targetTime > 1 ? 's' : ''} to go!
            
        </p>
        <p>
            <button onClick={handleClick}>
                {timerStarted ? 'stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timerStarted ? 'active' : undefined} >
            {timerStarted ? 'Time is running...' : 'timer inactive'}
        </p>?
    </section></>
    );
}