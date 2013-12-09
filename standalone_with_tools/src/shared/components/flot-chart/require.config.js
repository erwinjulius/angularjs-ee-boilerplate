require({

  // define js scripts dependencies
  shim: {

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