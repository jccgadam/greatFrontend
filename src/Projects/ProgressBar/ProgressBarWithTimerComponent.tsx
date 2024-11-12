import React, {ReactElement, useEffect} from "react";
import useTimer from "./useTimer";

interface IProgressBarWithTimerComponentProps {
    progressbarConfig: ProgressbarConfig | undefined;
    isInProgress: boolean;
    isResetting: boolean;
}

export class ProgressbarConfig {
    timerId: number|undefined;
    progress: number;
    constructor(timerId: number, progress: number) {
        this.timerId = timerId;
        this.progress = progress;
        this.getTimerId = this.getTimerId.bind(this);
        this.setProgress = this.setProgress.bind(this);
        this.resetProgress = this.resetProgress.bind(this);
        this.getProgress = this.getProgress.bind(this);
        this.setTimerId = this.setTimerId.bind(this);
        this.clearTimerId = this.clearTimerId.bind(this);
    }
    getTimerId = ():number | undefined=>{
        return this.timerId;
    }
    setTimerId(id:number){
        this.timerId = id;
    }
    clearTimerId(){
        this.timerId = undefined;
    }
    getProgress = ():number=>{
        return this.progress;
    }
    setProgress = (value:number)=>{
        return this.progress = value;
    }
    resetProgress = ()=>{
        this.progress = 0;
    }


}
export const ProgressBarWithTimerComponent = (props:IProgressBarWithTimerComponentProps):ReactElement=>{
    const { progressbarConfig,isInProgress,isResetting } = props;
    const { start,resume,pause,seconds,reset } = useTimer(progressbarConfig,isInProgress);
    useEffect(() => {

    }, []);
    useEffect(() => {
        if(isResetting) {
            reset();
        }
    }, [isResetting]);
    useEffect(()=>{
        if(isInProgress && !progressbarConfig?.getTimerId()){
            console.log('start timer');
            start();
        }else if(isInProgress) {
            console.log('resume timer');
            resume();
        }else {
            pause();
            console.log('pause timer');
        }
    },[isInProgress])
    console.log('timer info',isInProgress,isResetting, progressbarConfig?.getTimerId(),seconds);
    return <div>{seconds}</div>
}