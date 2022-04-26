(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoriesController', MainCategoriesController);

MainCategoriesController.$inject = ['data'];
function MainCategoriesController(data) {
  var mainCategories = this;
  mainCategories.categories = data;
}

})();
