(function() {

  // Module declaration and dependencies
  var app = angular.module('gemStore', ['store-products']);

  // Controller Definition & Dependency Injection ($http)
  app.controller('StoreController', [ '$http', function($http){
    var store = this;
    store.products = [];

    $http.get('products.json').success(function(data){
      store.products = data;
    });

  }]);

})();