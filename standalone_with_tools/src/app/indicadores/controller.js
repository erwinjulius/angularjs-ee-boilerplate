angular.module('indicadores').controller(

  // controller name
  'IndicadoresCtrl',

  // dependencies injection
  ['$scope',

// controller definition
function($scope) {

    $scope.pageName = 'Indicadores de Performance';

    var data = [];
        var series = 5;
        for( var i = 0; i<series; i++) {
          data[i] = { label: "Series"+(i+1), data: Math.floor(Math.random()*100)+1 };
        }
    $scope.chart_data=data;

}]);