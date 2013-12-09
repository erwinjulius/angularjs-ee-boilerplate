angular.module('flot.chart').directive(
  
  // component name
  'flotChart', 

// component definition
function($parse){

  return {
    restrict: 'E',
    replace: true,
    transclude: false,
    compile: function (element, attrs) {
      var modelAccessor = $parse(attrs.ngModel);

      var html = "<div type='text' id='" + attrs.id + "' style='height: 250px; padding: 0px; position: relative;'> teste" +
      "</div>";

      var newElem = $(html);
      element.replaceWith(newElem);

      return function (scope, element, attrs, controller) {
        element.name="teste1";
      //var processChange = function () {
      //   var date = new Date(element.datepicker("getDate"));

      //   scope.$apply(function (scope) {
      //      // Change bound variable
      //      modelAccessor.assign(scope, date);
      //   });
      //};

      //element.datepicker({
      //   inline: true,
      //   onClose: processChange,
      //   onSelect: processChange
      //});

      scope.$watch(modelAccessor, function (val) {
         var name = val;
         element.name="teste1";
      });

      };

    }

  };

});
