import React from "react";
import "../../style/components/housing/housingTag.scss"

const tag = (props) => {
    const { tag, className = "" } = props;

    return (
        <div className={`tag ${className}`}>
            {tag}
        </div>
    )
}

export default tag;