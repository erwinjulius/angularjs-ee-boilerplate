require({

  paths: {

    
    flot_core: 
      'vendor/flot/0.8.1/jquery.flot',flot:'vendor/flot/0.8.1/jquery.flot.pie', flot_resize:'vendor/flot/0.8.1/jquery.flot.resize'

  },
  // define js scripts dependencies
  shim: {

    'flot': {
      deps:['jquery','flot_core','flot_resize']
    },

    'shared/components/flot-chart/module': {
      deps: ['angular','flot']
    },

    'shared/components/flot-chart/directive.flot.chart': {
      deps: ['shared/components/flot-chart/module']
    }

    

  }

},

['require'], function(require) {

  console.log('shared/components/flot-chart require.js config');

  // start
  require([
    'shared/components/flot-chart/directive.flot.chart'
  ]);

});