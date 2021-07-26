import { colors, isDarkTheme } from "../colorUtitlity"

function themeGenerator(path, theme) {
    if (path && theme) {
        const backgroundColor = colors[path][theme];
        const color = isDarkTheme(theme) ? 'white' : 'black';
        return {
            backgroundColor,
            color
        }
    }
    return null
}
export default themeGenerator;