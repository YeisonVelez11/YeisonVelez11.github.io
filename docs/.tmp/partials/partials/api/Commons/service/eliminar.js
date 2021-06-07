(function(module) {
try {
  module = angular.module('docApp');
} catch (e) {
  module = angular.module('docApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/api/Commons/service/eliminar.html',
    '<header class="api-profile-header"><h1 class="api-profile-header-heading">eliminar</h1><ol class="api-profile-header-structure naked-list step-list"><li>- service in module <a href=""></a></li></ol></header><div class="api-profile-description"><p>Servicio para la eliminación de un determinado objeto, una vez que se confirme.</p></div><div><h2>Methods</h2><ul class="methods"><li id="fn_generarPopupConfirm"><h3><p><code>fn_generarPopupConfirm(objeto, array, titulo, contenido);</code></p></h3><div><p>Servicio para la eliminación de un determinado objeto.</p></div><h4>Parameters</h4><table class="variables-matrix input-arguments"><thead><tr><th>Param</th><th>Type</th><th>Details</th></tr></thead><tbody><tr><td>objeto</td><td><a href="" class="label type-hint type-hint-object">object</a></td><td><p>objeto que se desea eliminar.</p></td></tr><tr><td>array</td><td><a href="" class="label type-hint type-hint-array">Array</a></td><td><p>Array que contiene el objeto a eliminar.</p></td></tr><tr><td>titulo</td><td><a href="" class="label type-hint type-hint-string">string</a></td><td><p>titulo de la cabecera del popup de eliminar.</p></td></tr><tr><td>contenido</td><td><a href="" class="label type-hint type-hint-string">string</a></td><td><p>contenido del titulo del popup para eliminar.</p></td></tr></tbody></table></li><li id="fn_confirmar"><h3><p><code>fn_confirmar();</code></p></h3><div><p>Función que elimina el objeto cuando se confirme el popup.</p></div></li></ul></div>');
}]);
})();
