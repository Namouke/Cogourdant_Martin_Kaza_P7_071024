import React from "react";
import { useState } from "react";
import vectorOpen from "../assets/collapseVectorOpen.png"
import vectorClose from "../assets/collapseVectorClose.png"
import "../style/components/collapse.scss"

const Collapse = (props) => {
    const { title, children, className = "" } = props;

    const [open, setOpen] = useState(false);


    return (
        <div className={`accordion ${className}`}>
            <div className={`accordion__wrap ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
                <p className="accordion__wrap__title">{title}</p>
                <div className="accordion__wrap__vector">
                    {open ? (
                        <img src={vectorOpen} className="accordion__wrap__vector__mod" alt="flèche vers le haut" />
                    ) : (
                        <img src={vectorClose} className="accordion__wrap__vector__mod" alt="flèche vers le bas"></img>
                    )}
                </div>
            </div>
            <div className={`accordion__content ${open ? 'open' : ''}`}>
                {open && children}
            </div>

        </div>
    )
}

export default Collapse;