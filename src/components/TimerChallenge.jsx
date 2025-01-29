export default function TimerChallenge({title, targetTime}) { 

    function handleClick() {
        console.log('Button clicked'); 
    }
    return (<section id="challenge">
        <h2>{title}</h2>
        <p className="challenge">
            {targetTime} seconds {targetTime > 1 ? 's' : ''} to go!
            
        </p>
        <p>
            <button>
                Start Challenge

            </button>
        </p>
        <p className="" >
            Time is running... / timer inactive
        </p>?
    </section>
    );
}