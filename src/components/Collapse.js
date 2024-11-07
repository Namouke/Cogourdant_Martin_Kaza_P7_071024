import React from "react";
import { useState } from "react";
import vectorOpen from "../assets/collapseVectorOpen.png"
import vectorClose from "../assets/collapseVectorClose.png"

const Collapse = (props) => {
    const title = props.title;

    const [open, setOpen] = useState(false);


    return (
        <div className="accrodion">
            <div className={`accordion__wrap ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
                <p className="accordion__title">{title}</p>
                <div className="accordion__vector">
                    {open ? (
                        <img src={vectorOpen} className="vector__mod" alt="flèche vers le haut" />
                    ) : (
                        <img src={vectorClose} className="vector__mod" alt="flèche vers le bas"></img>
                    )}
                </div>
            </div>
            <div className={`accordion__content ${open ? 'open' : ''}`}>
                {open && props.children}
            </div>

        </div>
    )
}

export default Collapse;