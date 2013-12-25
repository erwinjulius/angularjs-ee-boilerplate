angular.mock.backend.addResource(function($httpBackend, regexpUrl) {
  'use strict';
  //--- @begin: Allow pass to server

    // get all
  $httpBackend
    .when('GET', regexpUrl(/rest\/indicadores(\?|$)/))
    .passThrough(); 

    // get one
  $httpBackend
    .when('GET', regexpUrl(/rest\/indicadores(\/)?([A-z0-9]+)?$/))
    .passThrough(); 

    // create
  $httpBackend
    .when('POST', regexpUrl(/rest\/indicadores$/))
    .passThrough(); 

    // update
  $httpBackend
    .when('PUT', regexpUrl(/rest\/indicadores(\/)?([A-z0-9]+)?$/))
    .passThrough(); 

    // delete
  $httpBackend
    .when('DELETE', regexpUrl(/rest\/indicadores(\/)?([A-z0-9]+)?$/))
    .passThrough(); 

    // search
  $httpBackend
    .when('GET', regexpUrl(/rest\/indicadores\/search\/([A-z0-9]+)(\?|$)/))
    .passThrough();

  //--- @end: Allow pass to server  
});