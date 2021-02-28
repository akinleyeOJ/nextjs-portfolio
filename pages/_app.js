import React, {useEffect, useState} from 'react';
import { ThemeProvider } from "@material-ui/styles";

import Aos from "aos";
import "aos/dist/aos.css";

import theme from "../src/ui/Theme";

// import Switch from "@material-ui/core/Switch";
import Head from "next/head";

import Hero from "./hero";
import Background from "./background";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "../src/ui/Footer"


function App() {

  // const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() =>{
    Aos.init({ duration: 1000})
  }, []);

  return (
    
    <ThemeProvider theme={theme}>
       <Head>
        <title key="title">Akinleye Timmy - Frontend Developer - frontendtim</title>
        <meta
          name="description"
          key="description"
          content="A new version of my portfolio page to show my work and progress as a software engineer"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Arc Development"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="arc.com" />
        <link rel="canonical" key="canonical" href="arc.com" />
      </Head>
      {/* <div>
        <Switch />
      </div> */}
    <Hero/>
    <Background/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/> 
    {/*     
    icons at the top somewhere
    darkmode 
    */}
    </ThemeProvider>
  );
}

export default App;
