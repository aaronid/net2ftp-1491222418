/* Copyright (C) 2007 - 2011 YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

(function(h){var u=[],i=function(){},q={width:"auto",height:"auto",index:0,autoplay:!1,effect:"slide",interval:5E3,easing:"easeOutCirc",duration:300};i.prototype=h.extend(i.prototype,{name:"slideset",initialize:function(c){this.options=h.extend({},q,c);var a=this,f=this.element;this.sets=f.find("ul.set");this.navitems=f.find("ul.nav").children();this.current=this.sets[this.options.index]?this.options.index:0;this.busy=!1;this.timer=null;this.hover=!1;this.gwidth=this.options.width=="auto"?f.width():
this.options.width;this.gheight=this.options.height=="auto"?this.sets.eq(0).outerHeight(!0):this.options.height;f.css({width:a.gwidth});this.sets.css({height:a.gheight});this.sets.each(function(b){var c=0;a.sets.eq(b).children().each(function(){var b=h(this),a=b.position();b.data("left",a.left);c+=b.outerWidth(!0)});if(c<a.gwidth)c=a.gwidth;a.sets.eq(b).data("width",c).css({width:c});a.sets.eq(b).children().each(function(){var b=h(this);b.css("position","absolute").css("left",b.data("left"))});a.sets.eq(b).hide()});
this.navitems.each(function(b){h(this).bind("click",function(){a.stop().show(b)})});f.find(".next, .prev").bind("click",function(){a.stop()[h(this).hasClass("next")?"next":"previous"]()});"ontouchend"in document&&(f.bind("touchstart",function(b){function a(p){if(l){var b=p.originalEvent.touches?p.originalEvent.touches[0]:p;m={time:(new Date).getTime(),coords:[b.pageX,b.pageY]};Math.abs(l.coords[0]-m.coords[0])>10&&p.preventDefault()}}var c=b.originalEvent.touches?b.originalEvent.touches[0]:b,l={time:(new Date).getTime(),
coords:[c.pageX,c.pageY],origin:h(b.target)},m;f.bind("touchmove",a).one("touchend",function(){f.unbind("touchmove",a);l&&m&&m.time-l.time<1E3&&Math.abs(l.coords[0]-m.coords[0])>30&&Math.abs(l.coords[1]-m.coords[1])<75&&l.origin.trigger("swipe").trigger(l.coords[0]>m.coords[0]?"swipeleft":"swiperight");l=m=void 0})}),f.bind("swipeleft",function(){a.next()}).bind("swiperight",function(){a.previous()}));this.sets.eq(this.current).show();jQuery.support.opacity&&this.sets.eq(this.current).css("transform",
"scale(0.1)").animate({transform:"scale(1.0)"},{easing:"easeOutCirc",duration:500});this.navitems.eq(this.current).addClass("active");f.hover(function(){a.hover=!0},function(){a.hover=!1});this.options.autoplay&&this.start()},next:function(){this.show(this.sets[this.current+1]?this.current+1:0)},previous:function(){this.show(this.current-1>-1?this.current-1:this.sets.length-1)},start:function(){if(!this.timer){var c=this;this.timer=setInterval(function(){!c.hover&&!c.busy&&c.next()},this.options.interval);
return this}},stop:function(){this.timer&&clearInterval(this.timer);return this},show:function(c){this.current==c||this.busy||(this[this[this.options.effect]?this.options.effect:"slide"](c),this.navitems.removeClass("active").eq(c).addClass("active"))},slide:function(c){var a=c>this.current?"left":"right",f=this.sets.eq(c),b=this;this.busy=!0;this.sets.eq(this.current).animate({"margin-left":(a=="left"?-1:1)*2*this.gwidth},{complete:function(){b.sets.eq(b.current).hide();f.css("margin-left","").children().hide().css({left:(a==
"left"?1:-1)*2*b.gwidth}).end().show();var h=f.children(),k=0;h.each(function(f){a=="right"&&(f=h.length-1-f);(function(c,p){setTimeout(function(){h.eq(c).show().animate({left:h.eq(c).data("left")},{complete:function(){if(c==h.length-1||c==0&a=="right")b.busy=!1,b.current=p},duration:b.options.duration,easing:b.options.easing})},100*k)})(f,c);k+=1})}})},zoom:function(c){var a=this.sets.eq(c),h=0,b=this.sets.eq(this.current).children(),i=this;this.busy=!0;this.sets.eq(this.current).children().animate(jQuery.support.opacity?
{transform:"scale(0)",opacity:0}:{opacity:0},{complete:function(){h+=1;if(!(h!=-1&&h<b.length-1)){h=-1;var k=a.children().css(jQuery.support.opacity?{transform:"scale(0)",opacity:0}:{opacity:0}),l=0;i.sets.eq(i.current).hide();a.css("margin-left","").show();k.each(function(b){k.eq(b).css({left:k.eq(b).data("left")}).show();(function(p,b){setTimeout(function(){k.eq(p).show().animate(jQuery.support.opacity?{transform:"scale(1)",opacity:1}:{opacity:1},{complete:function(){if(p==k.length-1)i.busy=!1,
i.current=b},duration:i.options.duration,easing:i.options.easing})},Math.round(i.options.duration/3)*l)})(b,c);l+=1})}},easing:"swing",duration:Math.round(i.options.duration/2)})}});h.fn[i.prototype.name]=function(){var c=arguments,a=c[0]?c[0]:null;return this.each(function(){var f=h(this);if(i.prototype[a]&&f.data(i.prototype.name)&&a!="initialize")f.data(i.prototype.name)[a].apply(f.data(i.prototype.name),Array.prototype.slice.call(c,1));else if(!a||h.isPlainObject(a)){var b=new i;b.element=f;u.push(b);
i.prototype.initialize&&b.initialize.apply(b,c);f.data(i.prototype.name,b)}else h.error("Method "+a+" does not exist on jQuery."+i.prototype.name)})}})(jQuery);
(function(h){function u(p){for(var p=p.split(")"),b=h.trim,d=p.length-1,g,c,e,a=1,f=0,i=0,k=1,o,l,n,m=0,s=0;d--;){g=p[d].split("(");c=b(g[0]);e=g[1];o=g=l=n=0;switch(c){case "translateX":m+=parseInt(e,10);continue;case "translateY":s+=parseInt(e,10);continue;case "translate":e=e.split(",");m+=parseInt(e[0],10);s+=parseInt(e[1]||0,10);continue;case "rotate":e=q(e);o=Math.cos(e);g=Math.sin(e);l=-Math.sin(e);n=Math.cos(e);break;case "scaleX":o=e;n=1;break;case "scaleY":o=1;n=e;break;case "scale":e=e.split(",");
o=e[0];n=e.length>1?e[1]:e[0];break;case "skewX":o=n=1;l=Math.tan(q(e));break;case "skewY":o=n=1;g=Math.tan(q(e));break;case "skew":o=n=1;e=e.split(",");l=Math.tan(q(e[0]));g=Math.tan(q(e[1]||0));break;case "matrix":e=e.split(","),o=+e[0],g=+e[1],l=+e[2],n=+e[3],m+=parseInt(e[4],10),s+=parseInt(e[5],10)}c=a*o+f*l;f=a*g+f*n;o=i*o+k*l;k=i*g+k*n;a=c;i=o}return[a,f,i,k,m,s]}function i(b){var c,d,g,a=b[0],e=b[1],h=b[2],f=b[3];a*f-e*h?(c=Math.sqrt(a*a+e*e),a/=c,e/=c,g=a*h+e*f,h-=a*g,f-=e*g,d=Math.sqrt(h*
h+f*f),h/=d,f/=d,g/=d,a*f<e*h&&(a=-a,e=-e,g=-g,c=-c)):rotate=c=d=g=0;return{translate:[+b[4],+b[5]],rotate:Math.atan2(e,a),scale:[c,d],skew:[g,0]}}function q(b){return~b.indexOf("deg")?parseInt(b,10)*(Math.PI*2/360):~b.indexOf("grad")?parseInt(b,10)*(Math.PI/200):parseFloat(b)}for(var c=document.createElement("div"),c=c.style,a=["OTransform","msTransform","WebkitTransform","MozTransform","transform"],f=a.length,b,z,k,l,m=/Matrix([^)]*)/;f--;)a[f]in c&&(h.support.transform=b=a[f]);if(!b)h.support.matrixFilter=
z=c.filter==="";c=c=null;h.cssNumber.transform=!0;b&&b!="transform"?(h.cssProps.transform=b,b=="MozTransform"?k={get:function(c,a){return a?h.css(c,b).split("px").join(""):c.style[b]},set:function(c,a){c.style[b]=/matrix[^)p]*\)/.test(a)?a.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/,"matrix$1$2px,$3px"):a}}:/^1\.[0-5](?:\.|$)/.test(h.fn.jquery)&&(k={get:function(c,a){return a?h.css(c,b.replace(/^ms/,"Ms")):c.style[b]}})):z&&(k={get:function(b,c){var d=c&&b.currentStyle?b.currentStyle:b.style,a;
d&&m.test(d.filter)?(a=RegExp.$1.split(","),a=[a[0].split("=")[1],a[2].split("=")[1],a[1].split("=")[1],a[3].split("=")[1]]):a=[1,0,0,1];a[4]=d?d.left:0;a[5]=d?d.top:0;return"matrix("+a+")"},set:function(b,a,c){var g=b.style,f,e,i;if(!c)g.zoom=1;a=u(a);if(!c||c.M)if(e=["Matrix(M11="+a[0],"M12="+a[2],"M21="+a[1],"M22="+a[3],"SizingMethod='auto expand'"].join(),i=(f=b.currentStyle)&&f.filter||g.filter||"",g.filter=m.test(i)?i.replace(m,e):i+" progid:DXImageTransform.Microsoft."+e+")",centerOrigin=h.transform.centerOrigin)g[centerOrigin==
"margin"?"marginLeft":"left"]=-(b.offsetWidth/2)+b.clientWidth/2+"px",g[centerOrigin=="margin"?"marginTop":"top"]=-(b.offsetHeight/2)+b.clientHeight/2+"px";if(!c||c.T)g.left=a[4]+"px",g.top=a[5]+"px"}});k&&(h.cssHooks.transform=k);l=k&&k.get||h.css;h.fx.step.transform=function(a){var c=a.elem,d=a.start,g=a.end,f,e=a.pos,m,v,w,x,o=!1,y=!1,n;m=v=w=x="";if(!d||typeof d==="string"){d||(d=l(c,b));if(z)c.style.zoom=1;f=g.split(d);if(f.length==2)g=f.join(""),a.origin=d,d="none";d=="none"?d={translate:[0,
0],rotate:0,scale:[1,1],skew:[0,0]}:(d=/\(([^,]*),([^,]*),([^,]*),([^,]*),([^,p]*)(?:px)?,([^)p]*)(?:px)?/.exec(d),d=i([d[1],d[2],d[3],d[4],d[5],d[6]]));a.start=d;if(~g.indexOf("matrix"))g=i(u(g));else{g=g.split(")");f=[0,0];for(var A=0,s=[1,1],t=[0,0],B=g.length-1,C=h.trim,j,r;B--;)j=g[B].split("("),r=C(j[0]),j=j[1],r=="translateX"?f[0]+=parseInt(j,10):r=="translateY"?f[1]+=parseInt(j,10):r=="translate"?(j=j.split(","),f[0]+=parseInt(j[0],10),f[1]+=parseInt(j[1]||0,10)):r=="rotate"?A+=q(j):r=="scaleX"?
s[0]*=j:r=="scaleY"?s[1]*=j:r=="scale"?(j=j.split(","),s[0]*=j[0],s[1]*=j.length>1?j[1]:j[0]):r=="skewX"?t[0]+=q(j):r=="skewY"?t[1]+=q(j):r=="skew"&&(j=j.split(","),t[0]+=q(j[0]),t[1]+=q(j[1]||"0"));g={translate:f,rotate:A,scale:s,skew:t}}a.end=g;for(n in d)(n=="rotate"?d[n]==g[n]:d[n][0]==g[n][0]&&d[n][1]==g[n][1])&&delete d[n]}d.translate&&(m=" translate("+(d.translate[0]+(g.translate[0]-d.translate[0])*e+0.5|0)+"px,"+(d.translate[1]+(g.translate[1]-d.translate[1])*e+0.5|0)+"px)",o=!0);d.rotate!=
void 0&&(v=" rotate("+(d.rotate+(g.rotate-d.rotate)*e)+"rad)",y=!0);d.scale&&(w=" scale("+(d.scale[0]+(g.scale[0]-d.scale[0])*e)+","+(d.scale[1]+(g.scale[1]-d.scale[1])*e)+")",y=!0);d.skew&&(x=" skew("+(d.skew[0]+(g.skew[0]-d.skew[0])*e)+"rad,"+(d.skew[1]+(g.skew[1]-d.skew[1])*e)+"rad)",y=!0);a=a.origin?a.origin+m+x+w+v:m+v+w+x;k&&k.set?k.set(c,a,{M:y,T:o}):c.style[b]=a};h.transform={centerOrigin:"margin"}})(jQuery);