// UTILS
// -------------------------------------------------------------------------------------------

var utils = {};

// Loop over object and checking for matching properties
utils.getMatchingKey = function (which, keyCode, keys) {
	// Loop over and return if matched.
	for (var k in keys) {
		var key = keys[k];
		if (which === key.which && keyCode === key.keyCode) {
			return k;
		}
	}
};

// Returns true/false if k is a del keyDown
utils.isDelKeyDown = function (which, keyCode) {
	var keys = {
		'backspace': {
			'which': 8,
			'keyCode': 8
		},
		'delete': {
			'which': 46,
			'keyCode': 46
		}
	};
	return utils.getMatchingKey(which, keyCode, keys);
};

// Returns true/false if k is a del keyPress
utils.isDelKeyPress = function (which, keyCode) {
	var keys = {
		'backspace': {
			'which': 8,
			'keyCode': 8,
			'shiftKey': false
		},
		'delete': {
			'which': 0,
			'keyCode': 46
		}
	};
	return utils.getMatchingKey(which, keyCode, keys);
};

// Returns numeric value of css style
utils.getNumCSSVal = function (val) {
	if (!val || val == 'auto' || val.indexOf('px') == -1) return 0;
	val = val.replace('px', '');
	val = parseInt(val, 10);
	val = Math.abs(val);
	return val;
};

// APP Module - sb-app
// -------------------------------------------------------------------------------------------

var app = angular.module('sb-app', []);

// Directive - sb-ripple
// -------------------------------------------------------------------------------------------

app.directive('sbRipple', function(){
	return {
		restrict: 'A',
		link: function(scope, elem, attrs, controller){
			//make sure element has relative positioning
			if (window.getComputedStyle(elem[0]).position == 'static') {
				elem.css('position', 'relative');
			}

			//bind behaviors
			elem.on('click', clickHandler);

			//clean up binding
			scope.$on('destroy', function(e){
				elem.off('click', clickHandler);
			});

			//handler
			function clickHandler(e){
				//exit if elem is disabled
				var disabled = (attrs.disabled == undefined) ? false : true;
				if (disabled) return;

				//elems to cleanup
				var oldRippleContainer = elem[0].querySelector('.ui-ripple-container');
				var oldRipple = elem[0].querySelector('.ui-ripple');

				//cancel if last one hasn't finish
				if (oldRipple && oldRipple.getAttribute('anim-status') == 'on') {
					return false;
				}

				//remove old elem in case left in the dom
				if (oldRippleContainer) {
					elem[0].removeChild(oldRippleContainer);
				}

				//vars
				var animEndEvts = 'webkitAnimationEnd animationend';
				var tmpl_ripple = '<div class="ui-ripple-container"><div class="ui-ripple"></div></div>';
				var rippleContainer = angular.element(tmpl_ripple);
				var ripple = rippleContainer.find('div');

				//apply location and anim
				var posX = e.layerX;
				var posY = e.layerY;
				ripple.css('left', posX + 'px');
				ripple.css('top', posY + 'px');

				//add elem
				elem.append(rippleContainer);

				//start anim
				ripple.addClass('ui-visible');
				ripple.attr('anim-status', 'on');

				//bind self-removal
				elem.one(animEndEvts, function(e){
					ripple.attr('anim-status', 'off');
					rippleContainer.remove();
				});
			}
		}
	}
});

// Directive - sb-currency
// -------------------------------------------------------------------------------------------

