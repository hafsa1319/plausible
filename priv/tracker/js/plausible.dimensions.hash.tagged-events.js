!function(){"use strict";var o=window.location,u=window.document,l=u.currentScript,c=l.getAttribute("data-api")||new URL(l.src).origin+"/api/event";function s(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return s("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag")}catch(t){}var n={};n.n=t,n.u=o.href,n.d=l.getAttribute("data-domain"),n.r=u.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props);var a=l.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),i=n.p||{};a.forEach(function(t){var e=t.replace("event-",""),n=l.getAttribute(t);i[e]=i[e]||n}),n.p=i,n.h=1;var r=new XMLHttpRequest;r.open("POST",c,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(n)),r.onreadystatechange=function(){4===r.readyState&&e&&e.callback&&e.callback()}}}function e(t){for(var e=t.target,n="auxclick"===t.type&&2===t.which,a="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.getAttribute("data-event-name")&&((n||a)&&i(e),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!a||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}function i(t){var e=t.getAttribute("data-event-name"),n=function(t){for(var e={},n=0;n<t.length;n++){var a,i=t[n].name;"data-event-"===i.substring(0,11)&&"data-event-name"!==i&&(a=i.replace("data-event-",""),e[a]=t[n].value)}return e}(t.attributes);t.href&&(n.url=t.href),plausible(e,{props:n})}u.addEventListener("submit",function(t){t.target.getAttribute("data-event-name")&&(t.preventDefault(),i(t.target),setTimeout(function(){t.target.submit()},150))}),u.addEventListener("click",e),u.addEventListener("auxclick",e);var n=window.plausible&&window.plausible.q||[];window.plausible=t;for(var a,r=0;r<n.length;r++)t.apply(this,n[r]);function d(){a=o.pathname,t("pageview")}window.addEventListener("hashchange",d),"prerender"===u.visibilityState?u.addEventListener("visibilitychange",function(){a||"visible"!==u.visibilityState||d()}):d()}();