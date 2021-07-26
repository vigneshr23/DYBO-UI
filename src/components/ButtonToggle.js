
function ButtonToggle({ checked, onToggle }) {
    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitch" onChange={onToggle} checked={checked} />
            <label className="form-check-label" htmlFor="flexSwitch">Dark Theme</label>
        </div>
    )
}

export default ButtonToggle;