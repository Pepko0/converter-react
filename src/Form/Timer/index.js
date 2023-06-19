import { useState, useEffect } from 'react';
import "./style.css";

const Timer = () => {
    const [time, setTime] = useState(new Date());

    const formattedDate = {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }

    useEffect(() => {
        const time = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(time);
        };
    }, []);

    return (
        <p
            className="time"
        >
            Dziś jest: {time.toLocaleDateString(undefined, formattedDate)}
        </p>
    );

}

export default Timer;