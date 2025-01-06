const Button = ({onClick, children}) => {
    return <button onClick={onClick}>{children}</button>;
};

export default Button;

// 1. Appearance - Rendering
// 2. Data flow - Passing the props/args
// 3. Functional - if the button is clicked