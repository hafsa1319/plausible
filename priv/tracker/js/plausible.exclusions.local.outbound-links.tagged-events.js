!function(){"use strict";var c=window.location,l=window.document,p=l.currentScript,d=p.getAttribute("data-api")||new URL(p.src).origin+"/api/event";function f(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var a=p&&p.getAttribute("data-include"),n=p&&p.getAttribute("data-exclude");if("pageview"===e){var i=!a||a&&a.split(",").some(s),r=n&&n.split(",").some(s);if(!i||r)return f("exclusion rule")}var o={};o.n=e,o.u=c.href,o.d=p.getAttribute("data-domain"),o.r=l.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var u=new XMLHttpRequest;u.open("POST",d,!0),u.setRequestHeader("Content-Type","text/plain"),u.send(JSON.stringify(o)),u.onreadystatechange=function(){4===u.readyState&&t&&t.callback&&t.callback()}}function s(e){return c.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}function t(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,n="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==c.host&&((a||n)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!n||(setTimeout(function(){c.href=t.href},150),e.preventDefault()))}function a(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,n="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.getAttribute("data-event-name")&&((a||n)&&i(t),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!n||(setTimeout(function(){c.href=t.href},150),e.preventDefault()))}function i(e){var t=e.getAttribute("data-event-name"),a=function(e){for(var t={},a=0;a<e.length;a++){var n,i=e[a].name;"data-event-"===i.substring(0,11)&&"data-event-name"!==i&&(n=i.replace("data-event-",""),t[n]=e[a].value)}return t}(e.attributes);e.href&&(a.url=e.href),plausible(t,{props:a})}l.addEventListener("click",t),l.addEventListener("auxclick",t),l.addEventListener("submit",function(e){e.target.getAttribute("data-event-name")&&(e.preventDefault(),i(e.target),setTimeout(function(){e.target.submit()},150))}),l.addEventListener("click",a),l.addEventListener("auxclick",a);var n=window.plausible&&window.plausible.q||[];window.plausible=e;for(var r,o=0;o<n.length;o++)e.apply(this,n[o]);function u(){r!==c.pathname&&(r=c.pathname,e("pageview"))}var s,v=window.history;v.pushState&&(s=v.pushState,v.pushState=function(){s.apply(this,arguments),u()},window.addEventListener("popstate",u)),"prerender"===l.visibilityState?l.addEventListener("visibilitychange",function(){r||"visible"!==l.visibilityState||u()}):u()}();