module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+UYx":
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__("Bjmp");

// EXTERNAL MODULE: external "aos"
var external_aos_ = __webpack_require__("+UYx");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_);

// EXTERNAL MODULE: ./node_modules/aos/dist/aos.css
var aos = __webpack_require__("6Cl6");

// EXTERNAL MODULE: ./src/ui/Theme.js
var Theme = __webpack_require__("Hx9w");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./pages/hero.js + 1 modules
var hero = __webpack_require__("iLpc");

// EXTERNAL MODULE: ./pages/background.js
var background = __webpack_require__("T+LM");

// EXTERNAL MODULE: ./pages/skills.js
var skills = __webpack_require__("6SVQ");

// EXTERNAL MODULE: ./pages/projects.js
var projects = __webpack_require__("RHEb");

// EXTERNAL MODULE: ./pages/contact.js
var contact = __webpack_require__("ALdH");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var core_styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// CONCATENATED MODULE: ./src/ui/Footer.js







const useStyles = Object(core_styles_["makeStyles"])(theme => ({
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
      width: "5em"
    }
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-4em",
    right: "1.5em",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8em"
    }
  },
  hover: {
    "&:hover": {
      borderBottom: "2px solid black",
      transition: "transition ease-in-out 1s"
    }
  }
}));
function Footer() {
  const classes = useStyles();
  const theme = Object(core_styles_["useTheme"])();
  const matchesSM = useMediaQuery_default()(theme.breakpoints.down("sm"));
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
    container: true,
    direction: "column",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
      item: true,
      className: classes.rowContainer,
      style: {
        marginTop: "10em"
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
        container: true,
        justify: undefined,
        alignItems: "center",
        direction: "row",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
          item: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            className: classes.logo,
            alt: "logo icon",
            src: "/assets/TIM.png"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
        container: true,
        justify: "flex-end",
        spacing: 2,
        className: classes.socialContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
          children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
            className: classes.hover,
            style: {
              marginRight: "2em",
              fontSize: matchesSM ? "1em" : undefined
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              rel: "noopener noreferrer",
              target: "_blank",
              href: "https://twitter.com/frontendtim/",
              style: {
                textDecoration: "none",
                color: "inherit"
              },
              children: "TWITTER"
            })
          }), " "]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
          children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
            className: classes.hover,
            style: {
              marginRight: "2em",
              fontSize: matchesSM ? "1em" : undefined
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              rel: "noopener noreferrer",
              target: "_blank",
              href: "https://github.com/akinleyeoj/",
              style: {
                textDecoration: "none",
                color: "inherit"
              },
              children: "GITHUB"
            })
          }), " "]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
          children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
            className: classes.hover,
            style: {
              marginRight: "2em",
              fontSize: matchesSM ? "1em" : undefined
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              rel: "noopener noreferrer",
              target: "_blank",
              href: "https://linkedin.com/in/akinleyeoj/",
              style: {
                textDecoration: "none",
                color: "inherit"
              },
              children: "LINKEDIN"
            })
          }), " "]
        })]
      })]
    })
  });
}
// CONCATENATED MODULE: ./pages/_app.js






 // import Switch from "@material-ui/core/Switch";









