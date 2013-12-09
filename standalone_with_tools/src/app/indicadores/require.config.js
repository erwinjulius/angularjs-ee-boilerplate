require({

  // define js scripts dependencies
  shim: {

    //--- 

    'app/indicadores/module': {
      deps: [
        'angular_route', 
        'angular_resource',
        'shared/components/flot-chart/module'
        
      ]
    },

    //--- @begin resources


    //--- @end resources


    //--- @begin controllers
    'app/indicadores/controller': {
      deps: [ 
        'app/indicadores/module'
      ]
    
    } ,

    //--- @end controllers

    'app/indicadores/routes': {
      deps: [ 
        'app/indicadores/controller'
      ]
    
    } 
    
  }

},

['require'], function(require) {

  console.log('app/indicadores require.js config');

  // start
  require([
    'app/indicadores/routes' 
  ]);

});