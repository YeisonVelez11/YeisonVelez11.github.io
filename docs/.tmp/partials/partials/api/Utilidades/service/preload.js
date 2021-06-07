(function(module) {
try {
  module = angular.module('docApp');
} catch (e) {
  module = angular.module('docApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/api/Utilidades/service/preload.html',
    '<header class="api-profile-header"><h1 class="api-profile-header-heading">preload</h1><ol class="api-profile-header-structure naked-list step-list"><li>- service in module <a href=""></a></li></ol></header><div class="api-profile-description"><p>Servicio para generar y quitar preloaders.</p></div><div><h2>Methods</h2><ul class="methods"><li id="on"><h3><p><code>on();</code></p></h3><div><p>Función para generar el popup.</p></div></li><li id="off"><h3><p><code>off();</code></p></h3><div><p>Función para quitar el popup.</p></div></li></ul></div>');
}]);
})();
