(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['info'];
function MyInfoController(info) {
  var $ctrl = this;
  $ctrl.info = info;
}


})();