app.directive('sbCurrency', function(){
	return {
		restrict: 'A',
		require: 'ngModel',
		controller: ['$scope', function($scope){

		}],
		link: function(scope, elem, attrs, ngModelCtrl){
			//get directive params
			var symbol = attrs.sbCurrencySymbol || '';
			var rate = attrs.sbCurrencyRate || 1;
			var modelToken = attrs.ngModel;

			//regex patterns
			var regex = {
				num: /^[1-9]\d*(?:\.\d{0,2})?$/
			};

			//process symbols
			if (symbol.indexOf('$') == -1) {
				symbol += ' ';
			}

			//filtering invalid model value
			var cancelModelWatch = scope.$watch(modelToken, modelWatchHandler);

			//formatters
			ngModelCtrl.$formatters.push(applyRate);
			ngModelCtrl.$formatters.push(addPrefix);

			//parsers
			ngModelCtrl.$parsers.push(removePrefix);
			ngModelCtrl.$parsers.push(revertRate);

			//bind input events
			elem
				.on('keydown', keydownInputHandler)
				.on('keypress', keyPressInputHandler)
				.on('paste', pasteInputHandler)
				.on('focus select selectstart', selectInputHandler);

			//on scope destroy
			scope.$on('destroy', function(e){
				//clean up watches and bindings
				cancelModelWatch();
				elem
					.off('keydown', keydownInputHandler)
					.off('keypress', keyPressInputHandler)
					.off('paste', pasteInputHandler)
					.off('focus select selectstart', selectInputHandler);
			});

			//model watch handler
			function modelWatchHandler(newValue, oldValue) {
				var arr = String(newValue).split('');

				//handles negative and fractions
				if (arr.length === 0) return;
				if (arr.length === 1 && (arr[0] == '-' || arr[0] === '.' )) return;
				if (arr.length === 2 && newValue === '-.') return;

				//if input is not a number
				if (isNaN(newValue)) {
					//ignore new value
					ngModelCtrl.$setViewValue(oldValue);
				}
			}

			//formatters and parsers functions
			function addPrefix(modelValue) {
				if (isNaN(modelValue)) {
					modelValue = 0;
				}
				modelValue += '';
				if (modelValue) {
					var viewValue = symbol + modelValue;
					return viewValue;
				} else {
					return symbol;
				}
			}
			function removePrefix(viewValue) {
				if(viewValue && viewValue.indexOf(symbol) !== -1 && viewValue.length > symbol.length) {
					var modelValue = viewValue.replace(symbol, '');
					return parseInt(modelValue, 10);
				} else {
					return 0;
				}
			}
			function applyRate(val) {
				if (isNaN(val)) {
					if (val && val.indexOf(symbol) != -1) {
						val = val.replace(symbol, '');
						val = parseFloat(val);
					}
				}
				return symbol + (val * rate).toFixed(0);
			}
			function revertRate(val) {
				if (isNaN(val)) {
					val = 0;
				}
				return val / rate;
			}

			//input handlers
			function keydownInputHandler(e) {
				var key = e.which || e.keyCode;
				// If delete key
				if (key && utils.isDelKeyDown(e.which, e.keyCode)) {
					//if deletion not permitted
					if (!processDelKey(e, symbol)) {
						//suppress keydown
						e.preventDefault();
					}
				}
			}
			function keyPressInputHandler(e) {
				var key = e.which || e.keyCode;
				// If delete key
				if (key && utils.isDelKeyPress(e.which, e.keyCode)) {
					//if deletion not permitted
					if (!processDelKey(e, symbol)) {
						//suppress keydown
						e.preventDefault();
					}
				}
			}
			function pasteInputHandler(e) {
				//suppress pasting
				e.preventDefault();
			}
			function selectInputHandler(e) {
				//clear selection and set cursor after symbol
				var pos = symbol.length;
				e.target.setSelectionRange(pos, pos);
			}

			//check if can delete further
			function processDelKey(e, symbol) {
				var viewValue = ngModelCtrl.$viewValue;
				if (viewValue.length > symbol.length) {
					return true;
				} else {
					return false;
				}
			}
		}
	}
});

// Directive - sb-input
// -------------------------------------------------------------------------------------------

