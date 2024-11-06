import React from 'react';
import './style.scss';

export interface IContent {
    title: string;
    content: string;

}
export interface IAccordionItemComponentProps extends IContent {
    onClick: React.Dispatch<React.SetStateAction<string[]>>
    collapsedItems: string[];
    id: string;
}
export const AccordionItemComponent = (props: IAccordionItemComponentProps) => {
    const onClick = props.onClick;
    const collapsedItems = props.collapsedItems;
    const collapsed = collapsedItems.includes(props.id);
    return <div className={["accordion-item", collapsed && "collapse"].filter(Boolean).join(' ')}>
        <div className="accordion-title" onClick={() => {
            let newCollapsedItems: Set<string> = new Set(collapsedItems);
            if (newCollapsedItems.has(props.id)) {
                newCollapsedItems.delete(props.id);
            } else {
                newCollapsedItems.add(props.id);
            }
            onClick(Array.from(newCollapsedItems));
        }}>
            <span>{props.title}</span>
            <a
                aria-hidden={true}
                className="accordion-icon"
            />
        </div>
        <div className="accordion-content">{props.content}</div>
    </div>
}