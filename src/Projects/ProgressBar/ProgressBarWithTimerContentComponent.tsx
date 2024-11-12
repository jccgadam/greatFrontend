import React, {useEffect, useState} from "react";
import {ProgressbarConfig, ProgressBarWithTimerComponent} from './ProgressBarWithTimerComponent';

export const ProgressBarWithTimerContentComponent = () => {
    const [isInProgress, setIsInProgress] = useState<boolean>(false);
    const [isResetting, setIsResetting] = useState<boolean>(false);
    const [progressbarConfigMap, setProgressbarConfigMap] = useState<Map<number, ProgressbarConfig>>(new Map());
    const [index, setIndex] = useState<number>(-1);
    const handleClickAddBtn = () => {
        const newIndex = index + 1;
        const newProgressbarConfigMap = new Map<number, ProgressbarConfig>(progressbarConfigMap);
        newProgressbarConfigMap.set(newIndex, new ProgressbarConfig(newIndex, 0));
        setIndex(newIndex);
        setProgressbarConfigMap(newProgressbarConfigMap);
    }

    const handleClickStartBtn = () => {
        setIsInProgress(!isInProgress);
        setIsResetting(false);
    }

    const handleClickReset = () => {
        setIsResetting(true);
        setIsInProgress(false);
    }

    return <div>
        {Array(index+1).fill(0).map((_, index) => progressbarConfigMap.get(index) ?
            <ProgressBarWithTimerComponent isInProgress={isInProgress} isResetting={isResetting}
                                           progressbarConfig={progressbarConfigMap.get(index)}/> : '')
        }
        <button onClick={handleClickAddBtn}>Add</button>
        <button onClick={handleClickStartBtn}>Click</button>
        <button onClick={handleClickReset}>Reset</button>
    </div>
}

