//def module
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
			//console.log(ngModelCtrl, attrs);

			//get directive params
			var symbol = attrs.sbCurrencySymbol || '';

			//main fn
			function addPrefix(modelValue) {
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

			ngModelCtrl.$formatters.push(addPrefix);
			ngModelCtrl.$parsers.push(removePrefix);
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
	$scope.deposit = 100;
}]);

