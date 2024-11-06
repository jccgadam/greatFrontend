import React, {useEffect} from "react";
import {AuthCodeInputItemComponent} from "./AuthCodeInputItemComponent";
import {useSubmitHook} from "../ContactForm/useSubmitHook";
import './style.scss';
interface IAuthCodeInputComponentProps {
    size: number;
}
const initialState = {
    inputCode: new Map(),
    focusedIndex: 0,
}
export const AuthCodeInputComponent = (props: IAuthCodeInputComponentProps) => {
    const {size} = props;
    const [inputCode, setInputCode] = React.useState<Map<number, string>>(new Map());
    const [focusedIndex, setFocusedIndex] = React.useState(0);
    const onChange = (index: number, value: string) => {
        const newValue = new Map(inputCode);
        if(value) {
            newValue?.set(index, value);

        }else{
            newValue?.delete(index);
        }
        setInputCode(newValue);
    }
    const url = 'https://www.greatfrontend.com/api/questions/auth-code-input';
    const {submitForm, isLoading, success,error } = useSubmitHook(url);
    const checkAndSetFocusedIndex = (newIndex: number) => {
        if (newIndex>= 0 && newIndex< size) {
            setFocusedIndex(newIndex);
        }
    }
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowLeft') {
            checkAndSetFocusedIndex(focusedIndex-1);
        } else if (e.key === 'ArrowRight') {
            checkAndSetFocusedIndex(focusedIndex+1);
        }
    }
    useEffect(()=>{
        if(success){
            alert((success));
        }
        if(error){
            alert(error);
        }
    },[success,error])
    const disableRestButton = inputCode.size==0 || isLoading;
    const resetButton = <button className='reset-button' disabled={disableRestButton} onClick={() => {
        setInputCode(initialState.inputCode);
        setFocusedIndex(initialState.focusedIndex);
    }}>Reset</button>
    const disabledSubmitBtn = inputCode.size < size || isLoading;
    const submitButton = <button className='submit-button' disabled={disabledSubmitBtn} onClick={() => {
        void submitForm({
            otp: Array.from(inputCode.values()).join('')
        })
    }}>Submit</button>
    return <div className='auth-code-input-wrapper'>
        <div className='auth-code-input-container'>{
            Array(size).fill(null).map((_, index) =>
                <AuthCodeInputItemComponent onChange={onChange} index={index}
                                            value={inputCode.get(index) || ''}
                                            focusedIndex={focusedIndex}
                                            id={index}
                                            setFocusedIndex={checkAndSetFocusedIndex}
                                            onKeyDown={onKeyDown}/>)
        }</div>
        <div className='auth-code-button-container'>
            {resetButton}
            {submitButton}
        </div>
    </div>
}