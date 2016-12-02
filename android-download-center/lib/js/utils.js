/* ------------------------------------------------------------------------------ */
/* common - get Platform */
/* ------------------------------------------------------------------------------ */
var Platform = function(){
	//detecting functions
	function checkPlatform(os) { return (navigator.userAgent.toLowerCase().indexOf(os.toLowerCase())>=0); }
	function checkEvent(e) { return (e in document.documentElement); }
	//add properties
	this.iPhone = checkPlatform('iPhone');
	this.iPad = checkPlatform('iPad');
	this.iPod = checkPlatform('iPod');
	this.iOS = this.iPhone||this.iPad||this.iPod;
	this.android = checkPlatform('android');
	this.touchOS = checkEvent('ontouchstart');
	this.addDOMClass = function(){
		var $html = $('html'), cls = '';
		if ( this.iPhone )	cls = 'iPhone';
		if ( this.iPad )	cls = 'iPad';
		if ( this.iPod )	cls = 'iPod';
		if ( this.iOS )		cls = 'iOS';
		if ( this.android )	cls = 'android';
		$html.addClass(cls);
	};
	this.debugLog = function(){
		console.log('iPhone: '+this.iPhone);
		console.log('iPad: '+this.iPad);
		console.log('iPod: '+this.iPod);
		console.log('iOS: '+this.iOS);
		console.log('android: '+this.android);
		console.log('touchOS: '+this.touchOS);
	};
	//css3 transition end event
	this.transEndEventNames = {
		'WebkitTransition' : 'webkitTransitionEnd',
		'MozTransition'    : 'transitionend',
		'OTransition'      : 'oTransitionEnd',
		'msTransition'     : 'MSTransitionEnd',
		'transition'       : 'transitionend'
	};
	this.transEndEventName = this.transEndEventNames[ Modernizr.prefixed('transition') ];

	//return self
	return this;
}();

/* ------------------------------------------------------------------------------ */
/* common - initBtnScroll */
/* ------------------------------------------------------------------------------ */
function initBtnScroll(cls) {
	//vars
	var btnScrollsCls = cls || '.btnScroll',
		$btnScrolls = $(btnScrollsCls),
		defaultTarget = '#container',
		defaultSpeed = 600;

	//exit if no btnScrolls or scrollTo not loaded
	if ( !$btnScrolls.length || !$().scrollTo ) return false;

	//process each btnScrolls instance
	$.each($btnScrolls, function(idx,ele){
		//vars
		var $ele = $(ele);
		//attach behavior to instance
		$ele.on('click',function(e){
			e.preventDefault();
			var target = $ele.attr('data-target') || defaultTarget;
			var speed = Number($ele.attr('data-speed') || defaultSpeed);
			$.scrollTo( $('#' + target), speed, {axis:'y'} );
		});
	});
}

/* ------------------------------------------------------------------------------ */
/* common - initBtnToggleContent */
/* ------------------------------------------------------------------------------ */
function initBtnToggleContent(cls) {
	var btnToggleContentCls = cls || '.btnToggleContent',
		$btnToggles = $(btnToggleContentCls),
		switchClass = 'collapsed',
		onText = 'Read Less',
		offText = 'Read More';

	if ( !$btnToggles.length ) return false;

	$.each($btnToggles, function(idx, ele) {
		var $ele = $(ele);
		var $target = $('#' + $ele.attr('data-target'));

		if (!$target.length) return false;

		$ele.on('click', function(e) {
			e.preventDefault();
			$target.toggleClass(switchClass);
			$ele.text($target.hasClass(switchClass) ? onText : offText);
		});
	});
}
