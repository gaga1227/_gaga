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


// APP Module - sb-app
// -------------------------------------------------------------------------------------------

var app = angular.module('sb-app', []);

// Directive - sb-timer
// -------------------------------------------------------------------------------------------

app.directive('sbTimer', function(){
	return {
		restrict: 'AE',
		template: '<div></div>',
		scope: {},
		controller: ['$scope', function($scope){

		}],
		link: function(scope, elem, attrs, controller){

		}
	}
});

// Directive - sb-ripple
// -------------------------------------------------------------------------------------------

app.directive('sbRipple', function(){
	return {
		restrict: 'A',
		link: function(scope, elem, attrs, controller){
			elem.on('click', function(e){
				//cleanup
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
			});
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

			//process symbols
			if (symbol.indexOf('$') == -1) {
				symbol += ' ';
			}

			//main fn
			function addPrefix(modelValue) {
				if (isNaN(modelValue) || modelValue == 0) {
					modelValue = '';
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
						val.replace(symbol, '');
					}
				} else {
					val *= rate;
				}
				return val;
			}
			function revertRate(val) {
				if (isNaN(val)) {
					if (val && val.indexOf(symbol) != -1) {
						val.replace(symbol, '');
					}
				} else {
					val /= rate;
				}
				return val;
			}

			//formatters
			ngModelCtrl.$formatters.push(applyRate);
			ngModelCtrl.$formatters.push(addPrefix);

			//parsers
			ngModelCtrl.$parsers.push(removePrefix);
			ngModelCtrl.$parsers.push(revertRate);

			//filtering invalid model value
			var cancelModelWatch = scope.$watch(modelToken, function(newValue, oldValue) {
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
			});

			//bind input events
			elem.on('keydown', keydownInputHandler);
			elem.on('keypress', keyPressInputHandler);
			elem.on('paste', pasteInputHandler);

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

			//check if can delete
			function processDelKey(e, symbol) {
				var viewValue = ngModelCtrl.$viewValue;
				if (viewValue.length > symbol.length) {
					return true;
				} else {
					return false;
				}
			}

			//on scope destroy
			scope.$on('destroy', function(e){
				//clean up watches and bindings
				cancelModelWatch();
				elem.off('keydown', keydownInputHandler);
				elem.off('keypress', keyPressInputHandler);
				elem.off('paste', pasteInputHandler);
			});
		}
	}
});

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
		},
		{
			"title": "2. Carnival Knight",
			"id": "52x4",
			"open": 9,
			"fluc1": 2,
			"win": 26,
			"place": 10,
		},
		{
			"title": "3. Copper Thief",
			"id": "4578f4",
			"open": 12,
			"fluc1": 1.8,
			"win": 12,
			"place": 8,
		},
		{
			"title": "4. The Governor",
			"id": "6587c",
			"open": 15,
			"fluc1": 3,
			"win": 16,
			"place": 9,
		},
		{
			"title": "5. Mickey Can Do",
			"id": "788b9",
			"open": 26,
			"fluc1": 2,
			"win": 32,
			"place": 8,
		}
	];
}]);

// Controller - form
// -------------------------------------------------------------------------------------------

app.controller('FormCtrl', ["$scope", function($scope){
	//model data
	$scope.deposit = 0;
}]);

