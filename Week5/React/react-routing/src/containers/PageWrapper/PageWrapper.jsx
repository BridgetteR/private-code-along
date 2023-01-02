const PageWrapper = (props) => {
    console.log(props);

    const { children } = props;
    console.log(children);

    // Children props allow me to add content between my opening and closing tags in the parent

    return <div>{children}</div>;
};

export default PageWrapper;
