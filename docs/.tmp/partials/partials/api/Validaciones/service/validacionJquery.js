(function(module) {
try {
  module = angular.module('docApp');
} catch (e) {
  module = angular.module('docApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/api/Validaciones/service/validacionJquery.html',
    '<header class="api-profile-header"><h1 class="api-profile-header-heading">validacionJquery</h1><ol class="api-profile-header-structure naked-list step-list"><li>- service in module <a href=""></a></li></ol></header><div class="api-profile-description"><p>Servicio para generar validaciones a los formularios.</p></div><div><h2>Methods</h2><ul class="methods"><li id="getCamposValidaciones"><h3><p><code>getCamposValidaciones();</code></p></h3><div><p>Se cargan los textos personalizados y la instanacia para generar las validaciones.</p></div></li></ul></div>');
}]);
})();
