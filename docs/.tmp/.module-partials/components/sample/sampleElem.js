(function(module) {
try {
  module = angular.module('proyectoAngularGenericoGulp');
} catch (e) {
  module = angular.module('proyectoAngularGenericoGulp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/components/sample/sampleElem.html',
    '<div class="sample-awesome">\n' +
    '  Hello, AngularJS directive!\n' +
    '</div>\n' +
    '');
}]);
})();
