(function () {
'use strict';

angular.module('MenuApp')
.controller('MainItemsController', MainItemsController);

MainItemsController.$inject = ['data'];
function MainItemsController(data) {
  var mainItems = this;
  mainItems.menuItems = data.menu_items;
  mainItems.categoryName = data.category.name;
}

})();
