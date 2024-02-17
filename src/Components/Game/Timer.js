import { useState, useEffect } from 'react';

const Timer = () => {

    const startTime = 20

    const [time, setTime] = useState(startTime);

    const min = Math.floor(time/60);
    let sec = time % 60;
    if (sec < 10) {
        sec = "0"+sec;
    };

    useEffect(() => {
        let timer = setInterval(() => {
            setTime((time) => {
                if (time === 0) {
                    clearInterval(timer);
                    return 0;
                } else {
                    return time - 1;
                }
            });
        }, 1000)
    }, []);

    return (
        <div className="timer">
            <div className="timer_time">{min}:{sec}</div>
            <div className="timer_bar">
                <div className="timer_bar_time" style={{width: `${(time/startTime)*100}%`}}></div>
            </div>  
        </div>
    );
};

export default Timer;