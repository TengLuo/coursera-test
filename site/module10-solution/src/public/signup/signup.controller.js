(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MyInfoService'];
function SignUpController(MyInfoService) {
  var signUpCtrl = this;

  signUpCtrl.submit = function () {
    // save user input info to MyinfoService
    MyInfoService.saveInfo(signUpCtrl.info);
    signUpCtrl.completed = true;
  };
}


})();