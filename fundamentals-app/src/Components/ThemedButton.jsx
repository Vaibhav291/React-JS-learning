import React, { useContext } from "react";

const ThemeContext = React.createContext('light');

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return <button className={theme}>Theme: {theme}</button>;
}

export default ThemedButton;