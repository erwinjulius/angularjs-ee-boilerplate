require({

  // define js scripts dependencies
  shim: {

    //--- 

    'app/indicadores/module': {
      deps: [
        'angular_route', 
        'angular_resource',
        'shared/components/flot-chart/module',
        'shared/components/pagination/module'
        
      ]
    },

    //--- @begin resources
    'app/indicadores/resources/rest': {
      deps: ['app/indicadores/module']
    },


    //--- @end resources


    //--- @begin controllers
    'app/indicadores/controller': {
      deps: [ 
        'app/indicadores/module'
      ]
    
    } ,

    'app/indicadores/controllers/json': {
      deps: ['app/indicadores/resources/rest']
    },

    //--- @end controllers

    'app/indicadores/routes': {
      deps: [ 
        'app/indicadores/controller',
        'app/indicadores/controllers/json'
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