app.directive('sbInput', function(){
	return {
		restrict: 'E',
		replace: true,
		scope: {
			model: '=sbInputWatch',
			rate: '@sbInputRate',
			decnum: '@sbInputDecnum'
		},
		template: '<div class="inputContainer"><input class="text" ng-model="value"><span class="prefix"></span><i class="ico"></i></div>',
		controller: ['$scope', function($scope){
			//apply rate to value
			$scope.applyRate = function(){
				$scope.value *= $scope.rate;
			};
			//apply decimal num formatting to value
			$scope.applyFormat = function(){
				if (isNaN($scope.value)) {
					$scope.value = 0;
				}
				$scope.value = parseFloat($scope.value);
				$scope.value = $scope.value.toFixed($scope.decnum);
			};
			//validate and update model values
			$scope.updateModelValue = function(){
				//validate model value as a number and copy to value
				if ($scope.model) {
					$scope.value = isNaN($scope.model) ? 0 : $scope.model;
				} else {
					$scope.value = 0;
				}

				//validate rate as a factor number
				if ($scope.rate) {
					$scope.rate = isNaN($scope.rate) ? 0 : $scope.rate;
				} else {
					$scope.rate = 1;
				}
				$scope.rate = parseFloat($scope.rate);

				//validate decimal number
				if ($scope.decnum) {
					$scope.decnum = isNaN($scope.decnum) ? 0 : $scope.decnum;
				} else {
					$scope.decnum = 0;
				}
				$scope.decnum = parseInt($scope.decnum, 10);

				//updates
				$scope.applyRate();
				$scope.applyFormat();
			};

			//watch model value and call update
			var cancelModelWatch = $scope.$watch('model', function(){
				$scope.updateModelValue();
			});
			$scope.$on('destroy', function(e){
				cancelModelWatch();
			});
		}],
		link: function(scope, elem, attrs, ctrls){
			//get attrs
			var prefixString = attrs.sbInputPrefix;
			var iconString = attrs.sbInputIcon;
			var disabled = (attrs.disabled == undefined) ? false : true;

			//get elems
			var prefixElem = elem.find('span');
			var iconElem = elem.find('i');
			var input = elem.find('input');

			//prefix
			if (prefixString && prefixString.length >= 1) {
				prefixElem.text(prefixString);
				applyInputOffset(prefixString);
			} else {
				prefixElem.remove();
			}

			//icon
			if (iconString && iconString.length >= 1) {
				iconElem.attr('data-icon', iconString);
				applyInputOffset();
			} else {
				iconElem.remove();
			}

			//apply disabled flag
			if (disabled) {
				input.attr('disabled', 'disabled');
			}

			//bind behaviors
			input
				.on('focus', inputFocusHandler)
				.on('blur', inputBlurHandler)
				.on('input', inputInputHandler);
			scope.$on('destroy', function(e){
				input
					.off('focus', inputFocusHandler)
					.off('blur', inputBlurHandler)
					.off('input', inputInputHandler);
			});

			//handlers
			function inputFocusHandler(e){
				var prefix = angular.element(e.target).parent().find('span');
				var icon = angular.element(e.target).parent().find('i');
				var target = prefix.length ? prefix : icon;
				if (target.length) {
					target.addClass('active');
				}
			}
			function inputBlurHandler(e){
				var prefix = angular.element(e.target).parent().find('span');
				var icon = angular.element(e.target).parent().find('i');
				var target = prefix.length ? prefix : icon;
				if (target.length) {
					target.removeClass('active');
				}
			}
			function inputInputHandler(e){
				scope.applyFormat();
			}

			//function - applyInputOffset
			function applyInputOffset(string){
				//get element mode
				var isIcon = string ? false : true;
				var preElem = isIcon ? iconElem : prefixElem;

				//prep for offset calculation
				var inputStyle = window.getComputedStyle(input[0]);
				var preStyle;
				var offset = 0;

				//if has pre element
				if (preElem.length) {
					//get pre element styles
					preStyle = window.getComputedStyle(preElem[0]);
					//calculate offset
					offset += utils.getNumCSSVal(preStyle["width"]);
					offset += utils.getNumCSSVal(preStyle["margin-left"]);
					offset += utils.getNumCSSVal(preStyle["left"]);
					offset += utils.getNumCSSVal(inputStyle["padding-left"]) / 2;
					//apply offset
					input.css("padding-left", offset+'px');
				}
			}
		}
	}
});

// Directive - sb-timer
// -------------------------------------------------------------------------------------------

