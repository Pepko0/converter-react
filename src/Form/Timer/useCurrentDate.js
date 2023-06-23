import { useState, useEffect } from 'react';

export const useCurrentDate = () => {
    const [time, setTime] = useState(new Date());

    const formattedDate = {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };

    useEffect(() => {
        const time = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(time);
        };
    }, []);

    return  {
        time,
        formattedDate,
    };
};