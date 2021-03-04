(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{107:function(e,t,o){"use strict";o.d(t,"a",(function(){return b})),o.d(t,"b",(function(){return m}));var r=o(0),n=o.n(r);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=n.a.createContext({}),s=function(e){var t=n.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},b=function(e){var t=s(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(o),d=r,m=b["".concat(a,".").concat(d)]||b[d]||p[d]||l;return o?n.a.createElement(m,i(i({ref:t},u),{},{components:o})):n.a.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<l;u++)a[u]=o[u];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},81:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return i})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return s}));var r=o(3),n=o(7),l=(o(0),o(107)),a={id:"customize_look",title:"Customizing look",sidebar_label:"Customizing look"},i={unversionedId:"usage/customize_look",id:"usage/customize_look",isDocsHomePage:!1,title:"Customizing look",description:"Model tools:",source:"@site/docs/usage/customize_look.md",slug:"/usage/customize_look",permalink:"/docs/usage/customize_look",editUrl:"https://github.com/scioxr/scioxr.github.io/edit/master/website/docs/usage/customize_look.md",version:"current",sidebar_label:"Customizing look",sidebar:"someSidebar",previous:{title:"Manipulating objects",permalink:"/docs/usage/manipulating_objects"},next:{title:"Importing assets",permalink:"/docs/usage/importing_assets"}},c=[{value:"Model tools:",id:"model-tools",children:[{value:"Properties",id:"properties",children:[]},{value:"Scale",id:"scale",children:[]},{value:"Clone",id:"clone",children:[]},{value:"CHANGE OBJECT MODEL MATERIALS:",id:"change-object-model-materials",children:[]}]}],u={toc:c};function s(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"model-tools"},"Model tools:"),Object(l.b)("p",null,"Current tool is displayed on your right hand.\nYou can switch tools by click B (Right hand controller) button on your quest controller.\nYou can use tools with A (Right hand controller) and X (Left hand controller) buttons on your quest controllers."),Object(l.b)("h3",{id:"properties"},"Properties"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You can use properties tool to change properties of object, set parent, set textures, code and so on.")),Object(l.b)("p",null,"To select the tool:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},'Press B button on your quest controller, untill word "properties" is written on your right hand.'),Object(l.b)("li",{parentName:"ol"},"Hightlight the object you want to change properties."),Object(l.b)("li",{parentName:"ol"},"Press A or X button. ")),Object(l.b)("h3",{id:"scale"},"Scale"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You can use scale tool to adjust the size on the X, Y or Z axis. ")),Object(l.b)("p",null,"To select the tool:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},'Press B button on your quest controller, untill word "scale" is written on your right hand.'),Object(l.b)("li",{parentName:"ol"},"Hightlight the object you want to scale."),Object(l.b)("li",{parentName:"ol"},"Press A or X button and drag it on the chosen X, Y or Z axis.  ")),Object(l.b)("h3",{id:"clone"},"Clone"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You can use clone tool to make a copy of already created objects in the scene.")),Object(l.b)("p",null,"To select the tool:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},'Press B button on your quest controller, untill word "clone" is written on your right hand.'),Object(l.b)("li",{parentName:"ol"},"Hightlight the object you want to clone."),Object(l.b)("li",{parentName:"ol"},"Press A or X button.")),Object(l.b)("h3",{id:"change-object-model-materials"},"CHANGE OBJECT MODEL MATERIALS:"),Object(l.b)("p",null,"How to change materials:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},'Press B button on your quest controller, untill word "properties" is written on your right hand.'),Object(l.b)("li",{parentName:"ol"},"Hightlight the object you want to change material or colour."),Object(l.b)("li",{parentName:"ol"},"Press A or X button. "),Object(l.b)("li",{parentName:"ol"},'Select "material" tab on the left side of properties menu.'),Object(l.b)("li",{parentName:"ol"},"Click on the type of the material u want to apply to the object.")),Object(l.b)("h4",{id:"if-u-want-to-change-or-apply-certain-colour-to-the-object"},"IF U WANT TO CHANGE OR APPLY CERTAIN COLOUR TO THE OBJECT:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},'Press B button on your quest controller, untill word "properties" is written on your right hand.'),Object(l.b)("li",{parentName:"ol"},"Hightlight the object you want to change material."),Object(l.b)("li",{parentName:"ol"},"Press A or X button. "),Object(l.b)("li",{parentName:"ol"},'Select "material" tab on the left side of properties menu.'),Object(l.b)("li",{parentName:"ol"},"Click on the colour u want to apply to the object, colour is located at the right side of the tab.")))}s.isMDXComponent=!0}}]);