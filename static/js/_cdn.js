/*[CDN]*/!function(o){var a=COOKIE_PRE+"_";function c(e,t,n){var i="";if(n){var r=new Date;r.setTime(r.getTime()+864e5*n),i="; expires="+r.toUTCString()}o.cookie=a+e+"="+t+i+"; path=/"}function e(e){var t=a+e+"=",n=o.cookie.split(";"),i=n.length-1;if(i)for(;0<=i;i--){var r=n[i].replace(/^\s*|\s*$/g,"");if(0==r.indexOf(t))return decodeURIComponent(r.substring(t.length,r.length))}return null}var l=e("cdn")?e("cdn"):"/static/",s="",t=new Image;t.onerror=function(){var e=["https://pb.dushu.ru/static/"],t=location.href.split(/\?/),n=t[0]+"?"+(1<t.length?t[1]+"&":"")+Math.random().toString(36).substr(-4);if(null==l)s=e.shift();else{if(e)for(var i=0,r=e.length;i<r;i++)if(s==e[i]){if(i+1<r){s=e[i+1];break}return alert("页面加载失败，请刷新页面再试"),void location.replace(n)}s=s||e[0]}s&&setTimeout(function(){s&&c("cdn",s,1),location.replace(n)},1e3)},t.src=l+"img/blank.jpg"}((window,document));;