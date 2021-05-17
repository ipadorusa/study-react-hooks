import React, {useState, useEffect} from 'react'

function Clock() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        var timerId = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerId);
        }
    }, [setDate]);
    function tick() {
        setDate(new Date());
    }
    return (
        <div>
            {date.toLocaleTimeString()}
        </div>
    )
}

export default Clock
