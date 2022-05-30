!function(){"use strict";var e,t,a,i=window.location,r=window.document,o=r.getElementById("plausible"),l=o.getAttribute("data-api")||(e=o.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function n(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(e){}var a={};a.n=e,a.u=i.href,a.d=o.getAttribute("data-domain"),a.r=r.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props),a.h=1;var n=new XMLHttpRequest;n.open("POST",l,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(a)),n.onreadystatechange=function(){4===n.readyState&&t&&t.callback&&t.callback()}}}function s(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,n="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==i.host&&((a||n)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!n||(setTimeout(function(){i.href=t.href},150),e.preventDefault()))}function c(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,n="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.getAttribute("data-event-name")&&((a||n)&&u(t),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!n||(setTimeout(function(){i.href=t.href},150),e.preventDefault()))}function u(e){var t=e.getAttribute("data-event-name"),a=function(e){for(var t={},a=0;a<e.length;a++){var n,i=e[a].name;"data-event-"===i.substring(0,11)&&"data-event-name"!==i&&(n=i.replace("data-event-",""),t[n]=e[a].value)}return t}(e.attributes);e.href&&(a.url=e.href),plausible(t,{props:a})}r.addEventListener("click",s),r.addEventListener("auxclick",s),r.addEventListener("submit",function(e){e.target.getAttribute("data-event-name")&&(e.preventDefault(),u(e.target),setTimeout(function(){e.target.submit()},150))}),r.addEventListener("click",c),r.addEventListener("auxclick",c);var d=window.plausible&&window.plausible.q||[];window.plausible=n;for(var p,f=0;f<d.length;f++)n.apply(this,d[f]);function v(){p=i.pathname,n("pageview")}window.addEventListener("hashchange",v),"prerender"===r.visibilityState?r.addEventListener("visibilitychange",function(){p||"visible"!==r.visibilityState||v()}):v()}();