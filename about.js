(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{34:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),r=c(o(1)),a=c(o(42)),i=c(o(58)),l=o(41);function c(e){return e&&e.__esModule?e:{default:e}}var s=c(o(39)).default.home,u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"render",value:function(){return r.default.createElement("div",{className:"pt-content-card__about-container flex flex-dc"},r.default.createElement(a.default,{icon:"account",title:s.about}),r.default.createElement(i.default,{profile:l.profile}))}}]),t}(r.default.PureComponent);t.default=u},39:function(e){e.exports=JSON.parse('{"404":{"back_404":"Go home","text":"Sorry, I can\'t find the page you\'re looking for...","button_text":"Do you want help to return home?"},"home":{"about":"About me","about_alt":"About","work":"My Work","work_alt":"Work","contact":"Contact me","contact_alt":"Contact"},"about":{"find_me":"You\'ll find me on:"},"work":{"no_projects":"Whoops! There\'s nothing here yet!","categories":"Categories","category_all":"All","website":"Visit Website","source":"Source Code"},"contact":{"toast":{"close":"Close"},"form":{"name":"What\'s your name?","email":"What\'s your email?","message":"Please, explain yourself:","validation":{"invalid_name":"Invalid name","invalid_email":"Invalid email","invalid_message":"Invalid message","invalid_grecaptcha":"Invalid gRecaptchaResponse","server_error":"Server returned an invalid response","conection_error":"Connection Error","success":"Message sent successfully"}},"loading":"Loading","send":"Send","sending":"Sending"},"misc":{"back":"Go back"}}')},40:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o(1),i=(n=a)&&n.__esModule?n:{default:n};var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props.iconColor?{fill:this.props.iconColor}:null;return i.default.createElement("svg",{style:e,viewBox:"0 0 24 24"},i.default.createElement("use",{xlinkHref:"assets/icons.svg#"+this.props.iconName}))}}]),t}(i.default.PureComponent);t.default=l},41:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.profile={fullName:"Amanda Trang",description:"SOFTWARE & EMBEDDED DEVELOPER",avatarPath:"me.png",about:{title:"Amanda Trang",description:"I'm currently an M.Eng student at Cornell Tech studying Computer Science. My background is in Electrical and Computer Engineering at Cornell University with a Game Design minor. My interests span hardware and robotics, VR/AR, game development, and generally how technology interacts with the world. \n    \n    In my spare time, I enjoy listening to and making music, playing and making video games, falling off my skateboard, and taking low-quality pictures of dogs.",findMeOn:[{iconName:"location",text:"New York, NY",url:"",hoverColor:"#546e7a"},{iconName:"github",text:"GitHub",url:"https://github.com/at669",hoverColor:"#1da1f2"},{iconName:"email",text:"amanda.q.trang@gmail.com",url:"mailto://amanda.q.trang@gmail.com",hoverColor:"#546e7a"},{iconName:"account-star",text:"LinkedIn",url:"https://www.linkedin.com/in/amandatrang/",hoverColor:"#e9641c"}]},social:[{iconName:"account-star",url:"https://www.linkedin.com/in/amandatrang/",text:"I'm on LinkedIn",hoverColor:"#0088cc"},{iconName:"github",url:"https://github.com/at669",text:"I'm on Github",hoverColor:"#000"},{iconName:"email",url:"mailto:amanda.q.trang@gmail.com",text:"Send me an email",hoverColor:"#000"}]},t.projects=[{title:"Shujinkou",img:"https://www.ricegames.net/press/images/logo.png",description:"An in-development story-driven Japanese language-learning action game.",categories:["Unity","C#","game dev"],siteUrl:"http://ricegames.net/"},{title:"Let's Gogh!",img:"https://avatars0.githubusercontent.com/u/42649948?s=200&v=4",description:"An Oculus Quest app that takes users into their favorite paintings.",categories:["AR/VR","C#","Unity"],siteUrl:"https://sites.google.com/cornell.edu/cs5650projectsfall2019/g01"},{title:"Cluck Cluck Moose",img:"https://lh3.googleusercontent.com/D5OqXaqTx9I-IrAvkiqxioJsWUYjQixgQ-6cpsnJ5jASG0_BehaIJEVCjy4CVyt87D8=s360-rw",description:"An Android chicken-stacking RPS game, with lots of bad puns.",categories:["game dev","C++"],siteUrl:"https://play.google.com/store/apps/details?id=com.wingingitstudios.ccm&hl=en_US",sourceCodeUrl:"https://github.com/ZRich098/CluckCluckMoose"},{title:"City of Light",img:"https://github.com/Oliviafx/cs3152-game/blob/master/readme-art/logo.jpg?raw=true",description:"A desktop puzzle/stealth game, set in 1920s Paris.",categories:["game dev","Java"],siteUrl:"https://www.bostonfig.com/exhibitor/city-of-light/",sourceCodeUrl:"https://github.com/Oliviafx/cs3152-game"},{title:"Restore-L: Kodiak Emulator",img:"https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg",description:"A data arbiter module to manage the emulator's LiDAR read/write transactions.",categories:["FPGA","C","VHDL","Python"],siteUrl:"https://sspd.gsfc.nasa.gov/restore-L.html"},{title:"CU Solar Boat",img:"https://media.licdn.com/dms/image/C560BAQF4wmQ7gmG3Bw/company-logo_400_400/0?e=1582761600&v=beta&t=yEknwjCP44nRmMCpyRaJaLy7-5fT7pMt_DtWf_9BKEY",description:"The motor control & telemetry systems for a solar-powered speedboat.",categories:["Python","hardware"],siteUrl:"http://cusolarboat.org/"},{title:"LFO ASIC",img:"https://www.ece.cornell.edu/themes/custom/cornell/assets/img/cornell_university-seal_red.svg",description:"An ASIC module for the low-frequency oscillator in a synthesizer project.",categories:["hardware","Verilog","MATLAB"],sourceCodeUrl:"https://github.com/at669/ECE5746"},{title:"Product Studio",img:"https://cornell-tech-logos.fvcproductions.com/assets/img/logos/twisted-t/png/black.png",description:"An low-data platform that connects refugees to the gig economy.",categories:["Python"],siteUrl:"http://buildboard-10044.cornelltech.io/fall-2019/team_pages/F19-T069.html"},{title:"Security Box",img:"https://courses.ece.cornell.edu/ece5990/ECE5725_Spring2019_Projects/at669_mr2242/pics/1.jpg",description:"A security box capable of facial recognition, voice recognition, and NFC detection.",categories:["Python","hardware"],siteUrl:"https://courses.ece.cornell.edu/ece5990/ECE5725_Spring2019_Projects/at669_mr2242/index.html"}],t.formUrl="http://localhost:4000",t.ReCAPTCHAKey="6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu",t.missingProjectIcon="./assets/no-work-icon.jpg"},42:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),r=l(o(1)),a=o(12),i=l(o(40));function l(e){return e&&e.__esModule?e:{default:e}}var c=l(o(39)).default.misc,s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"render",value:function(){return r.default.createElement("div",{className:"pt-content-card__header pt-content-card__header--nav flex flex-cross-center"},r.default.createElement(a.Link,{to:"/",title:c.back},r.default.createElement("div",{className:"pt-content-card__header--nav__icon flex flex-full-center"},r.default.createElement(i.default,{iconName:"arrow-left"}))),r.default.createElement("div",{className:"pt-content-card__header--nav__title flex flex-full-center"},r.default.createElement(i.default,{iconName:this.props.icon}),r.default.createElement("h2",{className:"ta-c"},this.props.title)),this.props.handleDrawerState?r.default.createElement("button",{style:{pointerEvents:this.props.isFiltersOpen?"none":""},className:"pt-content-card__header--nav__icon flex-full-center pointer",onClick:this.props.handleDrawerState},r.default.createElement(i.default,{iconName:"filter"})):null)}}]),t}(r.default.PureComponent);t.default=s},58:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),r=l(o(1)),a=l(o(40)),i=l(o(59));function l(e){return e&&e.__esModule?e:{default:e}}var c=l(o(39)).default.about,s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"render",value:function(){var e=this.props.profile.about,t=e.findMeOn.map((function(e,t){return e.url?r.default.createElement("a",{className:"flex flex-cross-center",key:t,href:e.url,target:"_blank",title:e.url},r.default.createElement(a.default,{iconName:e.iconName,iconColor:e.hoverColor})," ",e.text):r.default.createElement("span",{className:"flex flex-cross-center",key:t},r.default.createElement(a.default,{iconName:e.iconName,iconColor:e.hoverColor})," ",e.text)}));return r.default.createElement("div",{className:"pt-content-card__body pt-content-card__body__about flex flex-full-center"},r.default.createElement("div",{className:"pt-content-card__body__about__presentation flex flex-dc flex-full-center"},r.default.createElement("img",{src:"./assets/"+this.props.profile.avatarPath,alt:this.props.profile.fullName+"'s Image"}),r.default.createElement("h1",{className:"ta-c"},(0,i.default)(e.title))),r.default.createElement("div",{className:"pt-content-card__body__about__details flex flex-dc flex-full-center"},r.default.createElement("p",null,(0,i.default)(e.description)),r.default.createElement("h3",null,c.find_me),r.default.createElement("div",{className:"pt-content-card__body__about__details__net-icons flex-sa"},t)))}}]),t}(r.default.PureComponent);t.default=s},59:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.split("\n").map((function(e,t){return a.default.createElement("span",{key:t},e,a.default.createElement("br",null))}))};var n,r=o(1),a=(n=r)&&n.__esModule?n:{default:n}}}]);