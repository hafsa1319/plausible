!function(){"use strict";var u=window.location,c=window.document,p=c.currentScript,d=p.getAttribute("data-api")||new URL(p.src).origin+"/api/event";function f(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(u.hostname)||"file:"===u.protocol)return f("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(t){}var a=p&&p.getAttribute("data-include"),n=p&&p.getAttribute("data-exclude");if("pageview"===t){var i=!a||a&&a.split(",").some(s),r=n&&n.split(",").some(s);if(!i||r)return f("exclusion rule")}var o={};o.n=t,o.u=u.href,o.d=p.getAttribute("data-domain"),o.r=c.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=new XMLHttpRequest;l.open("POST",d,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&e&&e.callback&&e.callback()}}function s(t){return u.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}function e(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,n="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.host&&e.host!==u.host&&((a||n)&&plausible("Outbound Link: Click",{props:{url:e.href}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!n||(setTimeout(function(){u.href=e.href},150),t.preventDefault()))}function a(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,n="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.getAttribute("data-event-name")&&((a||n)&&i(e),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!n||(setTimeout(function(){u.href=e.href},150),t.preventDefault()))}function i(t){var e=t.getAttribute("data-event-name"),a=function(t){for(var e={},a=0;a<t.length;a++){var n,i=t[a].name;"data-event-"===i.substring(0,11)&&"data-event-name"!==i&&(n=i.replace("data-event-",""),e[n]=t[a].value)}return e}(t.attributes);t.href&&(a.url=t.href),plausible(e,{props:a})}c.addEventListener("click",e),c.addEventListener("auxclick",e),c.addEventListener("submit",function(t){t.target.getAttribute("data-event-name")&&(t.preventDefault(),i(t.target),setTimeout(function(){t.target.submit()},150))}),c.addEventListener("click",a),c.addEventListener("auxclick",a);var n=window.plausible&&window.plausible.q||[];window.plausible=t;for(var r,o=0;o<n.length;o++)t.apply(this,n[o]);function l(){r!==u.pathname&&(r=u.pathname,t("pageview"))}var s,h=window.history;h.pushState&&(s=h.pushState,h.pushState=function(){s.apply(this,arguments),l()},window.addEventListener("popstate",l)),"prerender"===c.visibilityState?c.addEventListener("visibilitychange",function(){r||"visible"!==c.visibilityState||l()}):l()}();