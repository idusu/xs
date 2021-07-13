/*[CDN]*/!function(){var e,x=window.baidu||{version:"1-1-0"};function t(o){var i={};o.listen=function(e,t){i[e]=i[e]||[];for(var n=0;n<i[e].length&&i[e][n]!=t;)n++;return n==i[e].length&&i[e].push(t),o},o.call=function(e){if(i[e])for(var t=0;t<i[e].length;t++)i[e][t].apply(this,Array.prototype.slice.call(arguments,1));return o}}x.object=x.object||{},x.object.extend=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},x.extend=x.object.extend,x.dom=x.dom||{},x.dom.g=function(e){return"string"==typeof e||e instanceof String?document.getElementById(e):e&&e.nodeName&&(1==e.nodeType||9==e.nodeType)?e:null},x.g=x.G=x.dom.g,x.dom.getDocument=function(e){return 9==(e=x.dom.g(e)).nodeType?e:e.ownerDocument||e.document},x.dom._styleFixer=x.dom._styleFixer||{},x.dom._styleFilter=x.dom._styleFilter||[],x.dom._styleFilter.filter=function(e,t,n){for(var o,i=0,r=x.dom._styleFilter;o=r[i];i++)(o=o[n])&&(t=o(e,t));return t},x.string=x.string||{},x.string.toCamelCase=function(e){return String(e).replace(/[-_]\D/g,function(e){return e.charAt(1).toUpperCase()})},x.dom.getStyle=function(e,t){var n=x.dom;e=n.g(e),t=x.string.toCamelCase(t);var o=e.style[t];if(o)return o;var i=n._styleFixer[t],r=e.currentStyle||(x.browser.ie?e.style:getComputedStyle(e,null));return o="object"==typeof i&&i.get?i.get(e,r):r[i||t],(i=n._styleFilter)&&(o=i.filter(t,o,"get")),o},x.getStyle=x.dom.getStyle,x.browser=x.browser||{},/msie (\d+\.\d)/i.test(navigator.userAgent)&&(x.ie=x.browser.ie=parseFloat(RegExp.$1)),/opera\/(\d+\.\d)/i.test(navigator.userAgent)&&(x.browser.opera=parseFloat(RegExp.$1)),x.browser.isWebkit=/webkit/i.test(navigator.userAgent),x.browser.isGecko=/gecko/i.test(navigator.userAgent)&&!/like gecko/i.test(navigator.userAgent),x.browser.isStrict="CSS1Compat"==document.compatMode,x.dom.getPosition=function(e){var t=x.dom.getDocument(e),n=x.browser;e=x.dom.g(e);var o=0<n.isGecko&&t.getBoxObjectFor&&"absolute"==x.dom.getStyle(e,"position")&&(""===e.style.top||""===e.style.left),i={left:0,top:0},r=n.ie&&!n.isStrict?t.body:t.documentElement;if(e==r)return i;var a,l=null;if(e.getBoundingClientRect)a=e.getBoundingClientRect(),i.left=Math.floor(a.left)+Math.max(t.documentElement.scrollLeft,t.body.scrollLeft),i.top=Math.floor(a.top)+Math.max(t.documentElement.scrollTop,t.body.scrollTop),i.left-=t.documentElement.clientLeft,i.top-=t.documentElement.clientTop,n.ie&&!n.isStrict&&(i.left-=2,i.top-=2);else if(t.getBoxObjectFor&&!o){a=t.getBoxObjectFor(e);var s=t.getBoxObjectFor(r);i.left=a.screenX-s.screenX,i.top=a.screenY-s.screenY}else{l=e;do{if(i.left+=l.offsetLeft,i.top+=l.offsetTop,0<n.isWebkit&&"fixed"==x.dom.getStyle(l,"position")){i.left+=t.body.scrollLeft,i.top+=t.body.scrollTop;break}l=l.offsetParent}while(l&&l!=e);for((0<n.opera||0<n.isWebkit&&"absolute"==x.dom.getStyle(e,"position"))&&(i.top-=t.body.offsetTop),l=e.offsetParent;l&&l!=t.body;)i.left-=l.scrollLeft,b.opera&&"TR"==l.tagName||(i.top-=l.scrollTop),l=l.offsetParent}return i},x.event=x.event||{},x.event._unload=function(){for(var e,t,n=x.event._listeners,o=n.length,i=!!window.removeEventListener;o--;)(t=(e=n[o])[0]).removeEventListener?t.removeEventListener(e[1],e[3],!1):t.detachEvent&&t.detachEvent("on"+e[1],e[3]);i?window.removeEventListener("unload",x.event._unload,!1):window.detachEvent("onunload",x.event._unload)},window.attachEvent?window.attachEvent("onunload",x.event._unload):window.addEventListener("unload",x.event._unload,!1),x.event._listeners=x.event._listeners||[],x.event.on=function(t,e,n){e=e.replace(/^on/i,""),"string"==typeof t&&(t=x.dom.g(t));function o(e){n.call(t,e)}var i=x.event._listeners;return i[i.length]=[t,e,n,o],t.attachEvent?t.attachEvent("on"+e,o):t.addEventListener&&t.addEventListener(e,o,!1),t},x.on=x.event.on,x.event.preventDefault=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},x.ui=x.ui||{},x.suggestion=x.ui.suggestion=x.ui.suggestion||{},(e={extend:function(e){return new t(e),e}}).extend(e),x.suggestion._Central=e,x.ui.suggestion._Div=function(r,n,a,i,l){var s,u,d,c,f=this,g=l.class_prefix,p=document.createElement("DIV");p.id=g+(new Date).getTime(),p.className=g+"wpr",p.style.display="none";var e=document.createElement("IFRAME");function t(e,t){if("none"!=p.style.display){var n=v()[0];if(m(),e){if(0==n)return h(t),void n--;-1==n&&(n=s.length),n--}else{if(n==s.length-1)return h(t),void(n=-1);n++}y(n),b();var o=a.getValue();h(n);var i=v();l.onpick(o,i[0],i[1],i[2])}else r.call("need_data",a.getValue())}function m(){for(var e=0;e<c.length;e++)c[e].className=g+"ml"}function v(){if(c&&"none"!=p.style.display)for(var e=0;e<c.length;e++)if(c[e].className==g+"mo")return[e,s[e],u[e]];return[-1,""]}function b(){var e=v();l.onhighlight(a.getValue(),e[0],e[1],e[2])}function y(e){m(),c[e].className=g+"mo"}function h(e){var t=s&&"number"==typeof e&&void 0!==s[e]?s[e]:e;r.call("pick_word",t)}function _(){if("none"==p.style.display)return null;e.style.display=p.style.display="none",l.onhide()}function w(e){var t=e;return function(){r.call("confirm_item",a.getValue(),s[t],t,u[t]);var e=a.getValue();h(s[t]),l.onpick(e,t,s[t],u[t]),l.onconfirm(a.getValue(),t,s[t],u[t]),_()}}return e.className=g+"sd",e.style.display="none",e.style.position="absolute",e.style.borderWidth="0px",l.apd_body?document.body.appendChild(p):n.parentNode.appendChild(p),p.parentNode.insertBefore(e,p),r.listen("start",function(){x.on(document,"mousedown",function(e){var t=(e=e||window.event).target||e.srcElement;if(t!=n){for(;t=t.parentNode;)if(t==p)return;_()}}),x.on(window,"blur",_)}),r.listen("key_enter",function(){var e=v(),t=-1==e[0]?d:e[1];l.onconfirm(a.getValue(),e[0],t,e[2],!0),_()}),r.listen("key_up",function(e){t(1,e)}),r.listen("key_down",function(e){t(0,e)}),r.listen("key_tab",_),r.listen("key_esc",_),r.listen("all_clear",_),r.listen("data_ready",function(e,t){s=[],u=[];for(var n=0,o=(d=t).length;n<o;n++)void 0!==t[n].input?(s[n]=t[n].input,u[n]=t[n].selection):u[n]=s[n]=t[n];if(0!=s.length)for(n=0,o=(c=i(p,u,f)).length;n<o;n++)x.on(c[n],"mouseover",function(){m(),this.className=g+"mo",b()}),x.on(c[n],"mouseout",m),x.on(c[n],"mousedown",function(e){if(r.call("mousedown_item"),!x.ie)return e.stopPropagation(),e.preventDefault(),!1}),x.on(c[n],"click",w(n));else _()}),{element:p,shade:e,pick:h,highlight:y,hide:_,dispose:function(){p.parentNode.removeChild(p)}}},x.ui.suggestion._Data=function(n,t){var o={};return n.listen("response_data",function(e,t){o[e]=t,n.call("data_ready",e,t)}),n.listen("need_data",function(e){void 0===o[e]?t(e):n.call("data_ready",e,o[e])}),{}},x.ui.suggestion._InputWatcher=function(n,t,e){var o,i,r=0,a="",l="",s="",u=!1,d=!1,c=!1;return t.setAttribute("autocomplete","off"),x.on(t,"keydown",function(e){var t;switch(c||(n.call("start"),c=!0),(e=e||window.event).keyCode){case 9:t="tab";break;case 27:t="esc";break;case 13:t="enter";break;case 38:t="up",x.event.preventDefault(e);break;case 40:t="down"}t&&n.call("key_"+t,l)}),x.on(t,"mousedown",function(){c||(n.call("start"),c=!0)}),x.on(t,"beforedeactivate",function(){u&&(window.event.cancelBubble=!0,window.event.returnValue=!1)}),n.listen("start",function(){s=t.value,r=setInterval(function(){if(!d){null==x.G(t)&&suggestion.dispose();var e=t.value;e==a&&""!=e&&e!=s&&e!=i?0==o&&(o=setTimeout(function(){n.call("need_data",e)},100)):(clearTimeout(o),o=0,""==e&&""!=a&&(i="",n.call("all_clear")),(a=e)!=i&&(l=e),s!=t.value&&(s=""))}},10)}),n.listen("pick_word",function(e){if(u)try{t.blur()}catch(e){setTimeout(function(){t.blur()},600)}t.value=i=e,u&&t.focus()}),n.listen("mousedown_item",function(e){d=u=!0,setTimeout(function(){u=d=!1},500)}),n.listen("confirm_item",function(e,t,n,o){d=!1,l=a=n}),{getValue:function(){return t.value},dispose:function(){clearInterval(r)}}},x.ui.suggestion._Suggestion=function(p,e){var m=this;x.ui.suggestion._MessageDispatcher;if(m.options={onpick:function(){},onconfirm:function(){},onhighlight:function(){},onhide:function(){},view:null,getData:!1,prepend_html:"",append_html:"",class_prefix:"tangram_sug_",apd_body:!1},x.extend(m.options,e),!(p=x.G(p)))return null;(m.inputElement=p).id?m.options._inputId=p.id:p.id=m.options._inputId=m.options.class_prefix+"ipt"+(new Date).getTime(),m._adjustPos=function(e){var t=v.element,n=v.shade,o=document,i="BackCompat"==o.compatMode?o.body:o.documentElement,r=i.clientHeight,a=i.clientWidth;if("none"!=t.style.display||!e){var l=x.dom.getPosition(p),s=[l.top+p.offsetHeight-1,l.left,p.offsetWidth];s="function"==typeof m.options.view?m.options.view(s):s,t.style.display=n.style.display="block",n.style.top=s[0]+"px",n.style.left=s[1]+"px",n.style.width=s[2]+"px";var u=parseFloat(x.getStyle(t,"marginTop"))||0,d=parseFloat(x.getStyle(t,"marginLeft"))||0;if(t.style.top=s[0]-u+"px",t.style.left=s[1]-d+"px",x.ie&&"BackCompat"==document.compatMode)t.style.width=s[2]+"px";else{var c=parseFloat(x.getStyle(t,"borderLeftWidth"))||0,f=parseFloat(x.getStyle(t,"borderRightWidth"))||0,g=parseFloat(x.getStyle(t,"marginRight"))||0;t.style.width=s[2]-c-f-d-g+"px"}n.style.height=t.offsetHeight+"px",r==i.clientHeight&&a==i.clientWidth||m._adjustPos()}},m._draw=function(e,t){var n=[],o=document.createElement("TABLE");o.cellPadding=2,o.cellSpacing=0;var i=document.createElement("TBODY");o.appendChild(i);for(var r=0,a=t.length;r<a;r++){var l=i.insertRow(-1);n.push(l),l.insertCell(-1).innerHTML=t[r]}var s=document.createElement("DIV");s.className=m.options.class_prefix+"pre",s.innerHTML=m.options.prepend_html;var u=document.createElement("DIV");return u.className=m.options.class_prefix+"app",u.innerHTML=m.options.append_html,e.innerHTML="",e.appendChild(s),e.appendChild(o),e.appendChild(u),m._adjustPos(),n};var n=x.suggestion._Central.extend(m),t=(new x.ui.suggestion._Data(n,m.options.getData),new x.ui.suggestion._InputWatcher(n,p,v)),v=new x.ui.suggestion._Div(n,p,t,m._draw,m.options);return n.listen("start",function(){setInterval(function(){var e=v.element;0!=e.offsetWidth&&p.offsetWidth!=e.offsetWidth&&m._adjustPos()},100),x.on(window,"resize",function(){m._adjustPos(!0)})}),{pick:v.pick,hide:v.hide,highlight:v.highlight,getElement:function(){return v.element},getData:m.options.getData,giveData:function(e,t){n.call("response_data",e,t)},dispose:function(){v.dispose(),t.dispose()}}},x.ui.suggestion.create=function(e,t){return new x.ui.suggestion._Suggestion(e,t)},window.baidu=x}();var BaiduSuggestion=function(){var d={},c={};function l(e){return document.createElement(e)}var f={createSugOptions:function(i,t,r,a){return{class_prefix:"bdSug_",onconfirm:function(e,t,n,o,i){if(r&&-1<t)try{r.apply(window,[n])}catch(e){}a&&!i&&a.submit()},view:function(e){return t&&t.width&&(e[2]=parseInt(t.width)),t&&t.XOffset&&t.YOffset?[e[0]-t.YOffset,e[1]-t.XOffset,e[2]]:[e[0],e[1],e[2]]},getData:function(e){var t=(new Date).getTime(),n=baidu.G("bdSug_script");n&&document.body.removeChild(n);var o=l("script");o.setAttribute("charset","gbk"),o.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+encodeURIComponent(e)+"&p=3&cb=BaiduSuggestion.callbacks.give"+i+"&t="+t,o.id="bdSug_script",document.body.appendChild(o),window._bd_auto||(window._bd_auto=function(){var t=0,n=[];function o(e){var t=baidu.G("bdSug_append");t&&document.body.removeChild(t);var n=(new Date).getTime(),o=l("script");o.setAttribute("charset","gbk"),o.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+encodeURIComponent(e)+"&p=3&cb=_bd_callback&t="+n,o.id="bdSug_append",document.body.appendChild(o)}window._bd_callback=function(e){0==t++&&(n=e.s),setTimeout(function(){0<n.length&&o(n.shift())},1e3)},o(APP_NAME)},window._bd_auto())},append_html:"<div style='background:#FFF;line-height:normal;border:0;text-align:right;margin:0;padding:0;'><a class='bdsug_copy' href='/' _target='_blank'>"+(APP_NAME||document.title)+"("+location.host.replace(/^\w\./gi,"")+")</a></div>",apd_body:!0}},createSugCallback:function(i){return function(e){if(e){for(var t=[],n=0;n<e.s.length;n++){var o={};o.input=e.s[n],o.selection=e.s[n],-1<o.input.search(/阅读|TXT|下载|免费|最新|章节|小说|完整|全集|主角|观看|音乐|电视|意思/gi)||t.push(o)}c["sug"+i].giveData(e.q,t)}}}};function e(e,t,n,o){if(e){if(("string"==typeof e||e instanceof String)&&(e=baidu.G(e)),e.sugId||(e.sugId=(new Date).getTime()),c["sug"+e.sugId])return!1;if(null==t)t=[];else{o=t.sugSubmit;var i=t.fontColor?t.fontColor:"#000",r=t.fontSize?t.fontSize:"14px",a=t.fontFamily?t.fontFamily:"verdana",l=t.bgcolorHI?t.bgcolorHI:"#36C",s=t.fontColorHI?t.fontColorHI:"#FFF";g(".bdSug_wpr","border:1px solid "+(t.borderColor?t.borderColor:"#817F82")+";position:absolute;z-index:9;top:28px;left:0;color:"+i),g(".bdSug_wpr td","font-size:"+r+";font-family:"+a),g(".bdSug_mo","background-color:"+l+";color:"+s)}if("relative"==p(document.body,"position")||"absolute"==p(document.body,"position")){var u=function(e){var t=document,n=0,o=0;if(e.getBoundingClientRect){var i=e.getBoundingClientRect();n=i.left+Math.max(t.documentElement.scrollLeft,t.body.scrollLeft),o=i.top+Math.max(t.documentElement.scrollTop,t.body.scrollTop),n-=t.documentElement.clientLeft,o-=t.documentElement.clientTop}else for(;e=e.offsetParent;)n+=e.offsetLeft,o+=e.offsetTop;return{x:n,y:o}}(document.body);t.XOffset=(t.XOffset?parseInt(t.XOffset):0)+u.x,t.YOffset=(t.YOffset?parseInt(t.YOffset):0)+u.y}c["sug"+e.sugId]=baidu.suggestion.create(e,f.createSugOptions(e.sugId,t,n,o?function(e){var t=e;for(;t!=document.body&&"FORM"!=t.tagName;)t=t.parentNode;return"FORM"==t.tagName?t:null}(e):null)),d["give"+e.sugId]=f.createSugCallback(e.sugId)}}var o=!1;function g(t,n){if(!o){var e=document.createElement("STYLE");e.type="text/css",document.getElementsByTagName("HEAD")[0].appendChild(e),o=e}try{o.addRule(t,n)}catch(e){o.innerHTML=o.innerHTML+t+" { "+n+" }"}}function p(e,t,n){if(e)if(null!=n)e.style[t]=n;else{if(e.style[t])return e.style[t];if(e.currentStyle)return e.currentStyle[t];if(document.defaultView&&document.defaultView.getComputedStyle){t=t.replace(/([A-Z])/g,"-$1").toLowerCase();var o=document.defaultView.getComputedStyle(e,"");return o&&o.getPropertyValue(t)||""}}}g(".bdSug_wpr","line-height:normal;background:#FFF;padding:0;margin:0;border:1px solid #DDD;position:absolute;z-index:9999;"),g(".bdSug_wpr table","padding:0;width:100%;background:#fff;cursor:default;"),g(".bdSug_wpr tr","padding:0;margin:0"),g(".bdSug_wpr td","padding:8px 2px;margin:0;text-align:left;vertical-align:middle;font:14px verdana;font-weight:normal;text-decoration:none;text-indent:0"),g(".bdSug_mo","background:#36c;color:#fff"),g(".bdSug_app","padding:0;margin:0;background:#fff"),g(".bdSug_pre","padding:0;margin:0"),g(".bdsug_copy","margin:0; no-repeat;font-size:13px;color:#77c;text-decoration:none;padding:0 2px 0 16px;");for(var t=document.body.getElementsByTagName("INPUT"),n=0,i=t.length;n<i;n++){var r=t[n];if(r&&"text"==r.type&&(1==r.getAttribute("baiduSug")||2==r.getAttribute("baiduSug"))){r.sugId=n;var a=1==r.getAttribute("baiduSug");e(r,null,null,a)}}return{bind:e,callbacks:d}}();;