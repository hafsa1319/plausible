!function(){"use strict";var t,e,a,o=window.location,n=window.document,i=n.getElementById("plausible"),l=i.getAttribute("data-api")||(t=i.src.split("/"),e=t[0],a=t[2],e+"//"+a+"/api/event");function p(t){console.warn("Ignoring Event: "+t)}function r(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return p("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return p("localStorage flag")}catch(t){}var a={};a.n=t,a.u=e&&e.u?e.u:o.href,a.d=i.getAttribute("data-domain"),a.r=n.referrer||null,a.w=window.innerWidth,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props);var r=new XMLHttpRequest;r.open("POST",l,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(a)),r.onreadystatechange=function(){4===r.readyState&&e&&e.callback&&e.callback()}}}var s=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],c=i.getAttribute("file-types"),u=i.getAttribute("add-file-types"),d=c&&c.split(",")||u&&u.split(",").concat(s)||s;function f(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,r="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;var n,i=e&&e.href&&e.href.split("?")[0];i&&(n=i.split(".").pop(),d.some(function(t){return t===n}))&&((a||r)&&plausible("File Download",{props:{url:i}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!r||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}function g(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,r="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.getAttribute("data-event-name")&&((a||r)&&v(e),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!r||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}function v(t){var e=t.getAttribute("data-event-name"),a=function(t){for(var e={},a=0;a<t.length;a++){var r,n=t[a].name;"data-event-"===n.substring(0,11)&&"data-event-name"!==n&&(r=n.replace("data-event-",""),e[r]=t[a].value)}return e}(t.attributes);t.href&&(a.url=t.href),plausible(e,{props:a})}n.addEventListener("click",f),n.addEventListener("auxclick",f),n.addEventListener("submit",function(t){t.target.getAttribute("data-event-name")&&(t.preventDefault(),v(t.target),setTimeout(function(){t.target.submit()},150))}),n.addEventListener("click",g),n.addEventListener("auxclick",g);var m=window.plausible&&window.plausible.q||[];window.plausible=r;for(var w=0;w<m.length;w++)r.apply(this,m[w])}();