describe('MyInfoService get valid item check', function () {

  var myInfoService;
  var $httpBackend;
  var ApiBasePath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      myInfoService = $injector.get('MyInfoService');
      $httpBackend = $injector.get('$httpBackend');
      ApiBasePath = $injector.get('ApiPath');
    });
  });

  it('should return L1 item object', function() {
    var short_name = "L1";
    $httpBackend.whenGET(ApiBasePath + '/menu_items/' + short_name + '.json')
    .respond({"id":193,"short_name":"L1","name":"Orange Chicken","description":"chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra","price_small":null,"price_large":9.75,"small_portion_name":null,"large_portion_name":null,"created_at":"2022-05-08T08:27:47.790Z","updated_at":"2022-05-08T08:27:47.790Z","category_short_name":"L","image_present":true});
    myInfoService.getFavorite(short_name).then(function(response) {
      expect(response).toEqual({"id":193,"short_name":"L1","name":"Orange Chicken","description":"chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra","price_small":null,"price_large":9.75,"small_portion_name":null,"large_portion_name":null,"created_at":"2022-05-08T08:27:47.790Z","updated_at":"2022-05-08T08:27:47.790Z","category_short_name":"L","image_present":true});
    });
    $httpBackend.flush();
  });
});
