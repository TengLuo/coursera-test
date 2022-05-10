(function () {
"use strict";

angular.module('public').directive("checkItem", CheckItemDirective);
CheckItemDirective.$inject = ["MyInfoService","$q"];
function CheckItemDirective(MyInfoService, $q) {
  return {
    require: 'ngModel',
    restrict: "A",
    scope: {
      checkItem: "="
    },
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$asyncValidators.checkItem = function(modelValue, viewValue) {
        return MyInfoService.getFavorite(modelValue)
              .then(function (response) {
                scope.checkItem = response;
                return $q.resolve();
              })
              .catch(function (response) {
                return $q.reject();
              });
      };
    }
  }
}
})();