app.directive('sbTimer', ['$interpolate', function($interpolate){
	return {
		restrict: 'E',
		template: '<span></span>',
		replace: true,
		scope: {
			partyMode: '=sbTimerAnimated'
		},
		controller: ['$scope', function($scope){
		}],
		link: function($scope, $element, $attrs, $controller){
			//view classes and templates
			var _classes = [ 'soon', 'sooner', 'passed' ];
			var _tmpls = {
				dhms : '{{days}}d<b>:</b>{{hrs}}h<b>:</b>{{mins}}m<b>:</b>{{secs}}s',
				hms : '{{hrs}}h<b>:</b>{{mins}}m<b>:</b>{{secs}}s',
				ms : '{{mins}}m<b>:</b>{{secs}}s',
				s : '{{secs}}s'
			};

			//timer data
			var _timer = {
				id: $attrs.sbTimerId,
				interval: $attrs.sbTimerInterval ? $attrs.sbTimerId : 1000,
				startTime: $attrs.sbTimerStartTime ? $attrs.sbTimerStartTime : new Date().getTime(),
				eventTime: $attrs.sbTimerEventTime
			};

			//apply view variations
			var _applyViewVariations = function(data){
				//check current timeleft length to determine display units required
				var dispD = Math.abs((data.timeleft / (3600000 * 24))) >= 1,
					dispH = Math.abs((data.timeleft / 3600000)) >= 1,
					dispM = Math.abs((data.timeleft / 60000)) >= 1,
					dispS = Math.abs((data.timeleft / 1000)) >= 1;

				//choose view template based on display units
				var tmpl = _tmpls.s;
				if (dispM) tmpl = _tmpls.ms;
				if (dispH) tmpl = _tmpls.hms;
				if (dispD) tmpl = _tmpls.dhms;

				//check if decoration classes is required
				var isSoon = (data.timeleft >= 0) && (data.timeleft < (3600000 / 2)),
					isSooner = (data.timeleft >= 0) && (data.timeleft < 60000),
					isPassed = data.timeleft < 0;

				//choose decoration class
				var cls = '';
				if (isPassed) {
					cls = _classes[2];
				} else {
					if (isSoon) cls = _classes[0];
					if (isSooner) cls = _classes[1];
				}

				//compile chosen template into an interpolation function
				var interpolationFn = $interpolate(tmpl);

				//update DOM
				$element
					.html(interpolationFn($scope))
					.removeClass(_classes.join(' '));

				//add animated class if enabled
				if ($scope.partyMode) {
					$element.addClass('animated');
				} else {
					$element.removeClass('animated');
				}

				//trigger CSS layout and paint
				window.getComputedStyle($element[0]).width;
				//update new CSS class
				$element.addClass(cls);
			};

			//called every interval
			var _tick = function(){
				//update timeleft in model
				$scope.timeleft = $scope.timeleft - _timer.interval;

				//calculate timer fields
				if ($scope.timeleft >= 0) {
					$scope.secs = Math.round(($scope.timeleft / 1000) % 60);
					$scope.mins = Math.floor((($scope.timeleft / (60000)) % 60));
					$scope.hrs = Math.floor((($scope.timeleft / (3600000)) % 24));
					$scope.days = Math.floor((($scope.timeleft / (3600000)) / 24));
				} else {
					$scope.secs =  Math.round(($scope.timeleft / 1000) % 60);
					$scope.mins = Math.ceil((($scope.timeleft / (60000)) % 60));
					$scope.hrs = Math.ceil((($scope.timeleft / (3600000)) % 24));
					$scope.days = Math.ceil((($scope.timeleft / (3600000)) / 24));
				}

				if ($scope.timeleft < 0) {
					$scope.secs *= -1;
					$scope.mins *= -1;
					$scope.hrs *= -1;
					$scope.days *= -1;
				}

				//interpolate view template with current scope data
				_applyViewVariations($scope);

				//keep ticking...
				_timer.timeoutId = setTimeout(function(){
					_tick();
				}, _timer.interval);
			}

			//init timeleft value in model
			$scope.timeleft = _timer.eventTime - _timer.startTime;
			//init timer
			_tick();
		}
	}
}]);

// Controller - list
// -------------------------------------------------------------------------------------------

app.controller('ListCtrl', ["$scope", function($scope){
	//model data
	$scope.mkts = [
		{
			"title": "1. Branded",
			"id": "451247",
			"open": 26,
			"fluc1": 2,
			"win": 12,
			"place": 8,
			"evtTime": new Date().getTime() + 194200000
		},
		{
			"title": "2. Carnival Knight",
			"id": "52x4",
			"open": 9,
			"fluc1": 2,
			"win": 26,
			"place": 10,
			"evtTime": new Date().getTime() + 1800000
		},
		{
			"title": "3. Copper Thief",
			"id": "4578f4",
			"open": 12,
			"fluc1": 1.8,
			"win": 12,
			"place": 8,
			"evtTime": new Date().getTime() + 65000
		},
		{
			"title": "4. The Governor",
			"id": "6587c",
			"open": 15,
			"fluc1": 3,
			"win": 16,
			"place": 9,
			"evtTime": new Date().getTime() - 14200000
		},
		{
			"title": "5. Mickey Can Do",
			"id": "788b9",
			"open": 26,
			"fluc1": 2,
			"win": 32,
			"place": 8,
			"evtTime": new Date().getTime() - 1200000
		}
	];

	$scope.animated = true;
}]);

// Controller - form
// -------------------------------------------------------------------------------------------

app.controller('FormCtrl', ["$scope", function($scope){
	//model data
	$scope.amount = 100;
	$scope.animated = false;

	//model methods
	$scope.toggleAnimated = function(){
		$scope.animated = !$scope.animated;
	};
}]);

