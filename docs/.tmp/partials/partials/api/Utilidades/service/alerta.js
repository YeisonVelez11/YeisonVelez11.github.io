(function(module) {
try {
  module = angular.module('docApp');
} catch (e) {
  module = angular.module('docApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/api/Utilidades/service/alerta.html',
    '<header class="api-profile-header"><h1 class="api-profile-header-heading">alerta</h1><ol class="api-profile-header-structure naked-list step-list"><li>- service in module <a href=""></a></li></ol></header><div class="api-profile-description"><p>Servicio para la genereación y eliminación de alertas de mensajes de exito-error.</p></div><div><h2>Methods</h2><ul class="methods"><li id="fn_generarPopup"><h3><p><code>fn_generarPopup(tipo_alerta, contenido);</code></p></h3><div><p>Servicio para creación de un popup generico.</p></div><h4>Parameters</h4><table class="variables-matrix input-arguments"><thead><tr><th>Param</th><th>Type</th><th>Details</th></tr></thead><tbody><tr><td>tipo_alerta</td><td><a href="" class="label type-hint type-hint-string">string</a></td><td><p>Determina el tipo de la alerta.Opciones:<pre>&quot;exito&quot;, &quot;error&quot;</pre>.</p></td></tr><tr><td>contenido</td><td><a href="" class="label type-hint type-hint-string">string</a></td><td><p>Mensaje que personaliza la generación de la alerta.</p></td></tr></tbody></table></li></ul></div>');
}]);
})();
