!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.asmDom=t():e.asmDom=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";t.__esModule=!0,t.nodes=void 0;var o=n(2),r=function(e){return e&&e.__esModule?e:{default:e}}(o),u=t.nodes={0:null},i=0,a=function(e,t){return null!==e&&(e.asmDomPtr=i,e.asmDomNS=t),e};t.default={addNode:function(e){return u[++i]=a(e.parentNode),u[++i]=a(e.nextSibling),(u[++i]=a(e))&&i},createElement:function(e){var t=r.default.create(e);return t.asmDomPtr||(u[++i]=a(t))&&i},createElementNS:function(e,t){var n=r.default.create(t,e);return n.asmDomPtr||(u[++i]=a(n,e))&&i},createTextNode:function(e){var t=r.default.createText(e);return t.asmDomPtr||(u[++i]=a(t))&&i},createComment:function(e){var t=r.default.createComment(e);return t.asmDomPtr||(u[++i]=a(t))&&i},insertBefore:function(e,t,n){u[e].insertBefore(u[t],void 0!==u[n]?u[n]:null)},removeChild:function(e){r.default.collect(u[e])},appendChild:function(e,t){u[e].appendChild(u[t])},removeAttribute:function(e,t){u[e].removeAttribute(t)},setAttribute:function(e,t,n){120!==t.charCodeAt(0)?u[e].setAttribute(t,n):58===t.charCodeAt(3)?u[e].setAttributeNS("http://www.w3.org/XML/1998/namespace",t,n):58===t.charCodeAt(5)?u[e].setAttributeNS("http://www.w3.org/1999/xlink",t,n):u[e].setAttribute(t,n)},parentNode:function(e){return u[e]&&u[e].parentNode&&u[e].parentNode.asmDomPtr||0},nextSibling:function(e){return u[e]&&u[e].nextSibling&&u[e].nextSibling.asmDomPtr||0},setTextContent:function(e,t){u[e].textContent=t}}},function(e,t,n){"use strict";function o(){return new Promise(function(e){void 0===window&&void 0!==global&&(global.window={}),void 0===window.asmDomHelpers&&(window.asmDomHelpers={}),window.asmDomHelpers.domApi=u.default,window.asmDomHelpers.nodes=r.nodes,window.asmDomReady=function(){return e(function(e){return window.asmDom={Pointer_stringify:e.Pointer_stringify},window.asmDomHelpers.functionCallback=function(t){return function(n){return e.functionCallback(t,n)}},Promise.resolve(e)})}})}t.__esModule=!0,t.default=o;var r=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t,n){"use strict";t.__esModule=!0;var o={collect:function(e){if(null!==e&&void 0!==e){o.clean(e);var t=""+e.nodeName+(void 0!==e.asmDomNS?e.namespaceURI:""),n=o.nodes[t];n?n.push(e):o.nodes[t]=[e]}},create:function(e,t){e=e.toUpperCase(),void 0===t&&(t="");var n=o.nodes[e+t];return n&&n.pop()||t&&document.createElementNS(t,e)||document.createElement(e)},createText:function(e){var t=o.nodes["#text"],n=t&&t.pop()||document.createTextNode(e);return n.nodeValue=e,n},createComment:function(e){var t=o.nodes["#comment"],n=t&&t.pop()||document.createComment(e);return n.nodeValue=e,n},clean:function(e){for(;e.firstChild;)o.collect(e.firstChild);e.remove();var t=void 0;for(void 0!==e.attributes&&(t=e.attributes.length);t--;)e.removeAttribute(e.attributes[t].name);if(void 0!==e.asmDomRaws){for(t=e.asmDomRaws.length;t--;)e[e.asmDomRaws[t]]=void 0;e.asmDomRaws=void 0}""!==e.textContent&&(e.textContent=""),null!==e.nodeValue&&void 0!==e.nodeValue&&""!==e.nodeValue&&(e.nodeValue="");var n=Object.keys(e);for(t=n.length;t--;)"a"===n[t][0]&&"s"===n[t][1]&&"m"===n[t][2]&&"D"===n[t][3]&&"o"===n[t][4]&&"m"===n[t][5]||(e[n[t]]=void 0)},nodes:{}};t.default=o}])});