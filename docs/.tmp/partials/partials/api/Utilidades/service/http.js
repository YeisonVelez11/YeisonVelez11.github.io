(function(module) {
try {
  module = angular.module('docApp');
} catch (e) {
  module = angular.module('docApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/api/Utilidades/service/http.html',
    '<header class="api-profile-header"><h1 class="api-profile-header-heading">http</h1><ol class="api-profile-header-structure naked-list step-list"><li>- service in module <a href=""></a></li></ol></header><div class="api-profile-description"><p>Servicio para minimizar el consumo de servicios web.</p></div><div><h2>Methods</h2><ul class="methods"><li id="getAll"><h3><p><code>getAll(url, metodo);</code></p></h3><div><p>Servicio para consumir un servicio web.</p></div><h4>Parameters</h4><table class="variables-matrix input-arguments"><thead><tr><th>Param</th><th>Type</th><th>Details</th></tr></thead><tbody><tr><td>url</td><td><a href="" class="label type-hint type-hint-string">string</a></td><td><p>url del servicio web.</p></td></tr><tr><td>metodo</td><td><a href="" class="label type-hint type-hint-string">string</a></td><td><p>metodo usado para el servicio web. posible valores:<pre>GET, POST</pre>.</p></td></tr></tbody></table></li></ul></div>');
}]);
})();
