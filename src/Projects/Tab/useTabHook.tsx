import { useState } from "react"
const useTabHook = ()=>{
    const [ tabId, setTabId ] = useState<string>('');
    const onTabSelected = (id: string)=>{
        if(tabId!==id) {
            setTabId(id);
        }
    }
    return {
        tabId,
        onTabSelected,
    }
}
export {
    useTabHook
}