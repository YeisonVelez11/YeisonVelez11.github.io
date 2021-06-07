(function(angular) {
  'use strict';
angular.module('sampleServiceExample', ['proyectoAngularGenericoGulp'])
  .config(function (sampleServiceProvider) {
    sampleServiceProvider.setMessage('Hello, AngularJS service!');
  })
  .controller('MainCtrl', function (sampleService) {
    this.message = sampleService.getMessage();
  });
})(window.angular);