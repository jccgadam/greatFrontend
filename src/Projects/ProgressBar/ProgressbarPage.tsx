import React, {FC, ReactElement, useState} from 'react';
import {ProgressBarComponent} from "../ProgressBar";
import { ProgressBarMovingComponent} from "./ProgressBarMovingComponent";
import {ProgressBarWithTimerContentComponent} from "./ProgressBarWithTimerContentComponent";
import { ProgressBarIVSolutionComponent } from "./ProgressBarIVSolutionComponent";
export const ProgressbarPage = (): ReactElement => {
    const arr = [0,2,20, 30, 40, 50, 100];
    const [count,setCount] = useState(0);
    return <div style={{ display:'flex',flexDirection: 'column',gap:10,height:'100vh',justifyContent: 'center',alignItems: 'center' }}>
        {/*{arr.map((value, index) => {*/}
        {/*    return <ProgressBarComponent key={index} progress={value}/>;*/}
        {/*})*/}
        {/*}*/}
        {/*<ProgressBarMovingComponent/>*/}
        {/*<button onClick={()=>setCount(count+1)}>click</button>*/}
        <ProgressBarIVSolutionComponent concurrencyLimit={3}/>
    </div>
}
