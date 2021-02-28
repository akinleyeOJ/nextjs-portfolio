import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";


import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Button from "@material-ui/core/Button";
import ButtonArrow from "../src/ui/ButtonArrow";

import apartfindr from "../public/assets/apartfindr.png";
import ogstudios from "../public/assets/ogstudios.png";
import delta from "../public/assets/delta.png";
import apps from "../public/assets/apps.png";



import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  rowContainer: {
    paddingLeft: "9em",
    paddingRight: "3em",
    [theme.breakpoints.down("md")]: {
        paddingLeft: "5em",
        paddingRight: "2em"
    },
    [theme.breakpoints.down("sm")]: {
        paddingLeft: "1em",
        paddingRight: "1em"
    },
  },
  titleContainer: {
    paddingLeft: "9em",
    paddingRight: "30em",
    [theme.breakpoints.down("md")]: {
        paddingLeft: "5em",
        paddingRight: "15em"
    },
    [theme.breakpoints.down("sm")]: {
        paddingLeft: "1em",
        paddingRight: "3em",
    },
  },
  colOne: {
    boxShadow: "none",
    maxWidth: 995,
    [theme.breakpoints.down("md")]: {
        maxWidth: 795,
    },
    paddingRight: "4em",
    [theme.breakpoints.down("sm")]: {
        paddingRight: "0em",
    },
    [theme.breakpoints.down("md")]: {
        paddingLeft: "0em",
        paddingRight: "2em"
    }, 
    marginTop: "2em", 
    marginBottom: "2em", 
    transition: "transform 0.25s ease-in-out"
  },
  projectImage: {
    height: "25.875em",
    [theme.breakpoints.down("md")]: {
        height: "21em",
    },
    [theme.breakpoints.down("sm")]: {
        height: "30em",
    },
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "inherit",
    [theme.breakpoints.down("md")]: {
        backgroundPosition: "none",
    },
    [theme.breakpoints.down("sm")]: {
        backgroundPosition: "100% 50%",
    },
    borderRadius: "4px",
    transition: "transform 0.15s ease-in-out"
},
  cardHovered: {
    transform: "scale3d(1.02, 1.02, 1)"
  },
  caseStudiesMediaTwo: {
    height: 740,
    [theme.breakpoints.down("md")]: {
        height: 340,
    },
      backgroundPosition: "inherit"   
  },
  projectButton: {
    fontSize: "1.2em",
    border: "none",
    color: "#2f2f2f",
    marginTop: "1.2em",
    textTransform: "none",
    borderColor: theme.palette.common.blue,
    "&:hover": {
        textDecoration: "underline",
        backgroundColor: "#fff"
       }
},
actionArea: {
    "&:hover $focusHighlight": {
      opacity: 0,
      animation: "background 0.6s ease-in-out"
    },
    cursor: "default"
  },
  focusHighlight: {}
}))



