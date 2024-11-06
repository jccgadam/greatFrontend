import {useCallback, useState} from "react";
import {ArgumentsData} from "./ContactFormComponent";

export const useSubmitHook = (url:string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState<Error>();

    const submitForm = useCallback(async (formValues: ArgumentsData) => {
        setIsLoading(true);
        setError(undefined);
        setSuccess('');
        try {
            const res = await fetch(url,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                "body": JSON.stringify(formValues),
                "method": "POST"
            });
            const data = await res.text();
            if(res.status === 200) {
                setSuccess(data);
            }else{
                 throw Error(data);
            }
        } catch(e: any) {
            setError(e);
        }
        setIsLoading(false);
    },[url]);

    return {
        isLoading, success, error, submitForm
    }
}