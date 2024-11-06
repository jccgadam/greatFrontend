import React from "react";
import {ModalComponent} from "./ModalComponent";
import {StarComponent} from "../Star/StarComponent";

export const ModalPage = () => {
    const title = "Modal Title";
    const content = <div>
            {'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.\n'}
        <StarComponent total={5} starSize={30}/>
    </div>;
    const [open, setOpen] = React.useState(false);
    return <div>
        <button onClick={() => setOpen(!open)}>Open Modal</button>
        <ModalComponent open={open} title={title} onClose={() => setOpen(false)} content={content}/>
    </div>
}