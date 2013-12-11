angular.module('flot.chart').directive(
  
  // component name
  'flotChart', 

// component definition
function($parse){

  return {
    restrict: 'E',
    replace: true,
    transclude: false,
    //scope:{test:'@'},
    require: 'ngModel',
    template:'<div id="{{id}}" style="height: 250px; padding: 0px; position: relative;"></div>',
    link:function(scope, element, attrs, ngModel) {
      scope.$watch(function(){
                    return ngModel.$modelValue;
                },function(modelValue){
                    console.log("teste"+modelValue);
                    jQuery.plot(element, modelValue, {
                       colors: ['#b9d6fd','#fdb5b5','#c9fdb5','#f9b5fd','#d7b5fd'],       
                           series: {
                             pie: { show: true, radius: 1, label: { 
                                                                    show: true, 
                                                                    radius: 2/3, 
                                                                    formatter: function(label, series){return '<div class="pie" tooltip="'+label+'">'+Math.round(series.percent)+'%</div>';},
                                                                    threshold: 0,
                                                                    background: { opacity: 0 }
                                                                  },
                                                            combine: {
                                                                        color: '#999',
                                                                        threshold: 0.05,
                                                                        label:'outros <5%'
                                                                      }
                              }
                          },
                          legend: { show: true  }
                       });
                });

      element.bind("click", function(){
                    console.log("Teste");
                    //scope.user.dateOfBirth = new Date();
                    //regera os dados mock para o chart
                    scope.mockData();
                })

      //if(!scope.id) scope.id = attrs.id || '';

      //console.log('shared/components/flot-chart/directive.flot.chart/test:'+scope.test);
      console.log('shared/components/flot-chart/directive.flot.chart/ngModel: '+ngModel);
      //element


    }
    // compile: function (element, attrs) {


    //   var modelAccessor = $parse(attrs.ngModel);
    //   console.log('shared/components/flot-chart/directive.flot.chart/ngModel:'+attrs.ngModel);
      

    //   var html = "<div type='text' id='" + attrs.id + "' style='height: 250px; padding: 0px; position: relative;'> teste" +
    //   "</div>";

    //   var newElem = $(html);
    //   element.replaceWith(newElem);

    //   return function (scope, element, attrs, controller) {
    //     element.id="teste1";

    //     var data=[];
        
        
    //     modelAccessor.assign(scope, data);
        
        

    //     console.log('shared/components/flot-chart/directive.flot.chart/modelAccessor:'+data);

    //   //var processChange = function () {
    //   //   var date = new Date(element.datepicker("getDate"));

    //   //   scope.$apply(function (scope) {
    //   //      // Change bound variable
    //   //      modelAccessor.assign(scope, date);
    //   //   });
    //   //};

    //   //element.datepicker({
    //   //   inline: true,
    //   //   onClose: processChange,
    //   //   onSelect: processChange
    //   //});

    //   scope.$watch(modelAccessor, function (val) {
    //      var chart_data = val;
    //      
    //   });

    //   };

    // }

  };

});
                              