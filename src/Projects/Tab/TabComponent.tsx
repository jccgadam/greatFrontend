import React from "react";
import {ITabProps} from "./types";
import './style.scss'

export const TabComponent = (props: ITabProps) => {
    const {id, content} = props;
    return (
        <div key={id}>
            {content}
        </div>
    );
};