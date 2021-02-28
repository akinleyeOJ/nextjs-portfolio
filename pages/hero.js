import React, {useEffect} from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Aos from "aos";
import"aos/dist/aos.css";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import logoImage from "../public/assets/TIM.png"
import waveIcon from "../public/assets/wave.png"


const useStyles = makeStyles(theme => ({
  rowContainer: {
    paddingLeft: "14em",
    paddingRight: "10em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "7.8em",
      paddingRight: "1em"
  },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "2em",
      paddingRight: "1em"
  }
  },
  logo: {
    marginTop:"4em",
    [theme.breakpoints.down("sm")]: {
      marginTop:"0em",
      paddingLeft: "1em",
  },
    width: "8em",
    paddingLeft: "7em",

},
}))



export default function Hero() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() =>{
    Aos.init({ duration: 1000})
  }, []);

  return (
    <Grid container direction="column">
      <Grid item data-aos="zoom-in-right">
            <img
                className={classes.logo}
                alt="logo icon"
                src={logoImage}
            />
      </Grid>
         <Grid item 
               className={classes.rowContainer}
               style={{ marginTop: "5em"}}
         >
           <Grid container 
                 justify={ undefined }
                 alignItems="center"
                 direction="row" 
                 
                 >
              <Grid item data-aos="fade-up">
                 <Grid item container>
                   <Grid item >
                    <Typography variant="h1" style={{ height: "2.5em", fontSize: matchesSM ? "3.3em" : undefined}}>
                      Hi there

                    </Typography>
                   </Grid>
                   <Grid item>
                     <img
                       src={waveIcon}
                       alt="envelope"
                       style={{ marginLeft: "2.5em", verticalAlign: "bottom", maxWidth: "4em", marginTop: "0.7em" }}
                     />
                   </Grid>
                  </Grid>
                  <Typography variant="h3"style={{ maxWidth: matchesSM ? "95%" :"80%"}}>
                    I'm <span style={{color: "#bd33a4", fontWeight: "bolder"}}>Timmy</span>. Web and Mobile Developer based in Bydgoszsz, Poland passionate about implimenting UI designs and simplifyling life by improving user experiences (UX).
                  </Typography>
              </Grid>
           </Grid>
         </Grid>
    </Grid>

  );
}

