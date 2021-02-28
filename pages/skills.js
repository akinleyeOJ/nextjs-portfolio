import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles(theme => ({
  rowContainer: {
    paddingLeft: "9em",
    paddingRight: "35em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "5em",
      paddingRight: "15em"
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "2em",
      paddingRight: "3em"
    },
  },
  skillsContainer: {
      marginTop: "5em",
      paddingLeft: "9em",
      paddingRight: "5em",
      [theme.breakpoints.down("md")]: {
        paddingLeft: "6em",
        paddingRight: "3em"
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "2em",
        paddingRight: "3em"
      },
  },
  icon: {
      fontWeight: "lighter", 
      fontSize: "20px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
      }, 
      marginRight: "9px", 
      color: "#bd33a4"
  }
}))



export default function Skills() {
  const classes = useStyles();
  const theme = useTheme();

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
                  <Typography variant="h4" style={{ height: "2.5em"}}>
                     My Skills
                  </Typography>
                  <Typography variant="h5">
                    Over the last couple of years in my journey as a software engineer 
                    and through my studies, i have been able to pick up a couple of skills
                    that i believe will help me improve my productivity.
                  </Typography>
              </Grid>
           </Grid>
         </Grid>
         <div data-aos="fade-down" className={classes.skillsContainer}>
             <Grid container spacing={3}>
                 <Grid item xs={6} sm={6} md={3}>
                        <Typography variant="h5" style={{height: "2.2em", color: "#474747", fontWeight: 700}}>  
                            LANGUAGES
                        </Typography>
                        <Typography variant="h2" style={{height: "3em", color: "#474747", fontWeight: 700}}>  
                        <span className={classes.icon}>○</span>JavaScript (ES6) 
                        </Typography>
                        <Typography variant="h2" style={{height: "3em", color: "#474747", fontWeight: 700}}>  
                        <span className={classes.icon}>○</span>HTML & CSS
                        </Typography>
                        <Typography variant="h2" style={{height: "3em", color: "#474747", fontWeight: 700}}>  
                        <span className={classes.icon}>○</span>NodeJS & Express
                        </Typography>
                 </Grid>
                 <Grid item xs={6} sm={6} md={3}>
                        <Typography variant="h5" style={{height: "2.2em", color: "#474747", fontWeight: 700}}>  
                            FRAMEWORKS
                        </Typography>
                        <Typography variant="h2" style={{height: "3em", color: "#474747", fontWeight: 700}}>  
                        <span className={classes.icon}>○</span>React 
                        </Typography>
                        <Typography variant="h2" style={{height: "3em", color: "#474747", fontWeight: 700}}>  
                        <span className={classes.icon}>○</span>React Native
                        </Typography>
                        <Typography variant="h2" style={{height: "3em", color: "#474747", fontWeight: 700}}>  
                        <span className={classes.icon}>○</span>Shopify
                        </Typography>
                 </Grid>
                 <Grid item xs={6} sm={6} md={3} style={{ marginTop: matchesXS ? "0em" : "undefined"}}>
                       <Typography variant="h5" style={{height: "2.2em", color: "#474747", fontWeight: 700}}>  
                            TOOLS
                       </Typography>
                        <Typography variant="h2" style={{height: "3em", color: "#474747", fontWeight: 700}}>  
                        <span className={classes.icon}>○</span>Git & Github
                        </Typography>
                        <Typography variant="h2" style={{height: "3em", color: "#474747", fontWeight: 700}}>  
                        <span className={classes.icon}>○</span>Firebase
                        </Typography>
                        <Typography variant="h2" style={{height: "3em", color: "#474747", fontWeight: 700}}>  
                        <span className={classes.icon}>○</span>Postman
                        </Typography>
                 </Grid>
                 <Grid item xs={6} sm={6} md={3}>
                        <Typography variant="h5" style={{height: "2.2em", color: "#474747", fontWeight: 700}}>  
                            DESIGN
                        </Typography>
                        <Typography variant="h2" style={{height: "3em", color: "#474747", fontWeight: 700}}>  
                        <span className={classes.icon}>○</span>Material UI 
                        </Typography>
                        <Typography variant="h2" style={{height: "3em", color: "#474747", fontWeight: 700}}>  
                        <span className={classes.icon}>○</span>Styled Components
                        </Typography>
                        <Typography variant="h2" style={{height: "3em", color: "#474747", fontWeight: 700}}>  
                        <span className={classes.icon}>○</span>Figma
                        </Typography>
                 </Grid>
                

             </Grid>

         </div>
    </Grid>

  );
}

