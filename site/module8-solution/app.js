(function () {
	'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController',NarrowItDownController )
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItems)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

	// controller
	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var filter = this;
		var searchTerm = '';
		filter.warning = "";

		filter.searchItems = function (searchTerm) {
			console.log('Search term is:', searchTerm);
    		var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
    		promise.then(function (response) {
    			filter.found = response;
    			console.log(filter.found.length);
    			if( filter.found.length <= 0) {
    				filter.warning = "Nothing found";
    			} else {
    				filter.warning = "";
    			}
    		})
    		.catch(function (error) {
      			console.log(error);
    		})
  		};

  		filter.removeItem = function (itemIndex) {
			filter.found.splice(itemIndex, 1);
		}

	}

	// service
	MenuSearchService.$inject = ['$http','ApiBasePath'];
	function MenuSearchService($http, ApiBasePath) {
		var service = this;
		var foundItems = [];
		service.getMatchedMenuItems = function (searchTerm) {
			return $http({
      			method: "GET",
      			url: (ApiBasePath + "/menu_items.json"),
    		}).then(function (result) {
    			var foundItems = [];
    			if (searchTerm !== undefined || searchTerm != null) {
    				if (searchTerm === "") {
    					return foundItems;
    				}
    				var menuItems = result.data.menu_items;
    				foundItems = menuItems.filter(
    					(element) => 
    						element.description.toLowerCase().includes(searchTerm.toLowerCase()));
    			}
    			return foundItems;
    		});
		}
	}

	// ddo template
	function FoundItems() {
		var ddo = {
			restrict: 'E',
			templateUrl: 'foundItems.html',
			scope: {
				list: '<foundItems',
				onRemove: '&'
			},
			transclude: true
		}

		return ddo;
	}

})();