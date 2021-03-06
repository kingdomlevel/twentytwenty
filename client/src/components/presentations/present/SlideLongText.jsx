import React from "react";
import Markdown from "markdown-to-jsx";

const SlideLongText = ({raw}) => {   

    return (
        <div className="long-text">
            <Markdown options={{}}>
                {raw}
            </Markdown>
        </div>
    )
};

export default SlideLongText;