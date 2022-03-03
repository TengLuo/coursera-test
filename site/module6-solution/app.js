(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {

		$scope.check = function () {
			$scope.message = checkMenuItem($scope.lunchMenu);
		}

		$scope.messageStyle = 'regular-message';

		var checkMenuItem = function (lunchMenu) {
			console.log($scope.lunchMenu);
			if (lunchMenu === "" || $scope.lunchMenu === undefined) {
				$scope.messageStyle = 'alert-message';
				$scope.inputFieldStyle = 'alert-inputField';
				return "Please enter data first";
			} else {
				$scope.messageStyle = 'regular-message';
				$scope.inputFieldStyle = 'regular-inputField';
			}
			var items = lunchMenu.split(",");
			var count = 0;
			items.forEach(item => {
			if (item.trim() != "") {
				count++;
			}
		});
			return count > 3 ? "Too much!" : "Enjoy!";	
		}
	}

})();