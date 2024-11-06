import React, {FormEvent} from "react";
import {useSubmitHook} from "./useSubmitHook";

interface FormData {
    name: HTMLInputElement,
    email: HTMLFormElement,
    message: HTMLFormElement
}

export interface ArgumentsData {
    [key: string]: any;
}

export const ContactFormComponent: React.FC = () => {
    // const [name, setName] = React.useState<string>("");
    // const [email, setEmail] = React.useState<string>("");
    // const [message, setMessage] = React.useState<string>("");
    const url = "https://www.greatfrontend.com/api/questions/contact-form";

    const {submitForm, success, error, isLoading} = useSubmitHook(url);
    const hasNoEmptyFiled = (formValues: ArgumentsData): boolean => {
        const emptyFiledKeys = []
        for (const [key, value] of Object.entries(formValues)) {
            if (!value) {
                emptyFiledKeys.push(key);
            }
        }
        if (!!emptyFiledKeys.length) {
            alert(`Field(s) ${emptyFiledKeys.join(',')} empty`);
            return false;
        }
        return true;
    }
    const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget
        const formElements: FormData = form.elements as typeof form.elements & FormData;
        const formValues = {
            name: formElements.name.value,
            email: formElements.email.value,
            message: formElements.message.value,
        }
        if (hasNoEmptyFiled(formValues)) {
            await submitForm(formValues);
        }
    }

    return <form className="contact-form" onSubmit={(e) => onSubmitForm(e)}>
        <input type="text" id="name"/>
        <input type="email" id="email"/>
        <input type="message" id="message"/>
        <span>{success}</span>
        <span>{error?.message}</span>
        <button type="submit" disabled={isLoading}>Submit</button>
    </form>
}