function App() {
  // const [isDarkMode, setDarkMode] = useState(false);
  Object(external_react_["useEffect"])(() => {
    external_aos_default.a.init({
      duration: 1000
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_["ThemeProvider"], {
    theme: Theme["a" /* default */],
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Akinleye Timmy - Frontend Developer - frontendtim"
      }, "title"), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: "A new version of my portfolio page to show my work and progress as a software engineer"
      }, "description"), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:title",
        content: "Bringing West Coast Technology to the Midwest | Arc Development"
      }, "og:title"), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:url",
        content: "arc.com"
      }, "og:url"), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "canonical",
        href: "arc.com"
      }, "canonical")]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(hero["default"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(background["default"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(skills["default"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(projects["default"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(contact["default"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {})]
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "6Cl6":
/***/ (function(module, exports) {



/***/ }),

/***/ "6SVQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skills; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cPsG");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__);







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
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
    }
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
    }
  },
  icon: {
    fontWeight: "lighter",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px"
    },
    marginRight: "9px",
    color: "#bd33a4"
  }
}));
function Skills() {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  const matchesXS = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme.breakpoints.down("xs"));
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    direction: "column",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      className: classes.rowContainer,
      style: {
        marginTop: "10em"
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        justify: undefined,
        alignItems: "center",
        direction: "row",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          "data-aos": "fade-down",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h4",
            style: {
              height: "2.5em"
            },
            children: "My Skills"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h5",
            children: "Over the last couple of years in my journey as a software engineer and through my studies, i have been able to pick up a couple of skills that i believe will help me improve my productivity."
          })]
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      "data-aos": "fade-down",
      className: classes.skillsContainer,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        spacing: 3,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 6,
          sm: 6,
          md: 3,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h5",
            style: {
              height: "2.2em",
              color: "#474747",
              fontWeight: 700
            },
            children: "LANGUAGES"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h2",
            style: {
              height: "3em",
              color: "#474747",
              fontWeight: 700
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              className: classes.icon,
              children: "\u25CB"
            }), "JavaScript (ES6)"]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h2",
            style: {
              height: "3em",
              color: "#474747",
              fontWeight: 700
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              className: classes.icon,
              children: "\u25CB"
            }), "HTML & CSS"]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h2",
            style: {
              height: "3em",
              color: "#474747",
              fontWeight: 700
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              className: classes.icon,
              children: "\u25CB"
            }), "NodeJS & Express"]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 6,
          sm: 6,
          md: 3,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h5",
            style: {
              height: "2.2em",
              color: "#474747",
              fontWeight: 700
            },
            children: "FRAMEWORKS"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h2",
            style: {
              height: "3em",
              color: "#474747",
              fontWeight: 700
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              className: classes.icon,
              children: "\u25CB"
            }), "React"]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h2",
            style: {
              height: "3em",
              color: "#474747",
              fontWeight: 700
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              className: classes.icon,
              children: "\u25CB"
            }), "React Native"]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h2",
            style: {
              height: "3em",
              color: "#474747",
              fontWeight: 700
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              className: classes.icon,
              children: "\u25CB"
            }), "Shopify"]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 6,
          sm: 6,
          md: 3,
          style: {
            marginTop: matchesXS ? "0em" : "undefined"
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h5",
            style: {
              height: "2.2em",
              color: "#474747",
              fontWeight: 700
            },
            children: "TOOLS"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h2",
            style: {
              height: "3em",
              color: "#474747",
              fontWeight: 700
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              className: classes.icon,
              children: "\u25CB"
            }), "Git & Github"]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h2",
            style: {
              height: "3em",
              color: "#474747",
              fontWeight: 700
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              className: classes.icon,
              children: "\u25CB"
            }), "Firebase"]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h2",
            style: {
              height: "3em",
              color: "#474747",
              fontWeight: 700
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              className: classes.icon,
              children: "\u25CB"
            }), "Postman"]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 6,
          sm: 6,
          md: 3,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h5",
            style: {
              height: "2.2em",
              color: "#474747",
              fontWeight: 700
            },
            children: "DESIGN"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h2",
            style: {
              height: "3em",
              color: "#474747",
              fontWeight: 700
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              className: classes.icon,
              children: "\u25CB"
            }), "Material UI"]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h2",
            style: {
              height: "3em",
              color: "#474747",
              fontWeight: 700
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              className: classes.icon,
              children: "\u25CB"
            }), "Styled Components"]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h2",
            style: {
              height: "3em",
              color: "#474747",
              fontWeight: 700
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              className: classes.icon,
              children: "\u25CB"
            }), "Figma"]
          })]
        })]
      })
    })]
  });
}

/***/ }),

