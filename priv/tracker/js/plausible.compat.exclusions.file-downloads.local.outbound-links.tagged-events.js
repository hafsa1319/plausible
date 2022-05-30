!function(){"use strict";var e,t,a,s=window.location,c=window.document,u=c.getElementById("plausible"),d=u.getAttribute("data-api")||(e=u.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function f(e){console.warn("Ignoring Event: "+e)}function i(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var a=u&&u.getAttribute("data-include"),i=u&&u.getAttribute("data-exclude");if("pageview"===e){var r=!a||a&&a.split(",").some(l),n=i&&i.split(",").some(l);if(!r||n)return f("exclusion rule")}var o={};o.n=e,o.u=s.href,o.d=u.getAttribute("data-domain"),o.r=c.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var p=new XMLHttpRequest;p.open("POST",d,!0),p.setRequestHeader("Content-Type","text/plain"),p.send(JSON.stringify(o)),p.onreadystatechange=function(){4===p.readyState&&t&&t.callback&&t.callback()}}function l(e){return s.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}function r(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,i="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==s.host&&((a||i)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!i||(setTimeout(function(){s.href=t.href},150),e.preventDefault()))}c.addEventListener("click",r),c.addEventListener("auxclick",r);var n=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],o=u.getAttribute("file-types"),p=u.getAttribute("add-file-types"),l=o&&o.split(",")||p&&p.split(",").concat(n)||n;function v(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,i="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;var r,n=t&&t.href&&t.href.split("?")[0];n&&(r=n.split(".").pop(),l.some(function(e){return e===r}))&&((a||i)&&plausible("File Download",{props:{url:n}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!i||(setTimeout(function(){s.href=t.href},150),e.preventDefault()))}function g(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,i="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.getAttribute("data-event-name")&&((a||i)&&h(t),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!i||(setTimeout(function(){s.href=t.href},150),e.preventDefault()))}function h(e){var t=e.getAttribute("data-event-name"),a=function(e){for(var t={},a=0;a<e.length;a++){var i,r=e[a].name;"data-event-"===r.substring(0,11)&&"data-event-name"!==r&&(i=r.replace("data-event-",""),t[i]=e[a].value)}return t}(e.attributes);e.href&&(a.url=e.href),plausible(t,{props:a})}c.addEventListener("click",v),c.addEventListener("auxclick",v),c.addEventListener("submit",function(e){e.target.getAttribute("data-event-name")&&(e.preventDefault(),h(e.target),setTimeout(function(){e.target.submit()},150))}),c.addEventListener("click",g),c.addEventListener("auxclick",g);var m=window.plausible&&window.plausible.q||[];window.plausible=i;for(var w,y=0;y<m.length;y++)i.apply(this,m[y]);function b(){w!==s.pathname&&(w=s.pathname,i("pageview"))}var k,x=window.history;x.pushState&&(k=x.pushState,x.pushState=function(){k.apply(this,arguments),b()},window.addEventListener("popstate",b)),"prerender"===c.visibilityState?c.addEventListener("visibilitychange",function(){w||"visible"!==c.visibilityState||b()}):b()}();