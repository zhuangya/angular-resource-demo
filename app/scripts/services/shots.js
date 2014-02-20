'use strict';

angular.module('angularResourceDemoApp')
  .factory('shots', function ($resource) {
    this.url = 'http://api.dribbble.com/shots/:shotId';
    return $resource(this.url, {
      shotId: '@shotId'
    }, {
      list: {
        method: 'GET',
        isArray: true,
        params: {
          shotId: 'everyone'
        }
      }
    });
  });
