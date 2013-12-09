angular.module('indicadores').config(

  // dependencies injection
  ['$routeProvider',

// routes definition
function ($routeProvider) {

  $routeProvider
    .when(
      '/indicadores',
      {
        controller: 'IndicadoresCtrl',
        templateUrl: 'app/indicadores/template.html'
      }
    )
    
  ;

}]);