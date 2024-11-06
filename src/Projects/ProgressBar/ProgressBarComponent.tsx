import React, {ReactElement} from 'react';
import './style.scss'

interface IProgressBarProps {
    progress: number;
}

const ProgressBarComponent = (props: IProgressBarProps): ReactElement => {
    const {progress = 0} = props;
    const label = (progress ? progress+'%' : '');
    return <div className='progressbar'>
        <div className='progressbarInner' style={{width: `${progress}%`}}>
            <label>{label}</label>
        </div>
    </div>;
};

export default ProgressBarComponent;