/***/ "8Pq5":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/apps-85361367cd3adcdfc2801b505c26d2df.png";

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "ALdH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cPsG");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_ui_ButtonArrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Gjj/");









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  rowContainer: {
    paddingLeft: "9em",
    paddingRight: "45em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "5em",
      paddingRight: "20em"
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1em",
      paddingRight: "0em"
    }
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
  }
}));
function Contact() {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  const matchesMD = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme.breakpoints.down("md"));
  const matchesSM = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme.breakpoints.down("sm"));
  const matchesXS = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme.breakpoints.down("xs"));
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    direction: "column",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      className: classes.rowContainer,
      style: {
        marginTop: "10em"
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        justify: undefined,
        alignItems: "center",
        direction: "row",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          "data-aos": "fade-down",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h4",
            style: {
              height: "2em"
            },
            children: "Reach Out"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            variant: "h5",
            style: {
              maxWidth: matchesSM ? "95%" : matchesMD ? "75%" : undefined
            },
            children: "I'm always interested in fun projects and activities, so if you are looking for a developer or you just wanna connect, feel free to buzz me."
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          "data-aos": "slide-right",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
            className: classes.contactButton,
            disableRipple: true,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
              children: [" ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                rel: "noopener noreferrer",
                target: "_blank",
                href: "mailto:akinleyeoj@gmail.com?subject=Hey%20Chief,%20wanna%20connect%20and%20create%20magic?",
                style: {
                  marginLeft: -7,
                  textDecoration: "none",
                  color: "inherit"
                },
                children: " akinleyeoj@gmail.com"
              }), " "]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_ui_ButtonArrow__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
              width: 15,
              height: 15,
              fill: "black"
            })]
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ "Bjmp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Fhrl":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/apartfindr-9642af9f96539844da6687b76d7ac0cf.png";

/***/ }),

/***/ "Gjj/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonArrow; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ButtonArrow(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    className: props.class,
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width,
    height: props.height,
    fill: props.fill,
    viewBox: "0 0 18 18",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"
    })
  });
}

/***/ }),

/***/ "Hx9w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const arcBlack = "#444452";
const arcGrey = "#8b8b8b";
const arcPurple = "#bd33a4";
/* harmony default export */ __webpack_exports__["a"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    common: {
      black: arcBlack,
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
    }
  }
}));

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "Ng9l":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/wave-beb14cd4b8e6f13f90f30c160ada8740.png";

/***/ }),

