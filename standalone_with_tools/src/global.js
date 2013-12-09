(function() {
  'use strict';

  console.log('global');

  window.GLOBAL = {
    
    // app module dependencies
    appModuleDeps: [
      'indicadores',
      'bookmarks',
      'fend.progressbar.loading', 
      'ngRoute', 
      'ngResource', 
      'toaster'
    ]

  };

})();