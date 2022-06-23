(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{ARGUMENT_FLAG:()=>a,Argument:()=>f,CLI:()=>u,Pattern:()=>c,Reader:()=>s,Writter:()=>l});const r=require("node:process"),n=require("node:fs");function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var u={getArgumentValue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.argv,n=t.find((function(t){return c.testArg(e,t)}));if(void 0===n)return new f(e,"");var i=n.split("=")[1];return new f(e,i)},getArgumentsGroup:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.argv;return t.filter((function(t){return c.testArg(e,t)})).map((function(t){return t.replace(e,"")})).map((function(e){var t=e.split("=")[0],r=e.split("=")[1];return new f(t,r)}))},getFlagsGroup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.argv;return e.filter((function(e){return c.testFlag(e)})).map((function(e){return e.replace(a,"")})).map((function(e){return new f(e,!0)}))},isFlag:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.argv;return t.includes(a+e)},getAllArguments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.argv,t=e.slice(2);return t.filter((function(e){return c.testIsArg(e)})).map((function(e){var t=e.split("=")[0],r=e.split("=")[1];return new f(t,r)}))}},a="--",c={testStart:function(e,t){return new RegExp("^"+e).test(t)},testArg:function(e,t){return new RegExp("^"+e).test(t)},testIsArg:function(e){return e.includes("=")},testFlag:function(e){return new RegExp("^"+a).test(e)},testHasDirectory:function(e){return new RegExp("/").test(e)},replacePlaceholder:function(e,t){var r=new RegExp("\\$\\{"+t.name+"\\}","g");return e.replace(r,t.value)},countMatches:function(e,t){var r=new RegExp(t,"g");return((e||"").match(r)||[]).length}},s={readTemplate:function(e){return this.read(e)},read:function(e){return n.existsSync(e)?n.readFileSync(e,"utf8"):(console.error("file not found in : "+e),"")},changePlaceholders:function(e,t){var r=e;return t.forEach((function(e){r=c.replacePlaceholder(r,e)})),r}},l={writeFile:function(e,t){if(c.testHasDirectory(e)){var r=e.lastIndexOf("/"),i=e.substring(0,r);this.createDirectory(i)}n.writeFileSync(e,t)},createDirectory:function(e){n.mkdirSync(e,{recursive:!0})},insertInLine:function(e,t,r){if(t-=1,c.testHasDirectory(e)){var i=e.lastIndexOf("/"),o=e.substring(0,i);this.createDirectory(o)}var u=n.readFileSync(e,"utf8").split(/\r?\n/);u.splice(t,0,r);var a=u.join("\n");n.writeFileSync(e,a)}},f=o((function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.value=r}));exports.ARGUMENT_FLAG=t.ARGUMENT_FLAG,exports.Argument=t.Argument,exports.CLI=t.CLI,exports.Pattern=t.Pattern,exports.Reader=t.Reader,exports.Writter=t.Writter,Object.defineProperty(exports,"__esModule",{value:!0})})();