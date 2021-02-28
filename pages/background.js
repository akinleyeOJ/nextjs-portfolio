import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles(theme => ({
  rowContainer: {
    paddingLeft: "9em",
    paddingRight: "7em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "2em",
      paddingRight: "2em"
  },
  },
  titleContainer: {
    paddingLeft: "15em",
    paddingRight: "30em"
  },
  colOne: {
    boxShadow: "none",
    // maxWidth: 995,
   
    // paddingRight: "3em",
    // [theme.breakpoints.down("sm")]: {
    //     paddingRight: "0em",
    // },
    // [theme.breakpoints.down("md")]: {
    //     paddingLeft: "0em",
    // }, 
    
    marginTop: "2em",  
    marginBottom: "2em"
  },
  colTwo: {
    boxShadow: "none",
    maxWidth: 1095,
    [theme.breakpoints.down("lg")]: {
        maxWidth: 995,
    },
    [theme.breakpoints.down("md")]: {
        maxWidth: 595,
    },
    marginTop: "2em",
    // marginLeft: "6em",
    // [theme.breakpoints.down("sm")]: {
    //     marginLeft: "0em",
    // }, 
    // paddingLeft: "1em",
    // [theme.breakpoints.down("md")]: {
    //     paddingLeft: "0em",
    // },    
  },
  caseStudiesMediaOne: {
    height: 450,
    [theme.breakpoints.down("md")]: {
      height: 400,
  },
    width: "100%",
    backgroundPosition: "cover" ,
   
},
caseStudiesMediaTwo: {
    height: 740,
    [theme.breakpoints.down("md")]: {
        height: 340,
    },
    backgroundPosition: "inherit"   
},
actionArea: {
    "&:hover $focusHighlight": {
      opacity: 0
    }
  },
  focusHighlight: {}
}))



export default function Background() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <Grid container direction="column">
         <Grid item 
               className={classes.rowContainer}
               style={{ marginTop: "3em"}}
         >
           <Grid container 
                 justify={ undefined }
                 alignItems="center"
                 direction="row" 
                 
                 >
            <Grid item data-aos="fade-up">
             <Grid container direction="column">
             <Grid item>
                <Card className={classes.colOne}>
                    <CardActionArea 
                                 classes={{
                                    root: classes.actionArea,
                                    focusHighlight: classes.focusHighlight
                                  }} disableRipple>
                                <CardMedia
                                    className={classes.caseStudiesMediaOne}
                                    image={"/assets/MyImg.jpg"}
                                    title="MyImage"
                                />
                    </CardActionArea>
                </Card>
                </Grid>
            
              <Grid data-aos="fade-up" container direction={"row"} className={classes.caseStudiesContainer}>
                <Grid 
                    item
                    container
                    direction={matchesMD ? "column" : "row"}
                    justify="center"
                    alignItems={ matchesMD ? "center" : undefined }
                    lg={6}
                    xl={6}
                >
                    <Grid item>
                        <Typography variant="h5" style={{ marginBottom: "1.8em"}}>
                         A Self-motivated Software Engineer that is passionate about building innovative apps 
                         aimed at improving and simplifying life. 
                        </Typography>
                        <Typography variant="h5" >
                         I strongly believe in the power of the Web, 
                         very passionate about technology and have an intense desire to learn how to improve 
                         the webs core functionality, and to also be involved in its future development.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    direction={matchesMD ? "column" : "row"}
                    justify="center"
                    alignItems={ matchesMD ? "center" : undefined }
                    lg={6}
                    xl={6}
                >
                    <Grid item>
                        <Typography variant="h5" style={{ marginBottom: "1.8em",  marginTop:  matchesSM ? "1.8em" : undefined }}>
                          When im not writing code, i am either playing Multiplayer games with friends or reading articles on how to improve as a person. I blog about Code too and im a big sports fan.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

              </Grid>
           </Grid>
         </Grid>
    </Grid>
    </Grid>

  );
}

