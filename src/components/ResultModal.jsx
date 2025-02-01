import { useRef } from "react"
import { forwardRef, useImperativeHandle, useRef } from "react"

export default function ResultModal({ result, targetTime}, ref) {
    const dialog = useRef()

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })

    return (
        <dialog ref={dialog} className="result-modal" open>
            <h2>you {result}</h2>
            <p> the target time was <strong>{targetTime} seconds</strong></p>
            <p>you stopped the timer with <strong>X seconds left</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
         )
}