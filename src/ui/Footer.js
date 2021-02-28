import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles(theme => ({
  rowContainer: {
    paddingLeft: "7.8em",
    paddingRight: "10em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "3.8em",
      paddingRight: "10em"
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0.8em",
      paddingRight: "10em"
    },
    alignItems: "baseline"
  },
  logo: {
      width: "8em",
      [theme.breakpoints.down("sm")]: {
        width: "5em",
      },
  },
  socialContainer: {
      position: "absolute",
      marginTop: "-4em",
      right: "1.5em",
      [theme.breakpoints.down("sm")]: {
        fontSize: ".8em", 
      },
  },
  hover: {
    "&:hover": {
      borderBottom: "2px solid black",
      transition: "transition ease-in-out 1s"

     }
  }
  
}))



export default function Footer() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
         <Grid item 
               className={classes.rowContainer}
               style={{ marginTop: "10em"}}
         >
           <Grid container 
                 justify={ undefined }
                 alignItems="center"
                 direction="row" 
                 
                 >
              <Grid item>
                  <img
                    className={classes.logo}
                    alt="logo icon"
                    src="/assets/TIM.png"
                  />
              </Grid>
           </Grid>
           <Grid container
                 justify="flex-end"
                 spacing={2}
                 className={classes.socialContainer}
           >
              <Grid> <Typography className={classes.hover} style={{marginRight: "2em", fontSize:  matchesSM ? "1em" : undefined}}>
                                   <a rel="noopener noreferrer"
                                   target="_blank"
                                   href="https://twitter.com/frontendtim/" 
                                   style={{ textDecoration: "none", color: "inherit" }}>
                                     TWITTER
                                   </a></Typography> </Grid>
              <Grid> <Typography className={classes.hover} style={{marginRight: "2em", fontSize:  matchesSM ? "1em" : undefined}}>
                                   <a rel="noopener noreferrer"
                                   target="_blank"
                                   href="https://github.com/akinleyeoj/" 
                                   style={{ textDecoration: "none", color: "inherit" }}>
                                     GITHUB
                                   </a></Typography> </Grid>
              <Grid> <Typography className={classes.hover} style={{marginRight: "2em", fontSize:  matchesSM ? "1em" : undefined}}>
                                   <a rel="noopener noreferrer"
                                   target="_blank"
                                   href="https://linkedin.com/in/akinleyeoj/" 
                                   style={{ textDecoration: "none", color: "inherit" }}>
                                     LINKEDIN
                                   </a></Typography> </Grid>

           </Grid>
        
         </Grid>
          </Grid>

  );
}

