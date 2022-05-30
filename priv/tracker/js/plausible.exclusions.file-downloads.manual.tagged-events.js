!function(){"use strict";var c=window.location,u=window.document,s=u.currentScript,d=s.getAttribute("data-api")||new URL(s.src).origin+"/api/event";function f(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(c.hostname)||"file:"===c.protocol)return f("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(t){}var a=s&&s.getAttribute("data-include"),r=s&&s.getAttribute("data-exclude");if("pageview"===t){var n=!a||a&&a.split(",").some(p),i=r&&r.split(",").some(p);if(!n||i)return f("exclusion rule")}var o={};o.n=t,o.u=e&&e.u?e.u:c.href,o.d=s.getAttribute("data-domain"),o.r=u.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=new XMLHttpRequest;l.open("POST",d,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&e&&e.callback&&e.callback()}}function p(t){return c.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var e=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],a=s.getAttribute("file-types"),r=s.getAttribute("add-file-types"),o=a&&a.split(",")||r&&r.split(",").concat(e)||e;function n(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,r="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;var n,i=e&&e.href&&e.href.split("?")[0];i&&(n=i.split(".").pop(),o.some(function(t){return t===n}))&&((a||r)&&plausible("File Download",{props:{url:i}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!r||(setTimeout(function(){c.href=e.href},150),t.preventDefault()))}function i(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,r="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.getAttribute("data-event-name")&&((a||r)&&l(e),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!r||(setTimeout(function(){c.href=e.href},150),t.preventDefault()))}function l(t){var e=t.getAttribute("data-event-name"),a=function(t){for(var e={},a=0;a<t.length;a++){var r,n=t[a].name;"data-event-"===n.substring(0,11)&&"data-event-name"!==n&&(r=n.replace("data-event-",""),e[r]=t[a].value)}return e}(t.attributes);t.href&&(a.url=t.href),plausible(e,{props:a})}u.addEventListener("click",n),u.addEventListener("auxclick",n),u.addEventListener("submit",function(t){t.target.getAttribute("data-event-name")&&(t.preventDefault(),l(t.target),setTimeout(function(){t.target.submit()},150))}),u.addEventListener("click",i),u.addEventListener("auxclick",i);var p=window.plausible&&window.plausible.q||[];window.plausible=t;for(var g=0;g<p.length;g++)t.apply(this,p[g])}();