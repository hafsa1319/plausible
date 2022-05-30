!function(){"use strict";var o=window.location,l=window.document,c=l.currentScript,p=c.getAttribute("data-api")||new URL(c.src).origin+"/api/event";function s(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return s("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag")}catch(t){}var a={};a.n=t,a.u=o.href,a.d=c.getAttribute("data-domain"),a.r=l.referrer||null,a.w=window.innerWidth,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props);var i=c.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),n=a.p||{};i.forEach(function(t){var e=t.replace("event-",""),a=c.getAttribute(t);n[e]=n[e]||a}),a.p=n,a.h=1;var r=new XMLHttpRequest;r.open("POST",p,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(a)),r.onreadystatechange=function(){4===r.readyState&&e&&e.callback&&e.callback()}}}var e=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],a=c.getAttribute("file-types"),i=c.getAttribute("add-file-types"),u=a&&a.split(",")||i&&i.split(",").concat(e)||e;function n(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,i="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;var n,r=e&&e.href&&e.href.split("?")[0];r&&(n=r.split(".").pop(),u.some(function(t){return t===n}))&&((a||i)&&plausible("File Download",{props:{url:r}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!i||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}function r(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,i="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.getAttribute("data-event-name")&&((a||i)&&d(e),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!i||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}function d(t){var e=t.getAttribute("data-event-name"),a=function(t){for(var e={},a=0;a<t.length;a++){var i,n=t[a].name;"data-event-"===n.substring(0,11)&&"data-event-name"!==n&&(i=n.replace("data-event-",""),e[i]=t[a].value)}return e}(t.attributes);t.href&&(a.url=t.href),plausible(e,{props:a})}l.addEventListener("click",n),l.addEventListener("auxclick",n),l.addEventListener("submit",function(t){t.target.getAttribute("data-event-name")&&(t.preventDefault(),d(t.target),setTimeout(function(){t.target.submit()},150))}),l.addEventListener("click",r),l.addEventListener("auxclick",r);var f=window.plausible&&window.plausible.q||[];window.plausible=t;for(var v,g=0;g<f.length;g++)t.apply(this,f[g]);function h(){v=o.pathname,t("pageview")}window.addEventListener("hashchange",h),"prerender"===l.visibilityState?l.addEventListener("visibilitychange",function(){v||"visible"!==l.visibilityState||h()}):h()}();