(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);

MyInfoService.$inject = ['$http', 'ApiPath'];
function MyInfoService($http, ApiPath) {
  var service = this;
  service.info;

  service.getFavorite = function (short_name) {
    return $http.get(ApiPath + '/menu_items/' + short_name +'.json').then(function (response) {
      return response.data;
    });
  };

  service.saveInfo = function (info) {
    service.info = info;
  }

  service.getInfo = function () {
    return service.info;
  }
}



})();
