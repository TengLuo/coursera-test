(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MyInfoService'];
function MyInfoController(MyInfoService) {
  var myInfoCtrl = this;
  myInfoCtrl.info = MyInfoService.getInfo();
}

})();
