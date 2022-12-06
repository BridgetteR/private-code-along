import Button from "../Button/Button";

const Header = () => {
    const lessonTitle = "React Lesson 1";
    return (
        // <div>
        // This wouldn't work because my jsx can only return one parent element
        // </div>

        // in react we can use empty fragments
        // can be used instead of divs to allow more divs within one function, without adding the parent div to the html (removes one layer)
        // if we use fragments, we don't have any extra html added to the structure of our page, but they cannot have attrivutes like class, id
        <>
            <div></div>
            <header>
                <h1>{lessonTitle}</h1>
                <p>We are learning react</p>
                <p>Some more react stuff here</p>
                <Button />
            </header>
        </>
    );
};

export default Header;
