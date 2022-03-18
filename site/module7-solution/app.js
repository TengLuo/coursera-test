(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
	.filter('currency', CurrencyFilter);

	const listItem = [
		{ name: "cookies", quantity: 10, pricePerItem: 5.2 },
		{ name: "apples", quantity: 5, pricePerItem: 3 },
		{ name: "broccoli", quantity: 3, pricePerItem: 4.5 },
		{ name: "orange juice", quantity: 2, pricePerItem: 7 },
		{ name: "potato salad", quantity: 1, pricePerItem: 8 }
	]
	

	ToBuyController.$inject = ['ShoppingListCheckOffService','currencyFilter'];
	function ToBuyController(ShoppingListCheckOffService, currencyFilter) {
		var toBuy = this;
		ShoppingListCheckOffService.initList(listItem);
		toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
		toBuy.removeToBuyItems = function (itemIndex) {
			ShoppingListCheckOffService.removeToBuyItems(itemIndex);
		}
	}


	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var bought = this;
		bought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
	}

	function ShoppingListCheckOffService() {
		var service = this;
		var toBuyItems =[];
		var boughtItems =[];

		service.initList = function (toBuyList) {
			toBuyItems = toBuyList;	
		}

		service.getToBuyItems = function () {
			return toBuyItems;
		};

		service.removeToBuyItems = function (itemIndex) {
			boughtItems.push(toBuyItems[itemIndex]);
			toBuyItems.splice(itemIndex, 1);
		}

		service.getBoughtItems = function () {
			return boughtItems;
		};
	}

	function CurrencyFilter() {
		return function (input) {
			input = input || "";
			input = "$$$" + input;
			return input;
		};
	}


})();