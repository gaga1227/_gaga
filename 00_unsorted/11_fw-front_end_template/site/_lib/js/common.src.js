/* ------------------------------------------------------------------------------ */
/* Common sitewise functions */
/* - init rollovers
/* - Flash size functions
/* ------------------------------------------------------------------------------ */
function initRollovers() {
	var all_links,
		link,
		idx,
		tmp_image,
		section_id = getSectionId();

	if (!document.getElementsByTagName) { return; }

	all_links = document.getElementsByTagName("a");

	for (idx = 0; idx < all_links.length; idx++) {
		link = all_links[idx];
		if (link.className && (' ' + link.className + ' ').indexOf(' rollover ') != -1) {
			if (link.childNodes && link.childNodes.length == 1 && (link.childNodes[0].nodeName.toLowerCase() == 'img' || link.childNodes[0].nodeName.toLowerCase() == 'input')) {
				// Pre-load state 2 images
				tmp_image = new Image();
				tmp_image.src = link.childNodes[0].src.replace(/(\.[^.]+)$/, "_f1$1");
				if (link.childNodes[0].id && link.childNodes[0].id == section_id) {
					// Don't attach a listener. Instead, set rollover state permanently
					link.childNodes[0].src = link.childNodes[0].src.replace(/(\.[^.]+)$/, "_f2$1");
				} else {								
					// Attach listeners
					link.onmouseover = mouseover;
					link.onmouseout = mouseout;
					link.onfocus = mouseover;
					link.onblur = mouseout;
				}
			}
		}	
	}
}
function findTarget(e) {
	var target;
	
	if (window.event && window.event.srcElement) {
		target = window.event.srcElement;
	} else if (e && e.target) {
		target = e.target;	   
	}
	if (!target) return null;
	while (target != document.body && target.nodeName.toLowerCase() != "a") {
		target = target.parentNode;   
	}
	if (target.nodeName.toLowerCase() != "a") return null;
	return target;
}
function mouseover(e) {
	var target = findTarget(e),
		img_tag;
	
	if (!target) return;
	img_tag = target.childNodes[0];
	if (img_tag.src.indexOf("_f1.") < 0) img_tag.src = img_tag.src.replace(/(\.[^.]+)$/, "_f1$1"); 
}
function mouseout(e) {
	var target = findTarget(e),
		img_tag;
	
	if (!target) return;
	img_tag = target.childNodes[0];
	img_tag.src = img_tag.src.replace(/_f1(\.[^.]+)$/, "$1");   
}
function getSectionId() {
	if (!document.getElementsByTagName) {
	  return;   
	}
	var current_url = location.href,
		baseRef = document.getElementsByTagName("base"),
		pattern,
		regexp_results;
	if (baseRef.length > 0) {
		pattern = new RegExp("^" + baseRef[0].href + "((\\w|-)+)");
		regexp_results = pattern.exec(current_url);
		
		if (RegExp.$1) {
			return RegExp.$1;
		} else {
			return "";
		}		
	} else {
		return "";
	}
}

/* 
Methods for resizing the flash stage at runtime.

setFlashWidth(divid, newW)
divid: id of the div containing the flash movie.
newW: new width for flash movie

setFlashWidth(divid, newH)
divid: id of the div containing the flash movie.
newH: new height for flash movie

setFlashSize(divid, newW, newH)
divid: id of the div containing the flash movie.
newW: new width for flash movie
newH: new height for flash movie

canResizeFlash()
returns true if browser supports resizing flash, false if not. 
*/

function setFlashWidth(divid, newW){
	document.getElementById(divid).style.width = newW+"px";
}
function setFlashHeight(divid, newH){
	document.getElementById(divid).style.height = newH+"px";		
}
function setFlashSize(divid, newW, newH){
	setFlashWidth(divid, newW);
	setFlashHeight(divid, newH);
}
function canResizeFlash(){
	var ua = navigator.userAgent.toLowerCase();
	var opera = ua.indexOf("opera");
	if( document.getElementById ){
		if(opera == -1) return true;
		else if(parseInt(ua.substr(opera+6, 1)) >= 7) return true;
	}
	return false;
}

function initPage() {
	initRollovers();
}
window.onload = initPage;

/* ------------------------------------------------------------------------------ */
/* debug - log */
/* ------------------------------------------------------------------------------ */
if(!window.console) { console = { log:function(msg){ alert(msg); } } };

/* ------------------------------------------------------------------------------ */
/* common - get Platform */
/* ------------------------------------------------------------------------------ */
var Platform = new function(){
	//detecting functions
	function checkPlatform(os) { return (navigator.platform.indexOf(os)>=0); }
	function checkEvent(e) { return (e in document.documentElement); }
	//add properties
	this.iPhone = checkPlatform('iPhone');
	this.iPod = checkPlatform('iPod');
	this.iPad = checkPlatform('iPad');
	this.iOS = this.iPhone||this.iPod||this.iPad;
	this.android = checkPlatform('android');
	this.touchOS = checkEvent('ontouchstart');
	this.debugLog = function(){
		console.log('iPhone: '+this.iPhone);
		console.log('iPod: '+this.iPod);
		console.log('iPad: '+this.iPad);
		console.log('iOS: '+this.iOS);
		console.log('android: '+this.android);
		console.log('touchOS: '+this.touchOS);
	}
	//return self
	return this;
}

/* ------------------------------------------------------------------------------ */
/* insertFirstLastChild */
/* ------------------------------------------------------------------------------ */
function insertFirstLastChild(selection) {
	var $tgts = $(selection);//cache selection
	$.each($tgts,function(idx,ele){//go through all selected items
		var $ele = $(ele),//cache current item
			$fstChild = $ele.find('> :first-child'),//find and cache first-child
			$lstChild = $ele.find('> :last-child');//find and cache last-child
		//add class if not already
		if (!$fstChild.hasClass('first-child')) { $fstChild.addClass('first-child'); }
		if (!$lstChild.hasClass('last-child')) { $lstChild.addClass('last-child'); }
	});	
}

/* ------------------------------------------------------------------------------ */
/* Match Columns Height*/
/* ------------------------------------------------------------------------------ */
function matchColumnHeights() {
	var $colL = $('.columnLeft'),//cache match ele 1
		$colR = $('.columnRight'),//cache match ele 2
		colLInner = $colL.innerHeight(),//get innerHeight
		colRInner = $colR.innerHeight(),
		colLPad = colLInner-$colL.height(),//get padding
		colRPad = colRInner-$colR.height();
	//match column height depending on innerHeight and padding
	(colLInner > colRInner) ? $colR.height(colLInner-colRPad) : $colL.height(colRInner-colLPad);	
}

/* doc.ready calls */
$(document).ready(function(){
	insertFirstLastChild('#sideNav');
	if (!$('body').hasClass('home')) matchColumnHeights();
});