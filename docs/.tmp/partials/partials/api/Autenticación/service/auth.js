(function(module) {
try {
  module = angular.module('docApp');
} catch (e) {
  module = angular.module('docApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/api/Autenticación/service/auth.html',
    '<header class="api-profile-header"><h1 class="api-profile-header-heading">auth</h1><ol class="api-profile-header-structure naked-list step-list"><li>- service in module <a href=""></a></li></ol></header><div class="api-profile-description"><p>Servicio para la autenticación de usuarios.</p></div><div><h2>Methods</h2><ul class="methods"><li id="login"><h3><p><code>login(correo, password);</code></p></h3><div><p>Permitir el ingreso de usuario al sistema</p></div><h4>Parameters</h4><table class="variables-matrix input-arguments"><thead><tr><th>Param</th><th>Type</th><th>Details</th></tr></thead><tbody><tr><td>correo</td><td><a href="" class="label type-hint type-hint-string">String</a></td><td><p>correo del usuario.</p></td></tr><tr><td>password</td><td><a href="" class="label type-hint type-hint-string">String</a></td><td><p>password del usuario.</p></td></tr></tbody></table></li><li id="logout"><h3><p><code>logout();</code></p></h3><div><p>Finaliza la sesión del usuario actual, redirigiendolo al login</p></div></li><li id="checkStatus"><h3><p><code>checkStatus();</code></p></h3><div><p>Verifica si un usuario actualmente tiene sesión activa, en caso contrario se redigirá al login</p></div></li><li id="in_array"><h3><p><code>in_array(ubicacion, aRutasPrivadas);</code></p></h3><div><p>Verifica si un usuario actualmente tiene sesión activa, en caso contrario se redigirá al login</p></div><h4>Parameters</h4><table class="variables-matrix input-arguments"><thead><tr><th>Param</th><th>Type</th><th>Details</th></tr></thead><tbody><tr><td>ubicacion</td><td><a href="" class="label type-hint type-hint-string">String</a></td><td><p>recibe la ubicacíon actual de la vista.</p></td></tr><tr><td>aRutasPrivadas</td><td><a href="" class="label type-hint type-hint-array">Array</a></td><td><p>recibe un array con todas las rutas de la navegación.</p></td></tr></tbody></table></li></ul></div>');
}]);
})();