/***/ "RHEb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cPsG");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_ui_ButtonArrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Gjj/");
/* harmony import */ var _public_assets_apartfindr_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Fhrl");
/* harmony import */ var _public_assets_apartfindr_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_assets_apartfindr_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_assets_ogstudios_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("wwkx");
/* harmony import */ var _public_assets_ogstudios_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_ogstudios_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_assets_delta_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("pY7O");
/* harmony import */ var _public_assets_delta_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets_delta_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_assets_apps_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("8Pq5");
/* harmony import */ var _public_assets_apps_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_assets_apps_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("YeXC");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("lOH7");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("s051");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_14__);
















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
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
    }
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
      paddingRight: "3em"
    }
  },
  colOne: {
    boxShadow: "none",
    maxWidth: 995,
    [theme.breakpoints.down("md")]: {
      maxWidth: 795
    },
    paddingRight: "4em",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0em"
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
      height: "21em"
    },
    [theme.breakpoints.down("sm")]: {
      height: "30em"
    },
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "inherit",
    [theme.breakpoints.down("md")]: {
      backgroundPosition: "none"
    },
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "100% 50%"
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
      height: 340
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
}));
function Projects(props) {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  const matchesMD = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme.breakpoints.down("md"));
  const matchesSM = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme.breakpoints.down("sm"));
  const matchesXS = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme.breakpoints.down("xs"));
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    direction: "column",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      className: classes.titleContainer,
      style: {
        marginTop: "10em"
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        "data-aos": "fade-down",
        variant: "h4",
        style: {
          fontSize: "2.0625rem",
          height: "2.5em",
          marginBottom: matchesXS ? "1.3em" : undefined
        },
        children: "Projects I have worked on"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        "data-aos": "fade-down",
        variant: "h5",
        children: "I like to stay busy and always have projects to work on to help improve my skills. Currently i am working on an app that helps stranded users connect to Auto repair shops nearest to their location without the fear of a bad service. Excited to share the progress of the app with you all. But before then, here are some of my completed projects."
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      className: classes.rowContainer,
      style: {
        marginTop: "3em"
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        justify: undefined,
        alignItems: "center",
        direction: "row",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          "data-aos": "fade-down",
          item: true,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
            container: true,
            direction: "column",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
              container: true,
              direction: "row",
              className: classes.caseStudiesContainer,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                item: true,
                container: true,
                direction: matchesMD ? "column" : "row",
                justify: "center",
                alignItems: matchesMD ? "center" : undefined,
                lg: 6,
                xl: 6,
                md: 6,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  item: true,
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12___default.a, {
                    className: classes.colOne,
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_13___default.a, {
                      classes: {
                        root: classes.actionArea,
                        focusHighlight: classes.focusHighlight
                      },
                      disableRipple: true,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_14___default.a, {
                        className: classes.projectImage,
                        image: _public_assets_apartfindr_png__WEBPACK_IMPORTED_MODULE_8___default.a,
                        title: ""
                      })
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    item: true,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
                      variant: "h4",
                      style: {
                        height: "1.8em"
                      },
                      children: "ApartFindr"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
                      variant: "body2",
                      style: {
                        fontSize: matchesXS ? "1.3em" : matchesSM ? "1.3em" : matchesMD ? "1.3em" : "1.2em",
                        fontFamily: "raleway",
                        color: "#8b8b8b",
                        maxWidth: matchesMD ? "100%" : "80%"
                      },
                      component: "p",
                      children: ["A responsive and dynamic WebApp built with ReactJs and Contentful for storing Data and information. ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Tools Used: ReactJs, CSS 3, Contentful and Firebase"]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
                      className: classes.projectButton,
                      disableRipple: true,
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                        rel: "noopener noreferrer",
                        target: "_blank",
                        href: "https://apartfindrr.netlify.app/",
                        style: {
                          marginLeft: -8.5,
                          textDecoration: "none",
                          color: "inherit"
                        },
                        children: "VIEW PROJECT"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_ui_ButtonArrow__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
                        width: 15,
                        height: 15,
                        fill: "black"
                      })]
                    })]
                  })]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                item: true,
                container: true,
                direction: matchesMD ? "column" : "row",
                justify: "center",
                alignItems: matchesMD ? "center" : undefined,
                lg: 6,
                xl: 6,
                md: 6,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  item: true,
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12___default.a, {
                    className: classes.colOne,
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_13___default.a, {
                      classes: {
                        root: classes.actionArea,
                        focusHighlight: classes.focusHighlight
                      },
                      disableRipple: true,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_14___default.a, {
                        className: classes.projectImage,
                        image: _public_assets_ogstudios_png__WEBPACK_IMPORTED_MODULE_9___default.a,
                        title: ""
                      })
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    item: true,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
                      variant: "h4",
                      style: {
                        height: "1.8em"
                      },
                      children: "Og Studios"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
                      variant: "body2",
                      style: {
                        fontSize: matchesXS ? "1.3em" : matchesSM ? "1.3em" : matchesMD ? "1.3em" : "1.2em",
                        fontFamily: "raleway",
                        color: "#8b8b8b",
                        maxWidth: matchesMD ? "100%" : "80%"
                      },
                      component: "p",
                      children: ["A photography webapp that uses responsive lightbox gallery plugin with jQuery and CSS grid ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Tools Used: Javascript, HTML 5, CSS 3 and Lightbox"]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
                      className: classes.projectButton,
                      disableRipple: true,
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                        rel: "noopener noreferrer",
                        target: "_blank",
                        href: "https://ogstudios.netlify.app/",
                        style: {
                          marginLeft: -8.5,
                          textDecoration: "none",
                          color: "inherit"
                        },
                        children: "VIEW PROJECT"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_ui_ButtonArrow__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
                        width: 15,
                        height: 15,
                        fill: "black"
                      })]
                    })]
                  })]
                })
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
            container: true,
            direction: "column",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
              container: true,
              direction: "row",
              className: classes.caseStudiesContainer,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                item: true,
                container: true,
                direction: matchesMD ? "column" : "row",
                justify: "center",
                alignItems: matchesMD ? "center" : undefined,
                lg: 6,
                xl: 6,
                md: 6,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  item: true,
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12___default.a, {
                    className: classes.colOne,
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_13___default.a, {
                      classes: {
                        root: classes.actionArea,
                        focusHighlight: classes.focusHighlight
                      },
                      disableRipple: true,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_14___default.a, {
                        className: classes.projectImage,
                        image: _public_assets_delta_png__WEBPACK_IMPORTED_MODULE_10___default.a,
                        title: ""
                      })
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    item: true,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
                      variant: "h4",
                      style: {
                        height: "1.8em"
                      },
                      children: "Delta Kitchen"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
                      variant: "body2",
                      style: {
                        fontSize: matchesXS ? "1.3em" : matchesSM ? "1.3em" : matchesMD ? "1.3em" : "1.2em",
                        fontFamily: "raleway",
                        color: "#8b8b8b",
                        maxWidth: matchesMD ? "100%" : "80%"
                      },
                      component: "p",
                      children: ["A One page resturant app. Built With Pure Html, Css 3 and Vanila JavaScript and netlify for hosting. ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Tools Used: Javascript, HTML 5, CSS 3 and Lightbox"]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
                      className: classes.projectButton,
                      disableRipple: true,
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                        rel: "noopener noreferrer",
                        target: "_blank",
                        href: "http://obscene-afterthought.surge.sh/#home",
                        style: {
                          marginLeft: -8.5,
                          textDecoration: "none",
                          color: "inherit"
                        },
                        children: "VIEW PROJECT"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_ui_ButtonArrow__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
                        width: 15,
                        height: 15,
                        fill: "black"
                      })]
                    })]
                  })]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                item: true,
                container: true,
                direction: matchesMD ? "column" : "row",
                justify: "center",
                alignItems: matchesMD ? "center" : undefined,
                lg: 6,
                xl: 6,
                md: 6,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  item: true,
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12___default.a, {
                    className: classes.colOne,
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_13___default.a, {
                      classes: {
                        root: classes.actionArea,
                        focusHighlight: classes.focusHighlight
                      },
                      disableRipple: true,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_14___default.a, {
                        className: classes.projectImage,
                        image: _public_assets_apps_png__WEBPACK_IMPORTED_MODULE_11___default.a,
                        title: ""
                      })
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    item: true,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
                      variant: "h4",
                      style: {
                        height: "1.8em"
                      },
                      children: "Native Apps"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
                      variant: "body2",
                      style: {
                        fontSize: matchesXS ? "1.3em" : matchesSM ? "1.3em" : matchesMD ? "1.3em" : "1.2em",
                        fontFamily: "raleway",
                        color: "#8b8b8b",
                        maxWidth: matchesMD ? "100%" : "80%"
                      },
                      component: "p",
                      children: "Due to my knowledge of React and Javascript ES6, i have been able to seemlessly pick up mobile development, using React Native and building innovative Android and IOS applications."
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
                      className: classes.projectButton,
                      disableRipple: true,
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                        rel: "noopener noreferrer",
                        target: "_blank",
                        href: "https://github.com/akinleyeoj/",
                        style: {
                          marginLeft: -8.5,
                          textDecoration: "none",
                          color: "inherit"
                        },
                        children: "VIEW ON GITHUB"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_ui_ButtonArrow__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
                        width: 15,
                        height: 15,
                        fill: "black"
                      })]
                    })]
                  })]
                })
              })]
            })
          })]
        })
      })
    })]
  });
}

