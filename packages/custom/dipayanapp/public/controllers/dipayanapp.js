'use strict';

/* jshint -W098 */
angular.module('mean.dipayanapp').controller('DipayanappController', ['$scope', 'Global', 'Dipayanapp',
  function($scope, Global, Dipayanapp) {
    $scope.global = Global;
    $scope.package = {
      name: 'dipayanapp'
    };
  }
]);
