/* ------------------------------------------------------------------------------ */
/* Common sitewise functions */
/* - init rollovers
/* - Flash size functions
/* ------------------------------------------------------------------------------ */
function initRollovers(){var e,d,a,b,c=getSectionId();if(!document.getElementsByTagName){return}e=document.getElementsByTagName("a");for(a=0;a<e.length;a++){d=e[a];if(d.className&&(" "+d.className+" ").indexOf(" rollover ")!=-1){if(d.childNodes&&d.childNodes.length==1&&(d.childNodes[0].nodeName.toLowerCase()=="img"||d.childNodes[0].nodeName.toLowerCase()=="input")){b=new Image();b.src=d.childNodes[0].src.replace(/(\.[^.]+)$/,"_f1$1");if(d.childNodes[0].id&&d.childNodes[0].id==c){d.childNodes[0].src=d.childNodes[0].src.replace(/(\.[^.]+)$/,"_f2$1")}else{d.onmouseover=mouseover;d.onmouseout=mouseout;d.onfocus=mouseover;d.onblur=mouseout}}}}}function findTarget(b){var a;if(window.event&&window.event.srcElement){a=window.event.srcElement}else{if(b&&b.target){a=b.target}}if(!a){return null}while(a!=document.body&&a.nodeName.toLowerCase()!="a"){a=a.parentNode}if(a.nodeName.toLowerCase()!="a"){return null}return a}function mouseover(c){var b=findTarget(c),a;if(!b){return}a=b.childNodes[0];if(a.src.indexOf("_f1.")<0){a.src=a.src.replace(/(\.[^.]+)$/,"_f1$1")}}function mouseout(c){var b=findTarget(c),a;if(!b){return}a=b.childNodes[0];a.src=a.src.replace(/_f1(\.[^.]+)$/,"$1")}function getSectionId(){if(!document.getElementsByTagName){return}var b=location.href,d=document.getElementsByTagName("base"),c,a;if(d.length>0){c=new RegExp("^"+d[0].href+"((\\w|-)+)");a=c.exec(b);if(RegExp.$1){return RegExp.$1}else{return""}}else{return""}}function setFlashWidth(b,a){document.getElementById(b).style.width=a+"px"}function setFlashHeight(b,a){document.getElementById(b).style.height=a+"px"}function setFlashSize(c,b,a){setFlashWidth(c,b);setFlashHeight(c,a)}function canResizeFlash(){var b=navigator.userAgent.toLowerCase(),a=b.indexOf("opera");if(document.getElementById){if(a==-1){return true}else{if(parseInt(b.substr(a+6,1))>=7){return true}}}return false}function initPage(){initRollovers()}window.onload=initPage;
/* ------------------------------------------------------------------------------ */
/* debug - log */
/* ------------------------------------------------------------------------------ */
if(!window.console){console={log:function(a){alert(a)}}};
/* ------------------------------------------------------------------------------ */
/* common - get Platform */
/* ------------------------------------------------------------------------------ */
var Platform=new function(){function b(c){return(navigator.platform.indexOf(c)>=0)}function a(c){return(c in document.documentElement)}this.iPhone=b("iPhone");this.iPod=b("iPod");this.iPad=b("iPad");this.iOS=this.iPhone||this.iPod||this.iPad;this.android=b("android");this.touchOS=a("ontouchstart");this.debugLog=function(){console.log("iPhone: "+this.iPhone);console.log("iPod: "+this.iPod);console.log("iPad: "+this.iPad);console.log("iOS: "+this.iOS);console.log("android: "+this.android);console.log("touchOS: "+this.touchOS)};return this};
/* ------------------------------------------------------------------------------ */
/* insertFirstLastChild */
/* ------------------------------------------------------------------------------ */
function insertFirstLastChild(b){var a=$(b);$.each(a,function(c,d){var f=$(d),g=f.find("> :first-child"),e=f.find("> :last-child");if(!g.hasClass("first-child")){g.addClass("first-child")}if(!e.hasClass("last-child")){e.addClass("last-child")}})};
/* ------------------------------------------------------------------------------ */
/* Match Columns Height*/
/* ------------------------------------------------------------------------------ */
function matchColumnHeights(){var f=$(".columnLeft"),c=$(".columnRight"),e=f.innerHeight(),b=c.innerHeight(),a=e-f.height(),d=b-c.height();(e>b)?c.height(e-d):f.height(b-a)};
/* doc.ready calls */
$(document).ready(function(){
	insertFirstLastChild('#sideNav');
	if (!$('body').hasClass('home')) matchColumnHeights();
});