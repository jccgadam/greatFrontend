import React from 'react';
import {TabComponent} from './TabComponent';
import {useTabHook} from './useTabHook';
import {ITabProps} from "./types";
import './style.scss';

interface ITabContainerProps {
    tabConfig: ITabProps[]
}

export const TabContainer = (props: ITabContainerProps) => {
    const {tabConfig} = props;
    const {tabId, onTabSelected} = useTabHook();
    const ids = tabConfig.map((config) => config.id);
    const selectedTab = tabConfig.filter((config) => config.id === tabId)?.[0];
    const selectedContent = selectedTab?.content;
    const selectedId = selectedTab?.id;
    return <div className='tab-container'>
        <div className='tab-nav'>
            {ids.map((id) => <div key={id} onClick={() => {
                onTabSelected(id);
            }} className={['tab-nav-item',(selectedId===id && 'selected')].filter(Boolean).join(' ')}>{id}</div>)}
        </div>
        {selectedId ? <TabComponent content={selectedContent} id={selectedId}/> : null}
    </div>;
};