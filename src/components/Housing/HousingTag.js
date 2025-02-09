import React from "react";

const tag = (props) => {
    const { tag, className = "" } = props;

    return (
        <div className={`tag ${className}`}>
            {tag}
        </div>
    )
}

export default tag;