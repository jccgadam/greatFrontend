import React, {useEffect} from 'react';

import ProgressBarComponent from './ProgressBarComponent';

interface IProgressBarIVSolutionComponentProps {
    concurrencyLimit: number;
}

export const ProgressBarIVSolutionComponent = (props: IProgressBarIVSolutionComponentProps) => {
    const {concurrencyLimit} = props;
    const INITIAL_PROGRESSION = [0];
    const [progression, setProgression] = React.useState<number[]>(INITIAL_PROGRESSION);
    const [timerId, setTimerId] = React.useState<number | null>(null);
    const handleStart = () => {
        const newTimerId = window.setInterval(() => {
            setProgression((currentProgression) => {
                const unfilledBars = currentProgression.map((value, index) => ({
                    value,
                    index
                })).filter((progression) => progression.value < 100);
                if (unfilledBars.length === 0) {
                    return currentProgression;
                }
                // Get the first LIMIT non-full bars and increment them.
                const barsToIncrement = unfilledBars.slice(
                    0,
                    concurrencyLimit,
                );
                const newProgression = currentProgression.slice();
                for (const {index} of barsToIncrement) {
                    newProgression[index] += 0.5;
                }
                return newProgression;
            })
        }, 10);
        setTimerId(newTimerId);
    }
    useEffect(() => {
        return () => {
            if (timerId) {
                clearInterval(timerId);
                setTimerId(null);
            }
        }
    }, []);
    const handlePause = () => {
        if (timerId) {
            clearInterval(timerId);
            setTimerId(null);
        }
    }
    const handleReset = () => {
        handlePause();
        setProgression(INITIAL_PROGRESSION);
    }
    const handleAddBar = () => {
        setProgression(currentProgression => {
            return [...currentProgression, 0];
        })
    }
    const isPaused = timerId === null;

    return <div>
        {progression.map((value, index) => <ProgressBarComponent progress={value} key={index}/>)}
        <button onClick={isPaused ? handleStart : handlePause}>{isPaused ? 'Start' : 'Pause'}</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleAddBar}>Add</button>
    </div>
}