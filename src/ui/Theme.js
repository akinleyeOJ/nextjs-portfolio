import { createMuiTheme } from "@material-ui/core/styles";

const arcBlack = "#444452";
const arcGrey = "#8b8b8b";
const arcPurple = "#bd33a4";

export default createMuiTheme ({
    palette: {
        common: {
            black:  arcBlack,
            grey: arcGrey 
        },
        primary: {
            main: arcBlack
        }
    },
    typography: {
        h1: {
            fontFamily: "'Mulish', sans-serif",
            fontWeight: 700,
            fontSize: "3.75rem",
            color: arcBlack,
            lineHeight: 1.5
        },
        h2: {
            fontFamily: "Raleway",
            fontSize: "1rem",
            color: arcGrey,
            lineHeight: 1.8
        },
        h3: {
            fontFamily: "'Mulish', sans-serif",
            fontWeight: 700,
            fontSize: "2rem",
            color: arcBlack,
            lineHeight: 1.5
        },
        h4: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: arcBlack,
            lineHeight: 1.5
        },
        h5: {
            fontFamily: "Raleway",
            fontSize: "1.2rem",
            color: arcGrey,
            lineHeight: 1.8
        },
        h6: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: arcPurple,
            lineHeight: 1.5
        },
    }
})