import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from 'react-dom'

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {
    const dialog = useRef();
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })

    return createPortal (
        <dialog ref={dialog} className="result-modal" onClose={onReset} open>
            {userLost && <h2>you lost</h2>}
            {!userLost && <h2>Your score: {score}</h2>}
            <p> 
                the target time was <strong>{targetTime} seconds</strong>
            </p>
            <p>
                you stopped the timer with <strong>X seconds left</strong>
            </p>
            <p>
                you stopped the timer with <strong>{formattedRemainingTime} seconds left</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')

         )
})

export default ResultModal