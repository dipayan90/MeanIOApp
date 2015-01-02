'use strict';

angular.module('mean.dipayanapp').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('dipayanapp example page', {
      url: '/dipayanapp/example',
      templateUrl: 'dipayanapp/views/index.html'
    });
  }
]);
