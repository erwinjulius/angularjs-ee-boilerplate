angular.module('indicadores').factory(

  // resource name
  'IndicadoresSearchResource', 

  // dependency injection
  ['$resource', 

function($resource) {

  // http://code.angularjs.org/1.2.1/docs/api/ngResource.$resource
  var rest = $resource(
    'rest/indicadores/search/:name'
  );

  return rest;

}]);