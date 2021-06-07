(function(module) {
try {
  module = angular.module('docApp');
} catch (e) {
  module = angular.module('docApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/api/Utilidades/service/popup_generico.html',
    '<header class="api-profile-header"><h1 class="api-profile-header-heading">popup_generico</h1><ol class="api-profile-header-structure naked-list step-list"><li>- service in module <a href=""></a></li></ol></header><div class="api-profile-description"><p>Servicio para la genereación y eliminación de popups.</p></div><div><h2>Methods</h2><ul class="methods"><li id="fn_generarPopup"><h3><p><code>fn_generarPopup(titulo, contenido, estado);</code></p></h3><div><p>Servicio para creación de un popup generico.</p></div><h4>Parameters</h4><table class="variables-matrix input-arguments"><thead><tr><th>Param</th><th>Type</th><th>Details</th></tr></thead><tbody><tr><td>titulo</td><td><a href="" class="label type-hint type-hint-string">string</a></td><td><p>titulo de la cabecera del popup.</p></td></tr><tr><td>contenido</td><td><a href="" class="label type-hint type-hint-string">string</a></td><td><p>contenido del popup a generar.</p></td></tr><tr><td>estado</td><td><a href="" class="label type-hint type-hint-string">string</a></td><td><p>estado al que se navegará al presionar el botón &quot;ok&quot; que por defecto genera el popup.</p></td></tr></tbody></table></li><li id="fn_CerrarModal"><h3><p><code>fn_CerrarModal();</code></p></h3><div><p>Eliminar las instancial de modals abiertas.</p></div></li></ul></div>');
}]);
})();
