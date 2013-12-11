angular.module('indicadores').controller(

  // controller name
  'IndicadoresCtrl',

  // dependencies injection
  ['$scope',

// controller definition
function($scope) {

    $scope.pageName = 'Indicadores de Performance';

    

    $scope.mockData = function() {
        var data = [];
        var series = 5;
        for( var i = 0; i<series; i++) {
          data[i] = { label: "Series"+(i+1), data: Math.floor(Math.random()*100)+1 };
        }
        $scope.chart_data=data;
        //return data;
      };

    //inicializa array mock
    $scope.mockData();

    $scope.user = {
      dateOfBirth: new Date(1970, 0, 1)
   }

    console.log('shared/components/flot-chart/controller/chart_data:'+$scope.chart_data);

}]);