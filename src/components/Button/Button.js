import PropTypes from "prop-types";
import { useContext, useMemo } from "react";
import { Theme } from "../../App";
import { colors, isDarkTheme } from "../../colorUtitlity";
import "./Button.scss";

const Button = ({ type, label, onClick, ...props }) => {
    const { mainTheme, theme } = useContext(Theme)
    const styles = {
        backgroundColor: 'white',
        color: colors[mainTheme]?.[theme],
        border: '2px solid ' + colors[mainTheme]?.[theme]
    }
    return (
        <>
            <button className="button"
                type={type}
                onClick={onClick}
                {...props}
                style={styles}
            >
                {label}
            </button>
        </>
    )
}

export default Button;

Button.defaultProps = {
    onClick: () => { },
    label: "",
    type: "button"
}

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func
}