describe('MyInfoService get valid item check', function () {

  var myInfoService;
  var $httpBackend;
  var ApiBasePath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      myInfoService = $injector.get('MyInfoService');
      $httpBackend = $injector.get('$httpBackend');
      ApiBasePath = $injector.get('ApiBasePath');
    });
  });

  it('should return L1 item object', function() {
    $httpBackend.whenGET(ApiBasePath + 'menu_items/L1.json').respond({short_name: "L1"});
    myInfoService.getFavorite('L1').then(function(response) {
      expect(response).toEqual({short_name: "L1"});
    });
    $httpBackend.flush();
  });

});
