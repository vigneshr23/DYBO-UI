import { useContext, useEffect, useMemo } from "react";
import { Theme } from "../App";
import themeGenerator from "../utilities/themeUtil"
import RegistrationForm from "./RegistrationFrom/RegistrationForm";

function RegisterPage({ match, ...props }) {
    const { path } = match
    const { theme, toggleTheme } = useContext(Theme)
    const mainTheme = path.split("/")[1]
    const themeStyles = useMemo(() => themeGenerator(mainTheme, theme), [mainTheme, theme])
    useEffect(() => {
        toggleTheme(mainTheme)
    }, [mainTheme])

    return (
        <div className="main-content registration-page" style={themeStyles}>
            <RegistrationForm theme={themeStyles} />
        </div>
    )
}

export default RegisterPage;