import React, { useRef, useState } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({title, targetTime}) { 
    const dialog = useRef();
    const timer = useRef();


    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
       clearInterval(timer.current);
       setTimeRemaining(targetTime * 1000);
       dialog.current.open()
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaing => prevTimeRemaing - 10);
        }, 10);
}

    function handleStop() {
        dialog.current.open()
        clearTimeout(timer.current);
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }


    return (
    <>
    <ResultModal 
    ref={dialog} 
    targetTime={targetTime} 
    result="You Lost" 
    remainingTime={timeRemaining} 
    onReset={handleReset}
     />
    <section id="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} seconds {targetTime > 1 ? 's' : ''} to go!
            
        </p>
        <p>
            <button onClick={timerIsActive ? handleStop : handleStart}>
                {timerStarted ? 'stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined} >
            {timerIsActive ? 'Time is running...' : 'timer inactive'}
        </p>?
    </section></>
    );
}