'use strict';

angular.module('angularResourceDemoApp')
  .controller('MainCtrl', function ($scope, shots) {
    var shot12345 = shots.get({
      shotId: '12345'
    });
  });