export default function Projects(props) {
  const classes = useStyles();

  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
        
         <Grid item className={classes.titleContainer}
               style={{ marginTop: "10em"}}>
                  <Typography data-aos="fade-down" variant="h4" style={{ fontSize: "2.0625rem", height: "2.5em", marginBottom:  matchesXS ? "1.3em" : undefined}}>
                     Projects I have worked on
                  </Typography>
                  <Typography data-aos="fade-down" variant="h5">
                    I like to stay busy and always have projects to work on to help improve my skills.                     
                    Currently i am working on an app that helps stranded users connect to Auto repair shops 
                    nearest to their location without the fear of a bad service. Excited to share the progress of the app with you all. But before then, here are some of my completed projects.
                  </Typography>
         </Grid>
         <Grid item 
               className={classes.rowContainer}
               style={{ marginTop: "3em"}}
         >
           <Grid container 
                 justify={ undefined }
                 alignItems="center"
                 direction="row" 
                 
                 >
              <Grid data-aos="fade-down" item>
                   {/* row 1 */}
            <Grid container direction="column">
            <Grid container direction={"row"} className={classes.caseStudiesContainer}>
                <Grid
                    item
                    container
                    direction={matchesMD ? "column" : "row"}
                    justify="center"
                    alignItems={ matchesMD ? "center" : undefined }
                    lg={6}
                    xl={6}
                    md={6}
                >
                    <Grid item>
                        <Card  className={classes.colOne}
                         >
                            <CardActionArea 
                                 classes={{
                                    root: classes.actionArea,
                                    focusHighlight: classes.focusHighlight
                                  }} disableRipple>
                                <CardMedia
                                    className={classes.projectImage}
                                    image={apartfindr}
                                    title=""
                                />
                            </CardActionArea>
                        </Card>
                        <Grid item>
                                    <Typography variant="h4" style={{ height: "1.8em"}}>
                                        ApartFindr
                                    </Typography>
                                    <Typography variant="body2" style={{ fontSize: matchesXS ? "1.3em" : matchesSM ? "1.3em" : matchesMD ? "1.3em" : "1.2em", fontFamily: "raleway", color: "#8b8b8b",  maxWidth:  matchesMD ? "100%" : "80%" }} component="p">
                                      A responsive and dynamic WebApp built with ReactJs and Contentful for storing Data and information. <br/><br/>
                                      Tools Used: ReactJs, CSS 3, Contentful and Firebase
                                    </Typography>
                            <Button
                                className={classes.projectButton}
                                disableRipple
                            >
                                <a rel="noopener noreferrer"
                                   target="_blank"
                                   href="https://apartfindrr.netlify.app/" 
                                   style={{ marginLeft: -8.5, textDecoration: "none", color: "inherit" }}> 
                                   VIEW PROJECT 
                                </a>
                                <ButtonArrow width={15} height={15} fill="black" />
                            </Button>
                        </Grid>
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
                    md={6}
                >
                    <Grid item>
                        <Card  className={classes.colOne}>
                            <CardActionArea 
                                 classes={{
                                    root: classes.actionArea,
                                    focusHighlight: classes.focusHighlight
                                  }} disableRipple>
                                <CardMedia
                                    className={classes.projectImage}
                                    image={ogstudios}
                                    title=""
                                />
                            </CardActionArea>
                        </Card>
                        <Grid item>
                                    <Typography variant="h4" style={{ height: "1.8em"}}>
                                        Og Studios
                                    </Typography>
                                    <Typography variant="body2" style={{ fontSize: matchesXS ? "1.3em" : matchesSM ? "1.3em" : matchesMD ? "1.3em" : "1.2em", fontFamily: "raleway", color: "#8b8b8b",  maxWidth:  matchesMD ? "100%" : "80%" }} component="p">
                                        A photography webapp that uses responsive lightbox gallery plugin with jQuery and CSS grid <br/><br/>
                                        Tools Used: Javascript, HTML 5, CSS 3 and Lightbox
                                    </Typography>
                            <Button
                                className={classes.projectButton}
                                disableRipple
                            >
                                <a rel="noopener noreferrer"
                                   target="_blank"
                                   href="https://ogstudios.netlify.app/" 
                                   style={{ marginLeft: -8.5, textDecoration: "none", color: "inherit" }}> 
                                   VIEW PROJECT 
                                </a>
                                <ButtonArrow width={15} height={15} fill="black" />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
                </Grid>
                  {/* row 2 */}
            <Grid container direction="column">
            <Grid container direction={"row"} className={classes.caseStudiesContainer}>
                <Grid
                    item
                    container
                    direction={matchesMD ? "column" : "row"}
                    justify="center"
                    alignItems={ matchesMD ? "center" : undefined }
                    lg={6}
                    xl={6}
                    md={6}
                >
                    <Grid item>
                        <Card  className={classes.colOne}
                         >
                            <CardActionArea 
                                 classes={{
                                    root: classes.actionArea,
                                    focusHighlight: classes.focusHighlight
                                  }} disableRipple>
                                <CardMedia
                                    className={classes.projectImage}
                                    image={delta}
                                    title=""
                                />
                            </CardActionArea>
                        </Card>
                        <Grid item>
                        <Typography variant="h4" style={{ height: "1.8em"}}>
                                        Delta Kitchen
                                    </Typography>
                                    <Typography variant="body2" style={{ fontSize: matchesXS ? "1.3em" : matchesSM ? "1.3em" : matchesMD ? "1.3em" : "1.2em", fontFamily: "raleway", color: "#8b8b8b",  maxWidth:  matchesMD ? "100%" : "80%" }} component="p">
                                    A One page resturant app. Built With Pure Html, Css 3 and Vanila JavaScript and netlify for hosting. <br/> <br/>Tools Used:
                                    Javascript, HTML 5, CSS 3 and Lightbox
                                    </Typography> 
                            <Button
                                className={classes.projectButton}
                                disableRipple
                            >
                                <a rel="noopener noreferrer"
                                   target="_blank"
                                   href="http://obscene-afterthought.surge.sh/#home" 
                                   style={{ marginLeft: -8.5, textDecoration: "none", color: "inherit" }}> 
                                   VIEW PROJECT 
                                </a>
                                <ButtonArrow width={15} height={15} fill="black" />
                            </Button>
                        </Grid>
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
                    md={6}
                >
                    <Grid item>
                        <Card  className={classes.colOne}>
                            <CardActionArea 
                                 classes={{
                                    root: classes.actionArea,
                                    focusHighlight: classes.focusHighlight
                                  }} disableRipple>
                                <CardMedia
                                    className={classes.projectImage}
                                    image={apps}
                                    title=""
                                />
                            </CardActionArea>
                        </Card>
                        <Grid item>
                                    <Typography variant="h4" style={{ height: "1.8em"}}>
                                    Native Apps
                                    </Typography>
                                    <Typography variant="body2" style={{ fontSize: matchesXS ? "1.3em" : matchesSM ? "1.3em" : matchesMD ? "1.3em" : "1.2em", fontFamily: "raleway", color: "#8b8b8b",  maxWidth:  matchesMD ? "100%" : "80%" }} component="p">
                                        Due to my knowledge of React and Javascript ES6, i have been able to seemlessly pick up mobile development, using React Native and building innovative Android and IOS applications.
                                    </Typography>
                            <Button
                                className={classes.projectButton}
                                disableRipple
                            >
                                <a rel="noopener noreferrer"
                                   target="_blank"
                                   href="https://github.com/akinleyeoj/" 
                                   style={{ marginLeft: -8.5, textDecoration: "none", color: "inherit" }}> 
                                   VIEW ON GITHUB 
                                </a>
                                <ButtonArrow width={15} height={15} fill="black" />
                            </Button>
                        </Grid>
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

