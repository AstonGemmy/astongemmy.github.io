_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(s.default.useContext(n.AmpStateContext))};var a,s=(a=r("q1tI"))&&a.__esModule?a:{default:a},n=r("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,a=e.hybrid,s=void 0!==a&&a,n=e.hasQuery,c=void 0!==n&&n;return r||s&&c}},"7W2i":function(e,t,r){var a=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var n=a?Object.getOwnPropertyDescriptor(e,s):null;n&&(n.get||n.set)?Object.defineProperty(r,s,n):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),n=(a=r("Xuae"))&&a.__esModule?a:{default:a},c=r("lwAK"),i=r("FYa8"),l=r("/0+H");function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var r=s.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(u,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,a={};return function(s){var n=!0,c=!1;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){c=!0;var i=s.key.slice(s.key.indexOf("$")+1);e.has(i)?n=!1:e.add(i)}switch(s.type){case"title":case"base":t.has(s.type)?n=!1:t.add(s.type);break;case"meta":for(var l=0,o=m.length;l<o;l++){var d=m[l];if(s.props.hasOwnProperty(d))if("charSet"===d)r.has(d)?n=!1:r.add(d);else{var u=s.props[d],f=a[d]||new Set;"name"===d&&c||!f.has(u)?(f.add(u),a[d]=f):n=!1}}}return n}}()).reverse().map((function(e,t){var r=e.key||t;return s.default.cloneElement(e,{key:r})}))}function b(e){var t=e.children,r=(0,s.useContext)(c.AmpStateContext),a=(0,s.useContext)(i.HeadManagerContext);return s.default.createElement(n.default,{reduceComponentsToState:f,headManager:a,inAmpMode:(0,l.isInAmpMode)(r)},t)}b.rewind=function(){};var x=b;t.default=x},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,r){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var s=((a=r("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=s},Ijbi:function(e,t,r){var a=r("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,r){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},RIqP:function(e,t,r){var a=r("Ijbi"),s=r("EbDI"),n=r("ZhPi"),c=r("Bnag");e.exports=function(e){return a(e)||s(e)||n(e)||c()}},RNiq:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return v}));var a=r("nKUr"),s=r("g4pe"),n=r.n(s),c=r("q1tI");function i(){return Object(a.jsxs)("div",{"data-aos":"fade-up",className:"flex flex-wrap md:justify-start justify-center mb-4",children:[Object(a.jsxs)("div",{className:"cursor-pointer rounded-full bg-blue-400 pr-6 my-1 md:my-2",children:[Object(a.jsx)("i",{className:"fa fa-check rounded-full p-2 mr-2 bg-blue-400 shadow"}),"ReactJs"]}),Object(a.jsxs)("div",{className:"cursor-pointer rounded-full bg-green-500 pr-6 ml-2 md:ml-4 my-1 md:my-2",children:[Object(a.jsx)("i",{className:"fa fa-check rounded-full p-2 mr-2 bg-green-500 shadow"}),"VueJs"]}),Object(a.jsxs)("div",{className:"cursor-pointer rounded-full bg-green-800 pr-6 ml-2 md:ml-4 my-1 md:my-2",children:[Object(a.jsx)("i",{className:"fa fa-check rounded-full p-2 mr-2 bg-green-800 shadow"}),"NodeJs"]}),Object(a.jsxs)("div",{className:"cursor-pointer rounded-full bg-yellow-500 pr-6 ml-2 md:ml-4 my-1 md:my-2",children:[Object(a.jsx)("i",{className:"fa fa-check rounded-full p-2 mr-2 bg-yellow-500 shadow"}),"ExpressJs"]}),Object(a.jsxs)("div",{className:"cursor-pointer rounded-full bg-green-600 pr-6 ml-2 md:ml-4 my-1 md:my-2",children:[Object(a.jsx)("i",{className:"fa fa-check rounded-full p-2 mr-2 bg-green-600 shadow"}),"MongoDB"]}),Object(a.jsxs)("div",{className:"cursor-pointer rounded-full bg-red-500 pr-6 ml-2 md:ml-4 my-1 md:my-2",children:[Object(a.jsx)("i",{className:"fa fa-check rounded-full p-2 mr-2 bg-red-500 shadow"}),"Laravel"]}),Object(a.jsxs)("div",{className:"cursor-pointer rounded-full bg-purple-500 pr-6 ml-2 md:ml-4 my-1 md:my-2",children:[Object(a.jsx)("i",{className:"fa fa-check rounded-full p-2 mr-2 bg-purple-500 shadow"}),"MySQL"]}),Object(a.jsxs)("div",{className:"cursor-pointer rounded-full bg-yellow-600 pr-6 ml-2 md:ml-0 my-1 md:my-2",children:[Object(a.jsx)("i",{className:"fa fa-check rounded-full p-2 mr-2 bg-yellow-600 shadow"}),"JQUERY"]})]})}function l(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{"data-aos":"zoom-in-left",className:"flex flex-wrap justify-between md:justify-start px-4 md:px-0",children:[Object(a.jsx)("a",{className:"flex justify-center items-center w-8 h-8 text-white text-xl md:mr-4 bg-blue-500 rounded-full",href:"Https://facebook.com/astongemmy",children:Object(a.jsx)("i",{className:"fab fa-facebook-f"})}),Object(a.jsx)("a",{className:"flex justify-center items-center w-8 h-8 text-white text-xl md:mr-4 bg-red-400 rounded-full",href:"mailto:astongemmy@gmail.com",children:Object(a.jsx)("i",{className:"fa fa-at"})}),Object(a.jsx)("a",{className:"flex justify-center items-center w-8 h-8 text-black text-xl md:mr-4 bg-white rounded-full",href:"https://www.github.com/astongemmy",children:Object(a.jsx)("i",{className:"fab fa-github"})}),Object(a.jsx)("a",{className:"flex justify-center items-center w-8 h-8 text-white text-xl md:mr-4 bg-blue-400 rounded-full",href:"Https://twitter.com/astongemmy",children:Object(a.jsx)("i",{className:"fab fa-twitter"})}),Object(a.jsx)("a",{className:"flex justify-center items-center w-8 h-8 text-white text-xl md:mr-4 bg-blue-700 rounded-full",href:"https://www.linkedin.com/in/astongemmy/",children:Object(a.jsx)("i",{className:"fab fa-linkedin"})})]}),Object(a.jsx)("div",{"data-aos":"slide-up",className:"mt-2 md:text-2xl mb-6",children:"Engineer | Web Developer | Consultatant | Instructor"})]})}function o(){return Object(a.jsxs)("div",{className:"px-4 md:px-0 text-center md:text-left text-white text-lg",children:[Object(a.jsx)(l,{}),Object(a.jsx)(i,{})]})}function d(){return Object(a.jsx)("h1",{"data-aos":"slide-down",className:"font-bold py-4 md:py-10 px-4 md:px-0 text-center md:text-left uppercase animated animator text-white text-2xl md:text-5xl",children:"Uwakmfon Akpan"})}function u(){return Object(a.jsx)("div",{"data-aos":"slide-right",className:"flex justify-center items-center p-2 w-52 h-52 mx-auto mt-32 mb-8 md:m-4 overflow-hidden",children:Object(a.jsx)("img",{src:"/images/profile photos/astongemmy.png",className:"rounded-full ring-4 ring-white p-2",alt:"Aston Gemmy Photo"})})}function m(){return Object(a.jsx)("div",{className:"relative bg-main bg-no-repeat bg-cover bg-top w-full min-h-320",children:Object(a.jsx)("div",{className:"bg-gradient-to-b from-red-900 to-transparent p-2 md:py-16 md:px-8 lg:px-32",children:Object(a.jsxs)("div",{className:"flex flex-col md:flex-row w-full",children:[Object(a.jsx)(u,{}),Object(a.jsxs)("div",{className:"md:pl-20",children:[Object(a.jsx)(d,{}),Object(a.jsx)(o,{})]})]})})})}function f(){return Object(a.jsxs)("footer",{className:"text-center py-8",children:["Copywriter ",Object(a.jsx)("span",{className:"text-pink-800",children:"@astongemmy"})," ",(new Date).getFullYear()]})}function b(e){return Object(a.jsx)("a",{className:"whitespace-nowrap mx-2 px-4 md:px-0 md:mx-0 text-gray-500 border-b-4 border-gray-200 transition-all duration-700",href:"#".concat(e.href),children:e.text})}function x(){var e={scrollToView:function(e){e.forEach((function(e){e.addEventListener("click",(function(e){var t=this.getAttribute("href"),r=document.querySelector(t).offsetTop;document.documentElement.scrollTo({top:r-60,behavior:"smooth"}),e.preventDefault()}))}))}}.scrollToView,t=function(){var e=Object(c.useState)(!1),t=e[0],r=e[1];return{scrollers:t,displayScrollers:function(e){e.scrollWidth>e.clientWidth?r(!0):r(!1)}}}(),r=t.scrollers,s=t.displayScrollers,n={scrollLeft:function(e){document.querySelector("#".concat(e)).scrollBy({left:200,behavior:"smooth"})},scrollRight:function(e){document.querySelector("#".concat(e)).scrollBy({left:-200,behavior:"smooth"})}},i=n.scrollLeft,l=n.scrollRight;Object(c.useEffect)((function(){var t=document.querySelectorAll("#navbar_links_wrapper a"),r=document.querySelector("#navbar_links");e(t),s(r)}));return Object(a.jsxs)("div",{className:"sticky top-0 flex w-full py-3 items-center bg-white z-10 shadow",children:[r&&Object(a.jsx)("div",{onClick:function(){return i("navbar_links")},className:"absolute left-2 bg-white shadow text-theme rounded-full flex justify-center items-center w-12 h-12",children:Object(a.jsx)("i",{className:"fa fa-arrow-left"})}),r&&Object(a.jsx)("div",{onClick:function(){return l("navbar_links")},className:"absolute right-2 bg-white shadow text-theme rounded-full flex justify-center items-center w-12 h-12",children:Object(a.jsx)("i",{className:"fa fa-arrow-right"})}),Object(a.jsx)("div",{id:"navbar_links",className:"invisible-scrollbar flex items-center overflow-x-auto w-4/5 md:w-6/12 mx-auto",children:Object(a.jsx)("div",{id:"navbar_links_wrapper",className:"flex flex-grow justify-between items-center px-4 mx-auto",children:[{text:"About",href:"about"},{text:"Proficiency",href:"proficiency"},{text:"Projects",href:"projects"},{text:"Clients",href:"clients"}].map((function(e){return Object(a.jsx)(b,{text:e.text,href:e.href},e.text)}))})})]})}function j(e){return Object(a.jsxs)("div",{"data-aos":"fade-left",className:"flex flex-wrap justify-center px-4 py-4 md:px-0",children:[e.socialMedia.facebook&&Object(a.jsx)("a",{className:"flex justify-center items-center shadow w-8 h-8 text-white text-xl bg-blue-500 rounded-full",href:"https://facebook.com/".concat(e.socialMedia.facebook),children:Object(a.jsx)("i",{className:"fab fa-facebook-f"})}),e.socialMedia.email&&Object(a.jsx)("a",{className:"flex justify-center items-center shadow w-8 h-8 text-white text-xl ml-2 bg-red-400 rounded-full",href:"mailto:".concat(e.socialMedia.email),children:Object(a.jsx)("i",{className:"fa fa-at"})}),e.socialMedia.github&&Object(a.jsx)("a",{className:"flex justify-center items-center shadow w-8 h-8 text-black text-xl ml-2 bg-white rounded-full",href:"https://www.github.com/".concat(e.socialMedia.github),children:Object(a.jsx)("i",{className:"fab fa-github"})}),e.socialMedia.twitter&&Object(a.jsx)("a",{className:"flex justify-center items-center shadow w-8 h-8 text-white text-xl ml-2 bg-blue-400 rounded-full",href:"https://twitter.com/".concat(e.socialMedia.twitter),children:Object(a.jsx)("i",{className:"fab fa-twitter"})}),e.socialMedia.linkedin&&Object(a.jsx)("a",{className:"flex justify-center items-center shadow w-8 h-8 text-white text-xl ml-2 bg-blue-700 rounded-full",href:"https://www.linkedin.com/in/".concat(e.socialMedia.linkedin),children:Object(a.jsx)("i",{className:"fab fa-linkedin"})}),e.socialMedia.instagram&&Object(a.jsx)("a",{className:"flex justify-center items-center shadow w-8 h-8 text-white text-xl ml-2 bg-pink-500 rounded-full",href:"https://www.instagram.com/".concat(e.socialMedia.instagram),children:Object(a.jsx)("i",{className:"fab fa-instagram"})})]})}function h(){return Object(a.jsxs)("div",{id:"about","data-aos":"fade-up",className:"portfolio-section flex flex-col md:flex-row relative mt-8",children:[Object(a.jsxs)("div",{className:"w-full md:w-3/5 lg:w-4/5 p-4 md:p-8",children:[Object(a.jsx)("h1",{className:"text-4xl text-black mb-4",children:"About"}),Object(a.jsxs)("div",{"data-aos":"",className:"",children:["Aston Gemmy is an astute web developer who has been creating amazing web presence for numerous brands over the years.",Object(a.jsx)("br",{}),"As a professional in his field, he takes out time to discuss in details with clients about their project in order to create interactive websites with high friendly user experience that is very easy to navigate."]})]}),Object(a.jsxs)("div",{className:"w-full md:w-2/5 lg:w-1/5 p-4 text-center",children:[Object(a.jsx)("h2",{className:"",children:"Meet Aston on Social Media"}),Object(a.jsx)(j,{socialMedia:{facebook:"astongemmy",email:"astongemmy@gmail.com",github:"astongemmy",twitter:"astongemmy",linkedin:"astongemmy"}})]})]})}function p(){return Object(a.jsxs)("div",{id:"proficiency","data-aos":"fade-up",className:"portfolio-section flex flex-col md:flex-row relative mt-8",children:[Object(a.jsxs)("div",{className:"w-full md:w-3/5 lg:w-4/5 p-4 md:p-8",children:[Object(a.jsx)("h1",{className:"text-4xl text-black mb-4",children:"Proficiency"}),Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)("h2",{children:"Level of skills acquired"}),"As a front end and back end developer, Mr. Aston specializes on conception, mockup and further development of front end designs and backend functionalities for both web pages and web applications. High end skills in CSS3, HTML5, JAVASCRIPT, PHP, MYSQL and JQUERY are what makes him sought after in his niche."]})]}),Object(a.jsxs)("div",{className:"w-full md:w-2/5 lg:w-1/5 p-4 text-center",children:[Object(a.jsx)("h2",{className:"inline-block bg-black py-2 px-4 text-white",children:"Python Developer"}),Object(a.jsxs)("div",{className:"relative py-4",children:[Object(a.jsx)("img",{"data-aos":"zoom-in-left",src:"images/advertisement/services/jide-ilori-gravatar.jpg",alt:"Jide Ilori",className:"border-b-4 border-gray-200 p-2 rounded-full w-24 h-24 mx-auto",width:"100%"}),Object(a.jsx)("div",{className:"text-xl mt-2",children:" Oluwaseun Ilori "}),Object(a.jsx)("div",{className:"text-center mt-3",children:"Computer vision ||  Web-scraping || Django || etc."}),Object(a.jsx)(j,{socialMedia:{facebook:"oluwaseun.ilori",email:"Jideilori77@gmail.com",twitter:"jide_ilori",linkedin:"oluwaseun-ilori"}})]})]})]})}function g(){return Object(a.jsxs)("div",{id:"clients","data-aos":"fade-up",className:"portfolio-section flex flex-col md:flex-row relative mt-8",children:[Object(a.jsxs)("div",{className:"w-full md:w-3/5 lg:w-4/5 p-4 md:p-8",children:[Object(a.jsx)("h1",{className:"text-4xl text-black mb-4",children:"Clients"}),Object(a.jsxs)("div",{className:"grid grid-flow-rows grid-cols-1 md:grid-cols-3 gap-4 my-8",children:[Object(a.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"500",className:"bg-gray-200 border-gray-200 border-2 pt-2 rounded-lg overflow-hidden",children:[Object(a.jsx)("img",{src:"images/clients/vxTerminal.png",className:"mx-auto mb-2 h-16",alt:"vxTerminal"}),Object(a.jsx)("div",{className:"px-4 py-2 text-center bg-white text-red-400",children:"vXTerminal"})]}),Object(a.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"600",className:"bg-gray-200 border-gray-200 border-2 pt-2 rounded-lg overflow-hidden",children:[Object(a.jsx)("img",{src:"images/clients/sureTP.png",className:"mx-auto mb-2 h-16",alt:"SureTP"}),Object(a.jsx)("div",{className:"px-4 py-2 text-center bg-white text-blue-500",children:"SureTP"})]}),Object(a.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"700",className:"bg-gray-200 border-gray-200 border-2 pt-2 rounded-lg overflow-hidden",children:[Object(a.jsx)("img",{src:"images/clients/brand-amigo.png",className:"mx-auto mb-2 h-16",alt:"Brand Amigo"}),Object(a.jsx)("div",{className:"px-4 py-2 text-center bg-white text-pink-800",children:"Brand Amigo"})]}),Object(a.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"800",className:"bg-gray-200 border-gray-200 border-2 pt-2 rounded-lg overflow-hidden",children:[Object(a.jsx)("img",{src:"images/clients/coretell.png",className:"mx-auto mb-2 h-16",alt:"Coretell"}),Object(a.jsx)("div",{className:"px-4 py-2 text-center bg-white text-green-600",children:"CoreTell"})]})]})]}),Object(a.jsxs)("div",{className:"w-full md:w-2/5 lg:w-1/5 p-4 text-center",children:[Object(a.jsx)("h2",{className:"inline-block bg-black py-2 px-4 text-white",children:"Copywriter"}),Object(a.jsxs)("div",{className:"relative py-4",children:[Object(a.jsx)("img",{"data-aos":"zoom-in-left",src:"images/advertisement/services/jeanecopywriter-gravatar.jpg",alt:"Jeanecopywriter",className:"border-b-4 border-gray-200 p-2 rounded-full w-24 h-24 mx-auto",width:"100%"}),Object(a.jsx)("div",{className:"text-xl mt-2",children:" Jeanecopywriter "}),Object(a.jsxs)("div",{className:"text-center mt-3",children:["A seasoned copywriter there to add value to your works. Clicking the link below might be just about the best decision you've made in a while.",Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://www.fiverr.com/jeanecopywriter?up_rollout=true",children:"Visit "})," for all your copy/content gig or send a mail."]}),Object(a.jsx)(j,{socialMedia:{email:"gillgreg314@gmail.com"}})]})]})]})}function w(){return Object(a.jsxs)("div",{id:"projects","data-aos":"fade-up",className:"portfolio-section flex flex-col md:flex-row relative mt-8",children:[Object(a.jsxs)("div",{className:"w-full md:w-3/5 lg:w-4/5 p-4 md:p-8",children:[Object(a.jsx)("h1",{className:"text-4xl text-black mb-4",children:"Projects"}),Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)("p",{className:"mb-8",children:"Amongst some of his projects include Vxterminal, SureTp, CoreTell, Brand Amigo and many more."}),Object(a.jsx)("h3",{className:"text-xl text-black",children:"Projects curently in progress"}),Object(a.jsxs)("div",{className:"grid grid-flow-rows grid-cols-1 md:grid-cols-2 gap-4 my-8",children:[Object(a.jsxs)("div",{"data-aos":"fade-in","data-aos-duration":"500",className:"project relative overflow-hidden h-64 bg-400",children:[Object(a.jsx)("img",{src:"images/projects/recent/vxTerminal.png",className:"h-full",width:"100%",alt:"vxTerminal"}),Object(a.jsx)("div",{className:"description transition-all duration-700 absolute -bottom-full left-0 px-8 flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-75",children:Object(a.jsxs)("div",{className:"relative mx-auto text-center",children:[Object(a.jsx)("h1",{className:"text-center text-xl text-white",children:Object(a.jsx)("strong",{children:"vxTerminal"})}),Object(a.jsx)("p",{className:"text-center text-white",children:"A powerful business merchants search engine for the 21st century"})]})})]}),Object(a.jsxs)("div",{"data-aos":"fade-in","data-aos-duration":"600",className:"project relative overflow-hidden h-64 bg-400",children:[Object(a.jsx)("img",{src:"images/projects/recent/sureTP.png",className:"",alt:"SureTP"}),Object(a.jsx)("div",{className:"description transition-all duration-700 absolute -bottom-full left-0 px-8 flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-75",children:Object(a.jsxs)("div",{className:"relative mx-auto text-center",children:[Object(a.jsx)("h1",{className:"text-center text-xl text-white",children:Object(a.jsx)("strong",{children:"SureTP"})}),Object(a.jsx)("p",{className:"text-center text-white",children:"A commuter-freindly transportation system for pinging ride across cities"})]})})]})]}),Object(a.jsx)("h3",{className:"text-xl text-black",children:"Most Recent projects"}),Object(a.jsxs)("div",{className:"grid grid-flow-rows grid-cols-1 md:grid-cols-2 gap-4 my-8",children:[Object(a.jsxs)("div",{"data-aos":"fade-in","data-aos-duration":"700",className:"project relative overflow-hidden h-64 bg-400",children:[Object(a.jsx)("img",{src:"images/projects/recent/coretell.png",className:"h-full",width:"100%",alt:"Coretell"}),Object(a.jsx)("div",{className:"description transition-all duration-700 absolute -bottom-full left-0 px-8 flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-75",children:Object(a.jsxs)("div",{className:"relative mx-auto text-center",children:[Object(a.jsx)("h1",{className:"text-center text-xl text-white",children:Object(a.jsx)("strong",{children:"CoreTell"})}),Object(a.jsx)("p",{className:"text-center text-white",children:"A new age blogging platform for latest tech updates."}),Object(a.jsx)("a",{href:"https://coretell.blogspot.com",className:"inline-block mt-4 border-4 text-white rounded-full px-4 py-2",children:"Visit Site"})]})})]}),Object(a.jsxs)("div",{"data-aos":"fade-in","data-aos-duration":"800",className:"project relative overflow-hidden h-64 bg-400",children:[Object(a.jsx)("img",{src:"images/projects/recent/brand-amigo.png",className:"",alt:"Brand Amigo"}),Object(a.jsx)("div",{className:"description transition-all duration-700 absolute -bottom-full left-0 px-8 flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-75",children:Object(a.jsxs)("div",{className:"relative mx-auto text-center",children:[Object(a.jsx)("h1",{className:"text-center text-xl text-white",children:Object(a.jsx)("strong",{children:"Brand Amigo"})}),Object(a.jsx)("p",{className:"text-center text-white",children:"An inspirational / Motivational blogging platform."}),Object(a.jsx)("a",{href:"https://brandamigo.wordpress.com",className:"inline-block mt-4 border-4 text-white rounded-full px-4 py-2",children:"See Project"})]})})]}),Object(a.jsxs)("div",{"data-aos":"fade-in","data-aos-duration":"900",className:"project relative overflow-hidden h-64 bg-400",children:[Object(a.jsx)("img",{src:"images/projects/recent/career-strive.png",className:"",alt:"Career Strive"}),Object(a.jsx)("div",{className:"description transition-all duration-700 absolute -bottom-full left-0 px-8 flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-75",children:Object(a.jsxs)("div",{className:"relative mx-auto text-center",children:[Object(a.jsx)("h1",{className:"text-center text-xl text-white",children:Object(a.jsx)("strong",{children:"Career Strive"})}),Object(a.jsx)("p",{className:"text-center text-white",children:"A computer based testing and selection system for employment."})]})})]})]})]})]}),Object(a.jsxs)("div",{className:"w-full md:w-2/5 lg:w-1/5 p-4 text-center",children:[Object(a.jsx)("h2",{className:"inline-block bg-black py-2 px-4 text-white",children:"Hardware Programmer"}),Object(a.jsxs)("div",{className:"relative py-4",children:[Object(a.jsx)("img",{"data-aos":"zoom-in-left",src:"images/advertisement/services/banny-anderson-gravatar.jpg",alt:"Banny Anderson",className:"border-b-4 border-gray-200 p-2 rounded-full w-24 h-24 mx-auto",width:"100%"}),Object(a.jsx)("div",{className:"text-xl mt-2",children:" Banny Anderson "}),Object(a.jsx)("div",{className:"text-center mt-3",children:"Graphics Designer || Hardware Programmer."}),Object(a.jsx)(j,{socialMedia:{facebook:"mstgen2",email:"andersonbanny@gmail.com",instagram:"andy.banny",linkedin:"banny-anderson-599310163"}})]})]})]})}function v(){var e={toggleProjectOverview:function(e,t){e.forEach((function(e){e.addEventListener("mouseenter",(function(){t.forEach((function(e){e.classList.add("-bottom-full")})),e.querySelector(".description").classList.remove("-bottom-full"),e.querySelector(".description").classList.add("bottom-0")})),e.addEventListener("mouseleave",(function(){e.querySelector(".description").classList.add("-bottom-full")}))}))}}.toggleProjectOverview;return Object(c.useEffect)((function(){var t=document.querySelectorAll(".project"),r=document.querySelectorAll(".project .description");!function(e){var t=new IntersectionObserver((function(e){var t=document.querySelector('a[href="#'.concat(e[0].target.id,'"]'));1==e[0].isIntersecting?t.classList.add("border-gray-400"):t.classList.remove("border-gray-400")}),{threshold:[.3]});e.forEach((function(e){return t.observe(e)}))}(document.querySelectorAll(".portfolio-section")),e(t,r)})),Object(a.jsxs)("div",{children:[Object(a.jsxs)(n.a,{children:[Object(a.jsx)("meta",{name:"viewport",content:"width=device-width, minimum-scale=1, initial-scale=1"}),Object(a.jsx)("title",{children:" Portfolio | Uwakmfon Akpan "})]}),Object(a.jsxs)("main",{children:[Object(a.jsx)(m,{}),Object(a.jsx)(x,{}),Object(a.jsxs)("div",{className:"w-full xl:w-4/5 px-4 lg:px-16 xl:px-32 md:py-12 overflow-x-hidden",children:[Object(a.jsx)(h,{}),Object(a.jsx)(p,{}),Object(a.jsx)(w,{}),Object(a.jsx)(g,{}),Object(a.jsx)("span",{class:"hidden border-gray-400 -bottom-full bottom-0"})]})]}),Object(a.jsx)(f,{})]})}},SksO:function(e,t){function r(t,a){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,a)}e.exports=r},W8MJ:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}},Xuae:function(e,t,r){"use strict";var a=r("RIqP"),s=r("lwsE"),n=r("W8MJ"),c=(r("PJYZ"),r("7W2i")),i=r("a1gu"),l=r("Nsbk");function o(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=l(e);if(t){var s=l(this).constructor;r=Reflect.construct(a,arguments,s)}else r=a.apply(this,arguments);return i(this,r)}}t.__esModule=!0,t.default=void 0;var d=r("q1tI"),u=function(e){c(r,e);var t=o(r);function r(e){var n;return s(this,r),(n=t.call(this,e))._hasHeadManager=void 0,n.emitChange=function(){n._hasHeadManager&&n.props.headManager.updateHead(n.props.reduceComponentsToState(a(n.props.headManager.mountedInstances),n.props))},n._hasHeadManager=n.props.headManager&&n.props.headManager.mountedInstances,n}return n(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(d.Component);t.default=u},ZhPi:function(e,t,r){var a=r("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}},a1gu:function(e,t,r){var a=r("cDf5"),s=r("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?s(e):t}},cDf5:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},g4pe:function(e,t,r){e.exports=r("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var s=((a=r("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=s},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",0,1]]]);