/***/ }),

/***/ "T+LM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Background; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cPsG");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YeXC");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("lOH7");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("s051");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__);










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  rowContainer: {
    paddingLeft: "9em",
    paddingRight: "7em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "2em",
      paddingRight: "2em"
    }
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
      maxWidth: 995
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 595
    },
    marginTop: "2em" // marginLeft: "6em",
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
      height: 400
    },
    width: "100%",
    backgroundPosition: "cover"
  },
  caseStudiesMediaTwo: {
    height: 740,
    [theme.breakpoints.down("md")]: {
      height: 340
    },
    backgroundPosition: "inherit"
  },
  actionArea: {
    "&:hover $focusHighlight": {
      opacity: 0
    }
  },
  focusHighlight: {}
}));
function Background() {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  const matchesMD = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme.breakpoints.down("md"));
  const matchesSM = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme.breakpoints.down("sm"));
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    direction: "column",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      className: classes.rowContainer,
      style: {
        marginTop: "3em"
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        justify: undefined,
        alignItems: "center",
        direction: "row",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          "data-aos": "fade-up",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
            container: true,
            direction: "column",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
              item: true,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6___default.a, {
                className: classes.colOne,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_7___default.a, {
                  classes: {
                    root: classes.actionArea,
                    focusHighlight: classes.focusHighlight
                  },
                  disableRipple: true,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8___default.a, {
                    className: classes.caseStudiesMediaOne,
                    image: "/assets/MyImg.jpg",
                    title: "MyImage"
                  })
                })
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
              "data-aos": "fade-up",
              container: true,
              direction: "row",
              className: classes.caseStudiesContainer,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                item: true,
                container: true,
                direction: matchesMD ? "column" : "row",
                justify: "center",
                alignItems: matchesMD ? "center" : undefined,
                lg: 6,
                xl: 6,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  item: true,
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
                    variant: "h5",
                    style: {
                      marginBottom: "1.8em"
                    },
                    children: "A Self-motivated Software Engineer that is passionate about building innovative apps aimed at improving and simplifying life."
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
                    variant: "h5",
                    children: "I strongly believe in the power of the Web, very passionate about technology and have an intense desire to learn how to improve the webs core functionality, and to also be involved in its future development."
                  })]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                item: true,
                container: true,
                direction: matchesMD ? "column" : "row",
                justify: "center",
                alignItems: matchesMD ? "center" : undefined,
                lg: 6,
                xl: 6,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  item: true,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
                    variant: "h5",
                    style: {
                      marginBottom: "1.8em",
                      marginTop: matchesSM ? "1.8em" : undefined
                    },
                    children: "When im not writing code, i am either playing Multiplayer games with friends or reading articles on how to improve as a person. I blog about Code too and im a big sports fan."
                  })
                })
              })]
            })]
          })
        })
      })
    })
  });
}

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "YeXC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cPsG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "iLpc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Hero; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "aos"
var external_aos_ = __webpack_require__("+UYx");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_);

