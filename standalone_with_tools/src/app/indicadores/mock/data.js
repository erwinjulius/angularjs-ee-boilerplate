angular.module('ngMockBackend').factory(

  // factory name
  'IndicadoresCollection', 

  // factory dependencies injection
  ['DataStore', 'Helpers',

// factory definition
function(DataStore, helpers) {

  console.debug('IndicadoresCollection');

  var Collection = (function() {

    //--- private att

    var seq = 0;
    var collection = DataStore.addCollection('indicadores', 'Indicador', ['nomeIndicador', 'idDemanda','identificadorDemanda','nomeUnidadeOrganizacional']);

    //--- @begin: private functions

    function searchValue(find) {
      if(!find) return [];

      var r = [], obj,
          regexp = new RegExp(find, 'i'),
          data = collection.find(),
          len = data.length;

      for (var i = 0; i < len; i++) {
        obj = data[i];

        if((""+obj.indicador.nomeIndicador).match(regexp) || (""+obj.estruturaIndicador.identificadorDemanda).match(regexp))
          r.push(obj);
      }

      return r;
    }

    //--- @end: private functions


    // class constructor
    var IndicadoresCollection = function() {};
    var ClassDef = IndicadoresCollection;
    //---

    //--- @begin: public functions

    ClassDef.prototype.getById = function(id) {
      var r = collection.find({'id': id});
      if(r.length > 0) return r[0]; 
      return null;
    };

    ClassDef.prototype.insert = function(object) {
      if(helpers.isObject(object)) {
        object.id = seq++;
        return collection.insert(object);
      }
      return null;
    };

    ClassDef.prototype.update = function(object) {
      if(helpers.isObject(object)) 
        collection.update(object);
    };

    ClassDef.prototype.remove = function(object) {
      if(helpers.isObject(object)) 
        collection.remove(object);
    };

    ClassDef.prototype.list = function(options) {
      //options = options || {page: 1, size: 10};
      if (options){
        return helpers.paginate(collection.find(), options);
      }else{
        return collection.data;
      }
    };

    ClassDef.prototype.search = function(find, options) {
      options = options || {page: 1, size: 10};
      return helpers.paginate(searchValue(find), options);
    };

    //--- @end: public functions

    //--- @begin: init collection
    (function() {

      function createObject(_nomeIndicador, _valueDate, _idDemanda, _nameDemanda, _uo) {
        
        var indicador={nomeIndicador:_nomeIndicador};
        var estruturaIndicador={
          id:_idDemanda,
          identificadorDemanda:_nameDemanda,
          nomeUnidadeOrganizacional:_uo
        };

        return {
          indicador: indicador,
          dataValorIndicador: _valueDate,
          estruturaIndicador: estruturaIndicador,
        
        };
      }

      //"dataValorIndicador":"2013-10-21T18:06:21.893+0000",
      
      //{"id":"1","identificadorDemanda":"0001/2013","nomeUnidadeOrganizacional":"AUDITORIA/ANEG/AB","excluido":false,"demandaBloqueada":false,"disponivelUnidade":false,"demandaBloqueadaReiterada":false,"notificarUnidade":false}},

      collection.insert( createObject('aceite_de_demanda', new Date('2013-11-28T12:00:00+0000'), 1, '0001/2013', 'DETM') );
      collection.insert( createObject('aceite_de_demanda', new Date('2013-12-01T00:00:00+0000'), 12, '0012/2013', 'ABAST') );
      collection.insert( createObject('aceite_de_demanda', new Date('2013-11-30T16:48:00+0000'), 5, '0005/2013', 'DETM') );
      collection.insert( createObject('aceite_de_demanda', new Date('2013-12-04T00:00:00+0000'), 42, '0042/2013', 'DETM') );
      collection.insert( createObject('aceite_de_demanda', new Date('2013-12-03T19:12:00+0000'), 45, '0045/2013', 'OG&G') );
      collection.insert( createObject('aceite_de_demanda', new Date('2013-12-03T02:24:00+0000'), 8, '0008/2013', 'ABAST') );
      collection.insert( createObject('aceite_de_demanda', new Date('2013-12-04T00:00:00+0000'), 6, '0006/2013', 'DETM') );
      collection.insert( createObject('aceite_de_demanda', new Date('2013-12-03T00:00:00+0000'), 9, '0009/2013', 'AUDITORIA') );
      collection.insert( createObject('aceite_de_demanda', new Date('2013-11-28T12:00:00+0000'), 21, '0021/2013', 'DETM') );
      collection.insert( createObject('aceite_de_demanda', new Date('2013-12-01T00:00:00+0000'), 22, '0022/2013', 'ABAST') );
      collection.insert( createObject('aceite_de_demanda', new Date('2013-11-30T16:48:00+0000'), 23, '0023/2013', 'DETM') );
      collection.insert( createObject('aceite_de_demanda', new Date('2013-12-04T00:00:00+0000'), 24, '0024/2013', 'DETM') );
      collection.insert( createObject('aceite_de_demanda', new Date('2013-12-03T19:12:00+0000'), 25, '0025/2013', 'OG&G') );
      collection.insert( createObject('aceite_de_demanda', new Date('2013-12-03T02:24:00+0000'), 26, '0026/2013', 'ABAST') );
      collection.insert( createObject('aceite_de_demanda', new Date('2013-12-04T00:00:00+0000'), 27, '0027/2013', 'DETM') );
      collection.insert( createObject('aceite_de_demanda', new Date('2013-12-03T00:00:00+0000'), 28, '0028/2013', 'AUDITORIA') );
      collection.insert( createObject('validacao_resposta_sucesso', new Date('2013-12-11T00:00:00+0000'), 1, '0001/2013', 'DETM') );
      collection.insert( createObject('validacao_resposta_sucesso', new Date('2013-12-10T04:48:00+0000'), 12, '0012/2013', 'ABAST') );
      collection.insert( createObject('validacao_resposta_sucesso', new Date('2013-12-10T09:36:00+0000'), 5, '0005/2013', 'DETM') );
      collection.insert( createObject('validacao_resposta_sucesso', new Date('2013-12-14T00:00:00+0000'), 42, '0042/2013', 'DETM') );
      collection.insert( createObject('validacao_resposta_sucesso', new Date('2013-12-13T12:00:00+0000'), 45, '0045/2013', 'OG&G') );
      collection.insert( createObject('validacao_resposta_sucesso', new Date('2013-12-12T00:00:00+0000'), 8, '0008/2013', 'ABAST') );
      collection.insert( createObject('validacao_resposta_sucesso', new Date('2013-12-11T00:00:00+0000'), 21, '0021/2013', 'DETM') );
      collection.insert( createObject('validacao_resposta_sucesso', new Date('2013-12-10T04:48:00+0000'), 22, '0022/2013', 'ABAST') );
      collection.insert( createObject('validacao_resposta_sucesso', new Date('2013-12-10T09:36:00+0000'), 23, '0023/2013', 'DETM') );
      collection.insert( createObject('validacao_resposta_sucesso', new Date('2013-12-14T00:00:00+0000'), 24, '0024/2013', 'DETM') );
      collection.insert( createObject('validacao_resposta_sucesso', new Date('2013-12-13T12:00:00+0000'), 25, '0025/2013', 'OG&G') );
      collection.insert( createObject('validacao_resposta_sucesso', new Date('2013-12-12T00:00:00+0000'), 26, '0026/2013', 'ABAST') );
      collection.insert( createObject('validacao_resposta_negada', new Date('2013-12-07T00:00:00+0000'), 1, '0001/2013', 'DETM') );
      collection.insert( createObject('validacao_resposta_negada', new Date('2013-12-07T00:00:00+0000'), 12, '0012/2013', 'ABAST') );
      collection.insert( createObject('validacao_resposta_negada', new Date('2013-12-06T00:00:00+0000'), 5, '0005/2013', 'DETM') );
      collection.insert( createObject('validacao_resposta_negada', new Date('2013-12-08T00:00:00+0000'), 21, '0021/2013', 'DETM') );
      collection.insert( createObject('validacao_resposta_negada', new Date('2013-12-08T00:00:00+0000'), 22, '0022/2013', 'ABAST') );
      collection.insert( createObject('validacao_resposta_negada', new Date('2013-12-06T00:00:00+0000'), 23, '0023/2013', 'DETM') );
      collection.insert( createObject('validacao_resposta_negada', new Date('2013-12-06T00:00:00+0000'), 24, '0024/2013', 'DETM') );
      collection.insert( createObject('validacao_resposta_negada', new Date('2013-12-07T00:00:00+0000'), 25, '0025/2013', 'OG&G') );
      collection.insert( createObject('validacao_resposta_negada', new Date('2013-12-07T00:00:00+0000'), 26, '0026/2013', 'ABAST') );
      collection.insert( createObject('validacao_resposta_negada', new Date('2013-12-06T00:00:00+0000'), 23, '0023/2013', 'DETM') );
      collection.insert( createObject('validacao_resposta_negada', new Date('2013-12-06T00:00:00+0000'), 23, '0023/2013', 'DETM') );
      collection.insert( createObject('validacao_resposta_negada', new Date('2013-12-06T00:00:00+0000'), 23, '0023/2013', 'DETM') );
      collection.insert( createObject('validacao_resposta_negada', new Date('2013-12-07T00:00:00+0000'), 25, '0025/2013', 'OG&G') );
      collection.insert( createObject('validacao_resposta_negada', new Date('2013-12-07T00:00:00+0000'), 26, '0026/2013', 'ABAST') );
      collection.insert( createObject('resposta_unidade', new Date('2013-11-30T00:00:00+0000'), 1, '0001/2013', 'DETM') );
      collection.insert( createObject('resposta_unidade', new Date('2013-12-03T00:00:00+0000'), 12, '0012/2013', 'ABAST') );
      collection.insert( createObject('resposta_unidade', new Date('2013-12-02T16:48:00+0000'), 5, '0005/2013', 'DETM') );
      collection.insert( createObject('resposta_unidade', new Date('2013-12-06T00:00:00+0000'), 42, '0042/2013', 'DETM') );
      collection.insert( createObject('resposta_unidade', new Date('2013-12-05T00:00:00+0000'), 45, '0045/2013', 'OG&G') );
      collection.insert( createObject('resposta_unidade', new Date('2013-12-04T14:24:00+0000'), 8, '0008/2013', 'ABAST') );
      collection.insert( createObject('resposta_unidade', new Date('2013-11-30T12:00:00+0000'), 21, '0021/2013', 'DETM') );
      collection.insert( createObject('resposta_unidade', new Date('2013-12-02T00:00:00+0000'), 22, '0022/2013', 'ABAST') );
      collection.insert( createObject('resposta_unidade', new Date('2013-12-02T00:00:00+0000'), 23, '0023/2013', 'DETM') );
      collection.insert( createObject('resposta_unidade', new Date('2013-12-05T00:00:00+0000'), 24, '0024/2013', 'DETM') );
      collection.insert( createObject('resposta_unidade', new Date('2013-12-04T09:36:00+0000'), 25, '0025/2013', 'OG&G') );
      collection.insert( createObject('resposta_unidade', new Date('2013-12-04T04:48:00+0000'), 26, '0026/2013', 'ABAST') );
      collection.insert( createObject('resposta_unidade', new Date('2013-12-07T12:00:00+0000'), 1, '0001/2013', 'DETM') );
      collection.insert( createObject('resposta_unidade', new Date('2013-12-07T16:48:00+0000'), 12, '0012/2013', 'ABAST') );
      collection.insert( createObject('resposta_unidade', new Date('2013-12-06T19:12:00+0000'), 5, '0005/2013', 'DETM') );
      collection.insert( createObject('resposta_unidade', new Date('2013-12-08T12:00:00+0000'), 21, '0021/2013', 'DETM') );
      collection.insert( createObject('resposta_unidade', new Date('2013-12-08T07:12:00+0000'), 22, '0022/2013', 'ABAST') );
      collection.insert( createObject('resposta_unidade', new Date('2013-12-06T16:48:00+0000'), 23, '0023/2013', 'DETM') );
      collection.insert( createObject('resposta_unidade', new Date('2013-12-06T09:36:00+0000'), 24, '0024/2013', 'DETM') );
      collection.insert( createObject('resposta_unidade', new Date('2013-12-07T16:48:00+0000'), 25, '0025/2013', 'OG&G') );
      collection.insert( createObject('resposta_unidade', new Date('2013-12-07T07:12:00+0000'), 26, '0026/2013', 'ABAST') );

    
      function fakeUrl() {
        return 'http://google.com/#q=' + seq + '%2B' + seq;
      }

      for (var i = 59; i >= 0; i--) {
        collection.insert( createObject(seq++, 'fake bookmark ' + (seq+1), 'some description to fake bookmark ', fakeUrl()) );
      }

    })();
    //--- @end: init collection

    // return class definition
    return ClassDef;
  })();

  //---
  
  return new Collection();

}]);