import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Button from "@material-ui/core/Button";
import ButtonArrow from "../src/ui/ButtonArrow";


const useStyles = makeStyles(theme => ({
  rowContainer: {
    paddingLeft: "9em",
    paddingRight: "45em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "5em",
      paddingRight: "20em",
    },
    [theme.breakpoints.down("sm")]: {
    paddingLeft: "1em",
    paddingRight: "0em"
    },
  },
  contactButton: {
    fontSize: "1.2em",
    color: "#2f2f2f",
    marginTop: "2em",
    textDecoration: "underline",
    textTransform: "none",
    borderColor: theme.palette.common.blue,
    "&:hover": {
        textDecoration: "underline",
        backgroundColor: "#fff"
    }
},
}))



export default function Contact() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

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
              <Grid item data-aos="fade-down">
                  <Typography variant="h4" style={{ height: "2em"}}>
                     Reach Out
                  </Typography>
                  <Typography variant="h5" style={{ maxWidth: matchesSM ? "95%" : matchesMD ? "75%" : undefined}}>
                    I'm always interested in fun projects and activities, so if you are looking for a developer or you just wanna connect, feel free to buzz me.
                  </Typography>
              </Grid>
              <Grid item data-aos="slide-right">
                    <Button
                        className={classes.contactButton}
                        disableRipple
                    >
                        <span> <a rel="noopener noreferrer"
                                   target="_blank"
                                   href="mailto:akinleyeoj@gmail.com?subject=Hey%20Chief,%20wanna%20connect%20and%20create%20magic?"
                                   style={{ marginLeft: -7, textDecoration: "none", color: "inherit" }}> akinleyeoj@gmail.com
                                   </a> </span>
                        <ButtonArrow width={15} height={15} fill="black" />
                    </Button>
                </Grid>
           </Grid>
         </Grid>
    </Grid>

  );
}