// EXTERNAL MODULE: ./node_modules/aos/dist/aos.css
var aos = __webpack_require__("6Cl6");

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// CONCATENATED MODULE: ./public/assets/TIM.png
/* harmony default export */ var TIM = ("data:image/png;base64,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");
// EXTERNAL MODULE: ./public/assets/wave.png
var wave = __webpack_require__("Ng9l");
var wave_default = /*#__PURE__*/__webpack_require__.n(wave);

// CONCATENATED MODULE: ./pages/hero.js











const useStyles = Object(styles_["makeStyles"])(theme => ({
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
    marginTop: "4em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0em",
      paddingLeft: "1em"
    },
    width: "8em",
    paddingLeft: "7em"
  }
}));
function Hero() {
  const classes = useStyles();
  const theme = Object(styles_["useTheme"])();
  const matchesSM = useMediaQuery_default()(theme.breakpoints.down("sm"));
  Object(external_react_["useEffect"])(() => {
    external_aos_default.a.init({
      duration: 1000
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
    container: true,
    direction: "column",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
      item: true,
      "data-aos": "zoom-in-right",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        className: classes.logo,
        alt: "logo icon",
        src: TIM
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
      item: true,
      className: classes.rowContainer,
      style: {
        marginTop: "5em"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
        container: true,
        justify: undefined,
        alignItems: "center",
        direction: "row",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
          item: true,
          "data-aos": "fade-up",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
            item: true,
            container: true,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
              item: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
                variant: "h1",
                style: {
                  height: "2.5em",
                  fontSize: matchesSM ? "3.3em" : undefined
                },
                children: "Hi there"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
              item: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: wave_default.a,
                alt: "envelope",
                style: {
                  marginLeft: "2.5em",
                  verticalAlign: "bottom",
                  maxWidth: "4em",
                  marginTop: "0.7em"
                }
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Typography_default.a, {
            variant: "h3",
            style: {
              maxWidth: matchesSM ? "95%" : "80%"
            },
            children: ["I'm ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              style: {
                color: "#bd33a4",
                fontWeight: "bolder"
              },
              children: "Timmy"
            }), ". Web and Mobile Developer based in Bydgoszsz, Poland passionate about implimenting UI designs and simplifyling life by improving user experiences (UX)."]
          })]
        })
      })
    })]
  });
}

/***/ }),

/***/ "lOH7":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "pY7O":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/delta-4c5ead3d2b51c57094e9c434e1de2858.png";

/***/ }),

/***/ "s051":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "wwkx":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ogstudios-36a47cc43ae9cb99fdbfc907acf28896.png";

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });