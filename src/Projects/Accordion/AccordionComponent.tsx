import React from "react";
import {IContent, AccordionItemComponent} from './AccordionItemComponent';

interface IAccordionComponent {
    contents: IContent[];
}

export const AccordionComponent = (props: IAccordionComponent) => {
    const {contents} = props;
    const [collapsedItems, setCollapsedItems] = React.useState<string[]>([]);
    return <div className='accordionComponent'>{contents.map((content,index) =>
        <AccordionItemComponent onClick={setCollapsedItems} collapsedItems={collapsedItems}
        content={content.content} title={content.title} key={index} id={index.toString()}/>)}
    </div>
}