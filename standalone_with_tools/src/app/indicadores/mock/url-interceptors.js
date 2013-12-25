angular.mock.backend.addResource(
  
  // mock resource dependencies injection
  ['IndicadoresCollection', 'Helpers', '$httpBackend', 'regexpUrl', 'getParams',

// mock resource definition
function(collection, helpers, $httpBackend, regexpUrl, getParams) {
  'use strict';

  //--- @begin: URL interceptor
  
    // get all
  $httpBackend.when('GET', regexpUrl(/rest\/indicadores(\?|$)/))
    .respond(function(method, url, data) {
      console.debug('GET ' + url);

      var result,
          params = getParams(url),
          options = {page: 1, size: 10};

      if(params) {
        console.debug('GET has params' + url);
        console.debug(params);
        options.page = params.page;
        options.size = params.size;

        result = collection.list(options);
      }else{
        console.debug('GET has no params ' + url);
        result = {data: collection.list(), count: collection.list().length, page: 1, pages: 1}
        //result = collection.list();

      }

      var statusResponse = {"mensagemCritica":"","status":true};
      result = {"statusResponse":statusResponse,"objectList":result};

        //objectList:

      //result = collection.list(options);

      return [200, angular.copy(result)];
    }); 

    // get one
  $httpBackend.when('GET', regexpUrl(/rest\/indicadores(\/)?([A-z0-9]+)?$/))
    .respond(function(method, url, data) {
      console.debug('GET ' + url);

      var result,
          regexp = /indicadores\//,
          id = helpers.getIdFromURL(url, regexp),
          object = collection.getById(id);

      if(object) {
        var statusResponse = {"mensagemCritica":"","status":true};
        result = {"statusResponse":statusResponse,"objectList":object};
        result = [200, angular.copy(result)];
        //result = [200, angular.copy(object)];
      } else {
        result = [404, helpers.notFound(id)];
      }

      return result;
    }); 

    // create
  $httpBackend.when('POST', regexpUrl(/rest\/indicadores$/))
    .respond(function(method, url, data) {
      console.debug('POST ' + url);

      data = angular.fromJson(data);
      data = collection.insert(data);

      console.debug(data);
      var statusResponse = {"mensagemCritica":"","status":true};
      var result = {"statusResponse":statusResponse,"objectList":collection.insert(data)};
      return [201, angular.copy(result)];
      //return [201, angular.copy(data)];  
      
    }); 

    // update
  $httpBackend.when('PUT', regexpUrl(/rest\/indicadores(\/)?([A-z0-9]+)?$/))
    .respond(function(method, url, data) {
      console.log('PUT ' + url);

      data = angular.fromJson(data);

      collection.update(data);

      console.debug(data);
      var statusResponse = {"mensagemCritica":"","status":true};
      var result = {"statusResponse":statusResponse,"objectList":collection.insert(data)};
      return [202, angular.copy(result)];

      //return [202, angular.copy(data)];
    }); 

    // delete
  $httpBackend.when('DELETE', regexpUrl(/rest\/indicadores(\/)?([A-z0-9]+)?$/))
    .respond(function(method, url, data) {
      console.debug('DELETE ' + url);

      var result, 
          indicador,
          regexp = /indicadores\//,
          id = helpers.getIdFromURL(url, regexp),
          object = collection.getById(id);

      if(object) {
        collection.remove(object);
        var statusResponse = {"mensagemCritica":"","status":true};
        result = [202, {"statusResponse":statusResponse,"objectList":helpers.createResultMessage(202, 'Indicador id: ' + id + ' removed')}];
        //result = [202, helpers.createResultMessage(202, 'Indicador id: ' + id + ' removed')];
      } else {
        result = [404, helpers.notFound(id)];
      }

      return result;

    }); 

    // search
  $httpBackend.when('GET', regexpUrl(/rest\/indicadores\/search\/([A-z0-9]+)(\?|$)/))
    .respond(function(method, url, data) {
      console.debug('GET ' + url);

      var result,
          regexp = /indicadores\/search\//,
          find = helpers.getValueFromURL(url, regexp),
          params = getParams(url),
          options = {page: 1, size: 10};

      if(params) {
        console.debug(params);
        options.page = params.page;
        options.size = params.size;
      }

      console.debug(find);

      result = collection.search(find, options);
      var statusResponse = {"mensagemCritica":"","status":true};
      result = {"statusResponse":statusResponse,"objectList":result};
        

      return [200, angular.copy(result)];
    }); 

  //--- @end: URL interceptor
  


  console.debug(collection.getById(1));
  console.debug(collection.search('erko'));
  console.debug(collection.list());

}]);