import React, {ReactElement, useEffect} from "react";
import ReactDOM from "react-dom";
import './style.scss';

interface IModalComponentProps {
    title?: string;
    open?: boolean;
    content: string | ReactElement;
    onClose?: () => void;
}


export const ModalComponent = (props: IModalComponentProps): ReactElement => {
    const { content, title,open,onClose } = props;
    if (!open) return <div></div>;
    return ReactDOM.createPortal(<div className='modal-overlay'>
        <div className='modal-container'>
            <h1 className='modal-title'>{title}</h1>
            <div className='modal-content'>{content}</div>
            <div className='modal-button-wrapper'>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    </div>,document.body as HTMLElement)
}