import { useState } from "react";

const Card = ({ title, content }) => {
    // We want a card that displays a heading, should be dynamic based on props
    // Card should have a button that says "show more" - when clicked it displays content
    // Clicking button changes state to conditionally render content
    // Content should also be dynamic based on props
    // by default content should be hidden
    // NEW REQUIREMENT - Heading to be upper case

    const [hiddenContent, setHiddenContent] = useState(true);

    const onButtonClick = () => {
        setHiddenContent(!hiddenContent);
    };

    return (
        <div>
            <h2>{title.toUpperCase()}</h2>
            <button onClick={onButtonClick}>
                {hiddenContent ? "Show More" : "Show Less"}
            </button>
            {!hiddenContent && <p>{content}</p>}
        </div>
    );
};

export default Card;
