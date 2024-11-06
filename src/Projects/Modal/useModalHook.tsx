import React, {useCallback, useEffect, useState} from "react";


export const useModalHook = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const toggleModal = useCallback(() => {
        setShowModal(!showModal);
    }, [setShowModal, showModal]);
    return {showModal, toggleModal};
}