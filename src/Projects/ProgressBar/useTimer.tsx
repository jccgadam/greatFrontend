import React, {useState, useRef, useCallback} from "react";
import {ProgressbarConfig} from './ProgressBarWithTimerComponent';

function useTimer(progressbarConfig: ProgressbarConfig | undefined, isInProgress: boolean) {
    const [seconds, setSeconds] = useState(0); // Timer count in seconds

    // Start the timer
    const start = useCallback(() => {
        if (isInProgress) {
            progressbarConfig?.setTimerId(window.setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000));
        }
    }, [isInProgress]);

    // Pause the timer
    const pause = useCallback(() => {
        console.log('progressbarConfig in hook called pause',progressbarConfig?.getTimerId());
        if (!isInProgress) {
            console.log('progressbarConfig in hook called pause',progressbarConfig?.getTimerId());
            if (progressbarConfig?.getTimerId()) {
                clearInterval(progressbarConfig.getTimerId());
            }
        }
    }, [isInProgress]);

    // Resume the timer
    const resume = useCallback(() => {
        if (isInProgress) {
            progressbarConfig?.setTimerId(window.setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000));
        }
    }, [isInProgress]);
    // Reset the timer
    const reset = useCallback(() => {
        setSeconds(0);
        if (progressbarConfig?.getTimerId) {
            clearInterval(progressbarConfig?.getTimerId());
            progressbarConfig.clearTimerId();
        }
    }, [isInProgress]);

    // Cleanup interval on unmount
    React.useEffect(() => {
        return () => {
            if (progressbarConfig?.getTimerId()) clearInterval(progressbarConfig.getTimerId());
        };
    }, []);

    return {seconds, start, pause, resume,reset};
}

export default useTimer;
