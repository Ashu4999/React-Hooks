import { useTheme } from "../../../context/themeContext";

export default function UseContextComp() {
    const { darkTheme, toggleTheme } = useTheme();

    let themebaseContiner = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: "4rem"
    };

    return (
        <div style={themebaseContiner} className="centered-container">
            <p>useContext Example</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}