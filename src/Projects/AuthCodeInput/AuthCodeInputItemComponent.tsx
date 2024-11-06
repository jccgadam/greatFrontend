import React, {FormEvent, useEffect} from 'react';
import './style.scss';

interface IAuthCodeInputItemProps {
    index: number;
    value: string;
    id: number;
    onChange: (index: number, value: string) => void;
    focusedIndex: number;
    setFocusedIndex: (newIndex:number)=>void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>)=>void;
}

export const AuthCodeInputItemComponent = (props: IAuthCodeInputItemProps) => {
    const onChange = props.onChange;
    const value = props.value;
    const index = props.index;
    const inputRef = React.useRef<HTMLInputElement>(null);
    const focusedIndex = props.focusedIndex;
    useEffect(() => {
        if(focusedIndex===index){
            inputRef?.current?.focus?.();
            if(inputRef?.current) {
                const length = inputRef.current.value.length;
                inputRef.current.setSelectionRange(length, length+1);
            }
        }
    },[focusedIndex,inputRef?.current?.value.length])
    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        props.onKeyDown(e);
        // Check if the key pressed is a digit
        if ((e.key >= "0" && e.key <= "9")) {
            onChange(index,e.key);
            props.setFocusedIndex(focusedIndex+1);
        }
        else if(e.key==='Backspace'){
            onChange(index,'');
            props.setFocusedIndex(focusedIndex-1);
        }

    }
    return <input className='authCodeInput' type='text' maxLength={1} ref={inputRef} onKeyDown={onKeyDownHandler} onFocus={()=>props.setFocusedIndex(index)}
                  // onBlur={()=>props.checkAndSetFocusedIndex()}
                  value={value}/>
}