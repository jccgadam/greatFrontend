import React, {FC, useEffect} from 'react';
import './style.scss';

export const ProgressBarMovingComponent = (props: any) => {
    const [mounted, setMounted] = React.useState(false);
    useEffect(() => {
        if (mounted) return;
        setMounted(true);
    },[]);
    return <div className='progressbar--moving'>
        <div className={['content', mounted && 'bar-contents--filled'].filter(Boolean).join(' ')}></div>
    </div>
}
