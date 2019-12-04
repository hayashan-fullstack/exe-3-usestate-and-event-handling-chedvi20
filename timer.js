import React, {useState, useRef} from 'react';

export const Timer = () => {
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const timeout = useRef(null)

    timeout.current = setTimeout(() => {
        if (second == 59) {
            setSecond(0)
            if (minute == 59) {
                setMinute(0)
                setHour(hour + 1)
            }
            else setMinute(minute + 1)
        }
        else setSecond(second + 1)

    }, 100)


    const restart = () => {
        clearTimeout(timeout.corrent)
        setSecond(0)
        setMinute(0)
        setHour(0)
    }

    return (
        <div style={{ margin: '10%' }}>
            <h1>timer</h1>
            <h2> {hour}:{minute}:{second}</h2>
            <br />
            <button onClick={restart}>restart</button>
        </div>
    )
}