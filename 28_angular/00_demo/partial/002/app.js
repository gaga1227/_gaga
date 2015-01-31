// STATICS
// -------------------------------------------------------------------------------------------

var statics = {
	depositrate: 0.2
};

// UTILS
// -------------------------------------------------------------------------------------------

var utils = {};

// calculates stamp duty based on victoria's duty rate
utils.getStampDuty = function (price, isPPR) {
	// exit
	if (price == undefined || isNaN(price)) return 0;
	// vars
	var base;
	var rate;
	var scalebase;
	var duty = 0;
	// calculate based on price
	price = Math.abs(price);
	if (price >= 0 && price <= 25000) {
		base = 0;
		rate = 0.014;
		scalebase = 0;
	} else if (price > 25000 && price <= 130000) {
		base = 350;
		rate = 0.024;
		scalebase = 25000;
	} else if (price > 130000 && price <= 960000) {
		base = 2870;
		rate = 0.06;
		scalebase = 130000;
	} else {
		base = 0;
		rate = 0.055;
		scalebase = 0;
	}
	// if is PPR
	if (isPPR) {
		if (price > 13000 && price <= 440000) {
			base = 2870;
			rate = 0.05;
			scalebase = 130000;
		} else if (price > 440000 && price <= 550000) {
			base = 18370;
			rate = 0.06;
			scalebase = 440000;
		}
	}
	// calculate final duty price
	duty = base + (price - scalebase) * rate;
	// return result
	return duty;
};

// calculate property price based on total savings and required duty
utils.getPropertyPrice = function (saving, isPPR) {
	// exit
	if (saving == undefined || isNaN(saving)) return 0;
	// vars
	var price;
	var duty;
	var depositrate = statics.depositrate;
	var deposit;
	var decrement = 1000;
	// calculate based on saving
	saving = Math.abs(saving);
	for (price = saving / depositrate; price > 0; price -= decrement) {
		deposit = price * depositrate;
		duty = this.getStampDuty(price, isPPR);
		if ((deposit + duty) > saving) {
			console.group('Trying Price: ' + price);
			console.log('Required Cash Savings: ' + (deposit+duty));
			console.log('Available Savings: ' + saving);
			console.groupEnd();

			continue;
		} else {
			console.group('Final Affordable Price: ' + price);
			console.log('Required Cash Savings: ' + (deposit+duty));
			console.log('Available Savings: ' + saving);
			console.groupEnd();

			return price;
		}
	}
}

// APP Module - app
// -------------------------------------------------------------------------------------------

var app = angular.module('app', []);

// Controller - list
// -------------------------------------------------------------------------------------------

app.controller('mainCtrl', ["$scope", "$timeout", function($scope, $timeout){
	// vars
	var depositrate = statics.depositrate;

	// model
	$scope.cashsaving = 151200;
	$scope.maxhomeloan = 480000;

	$scope.ppr = false;
	$scope.titletransfer = 1366;
	$scope.mortgageregister = 111;
	$scope.legalfees = 1000;

	$propertypriceFromSaving = 0;
	$propertypriceFromLoan = 0;
	$scope.propertyprice = 0;
	$scope.stampduty = 0;
	$scope.totalcost = 0;

	// methods
	$scope.calculateAll = function() {
		$scope.propertypriceFromSaving = utils.getPropertyPrice($scope.cashsaving, $scope.ppr);
		$scope.propertypriceFromLoan = $scope.maxhomeloan / (1 - depositrate);
		$scope.propertyprice = Math.min($scope.propertypriceFromSaving, $scope.propertypriceFromLoan);
		$scope.stampduty = utils.getStampDuty($scope.propertyprice, $scope.ppr);
		$scope.totalcost = $scope.propertyprice + $scope.stampduty +
			$scope.titletransfer +
			$scope.mortgageregister +
			$scope.legalfees;
	}

	// init
	$scope.calculateAll();
}]);

