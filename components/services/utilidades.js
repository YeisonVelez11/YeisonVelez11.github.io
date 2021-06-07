var timeout=1500;
angular.module("yeison.utilidades", [])

.factory("http", function($http, ErrorPeticion) 
{
    var oHttp = {}

/**
 * @ngdoc method
 * @module Utilidades
 * @name http#getAll
 * @description
 * Servicio para consumir un servicio web.
 * @param {string} url url del servicio web.
 * @param {string} metodo metodo usado para el servicio web. posible valores: <pre>GET, POST</pre>.
 **/
    oHttp.getAll = function(url,metodo) 
    {
        return $http({
            method: metodo,
            url: url,
            timeout: timeout
        }).then(function(data) {
            oHttp.todos=data;
        },function(response) {
            ErrorPeticion.mostrarError(response.status);
        });
    }
    return oHttp;
})


/**
 * @ngdoc service
 * @module Utilidades
 * @name ErrorPeticion
 * @description
 * Servicio encargado de mostrar por medio de un popup un fallback en caso de error del servicio web.
 **/
.factory('ErrorPeticion', function($state,popup_generico,preload) 
{
    var error = {};
    var oTipoErrores = {
        0: 'Problemas de conexión, revisa tu conexión a Internet o intentalo más tarde. Gracias',
        403: 'Lo sentimos, no estas autorizado para ejecutar esta acción.',
        404: 'Hubo algunos inconvenientes completando tu solicitud, intentalo nuevamente o más tarde. Gracias',
        408: 'Se agotó el tiempo de espera para completar tu solicitud, intentalo nuevamente o más tarde. Gracias',
        500: 'El servicio no está disponible en este momento, intentalo más tarde. Gracias',
        503: 'En este momento no podemos completar la petición en el servidor, intentalo más tarde. Gracias',
        504: 'Se agotó el tiempo de espera para completar la petición en el servidor, intentalo más tarde. Gracias'
    };
/**
 * @ngdoc method
 * @module Utilidades
 * @name ErrorPeticion#mostrarError
 * @description
 * Muestra el estado del error en un popup con el error según el estado del error recibido.
 * @param {string} status número del error recibido al tener un problema con un servicio web.
 **/
    error.mostrarError = function(status)
     {
        preload.off();
        if (status != undefined && oTipoErrores[status]) { // Sin conexión a internet
            popup_generico.fn_generarPopup("Error", oTipoErrores[status],"login");
        }
    }
    return error;
})

/**
 * @ngdoc service
 * @module Utilidades
 * @name preload
 * @description
 * Servicio para generar y quitar preloaders.
 **/
.factory('preload', function() 
{

/**
 * @ngdoc method
 * @module Utilidades
 * @name preload#on
 * @description
 * Función para generar el popup.
 **/
    var oPreload = {};
    oPreload.on = function() {
        if ( !angular.element(document.querySelector( '#preload' )).length ) 
        {
            angular.element(document.body).append('<style>.loading-overlay{position: fixed; top: 0; right: 0; bottom: 0; left: 0;  background-color:#222 !important;  opacity:0.8 !important; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; width: 100%; height: 100%;}.loading-container{position: relative; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: reverse; -ms-flex-direction: row-reverse; flex-direction: row-reverse; padding: 0 50px;}.loading-container:before{content: "Cargando"; display: block; font-size: 1.5rem; position: absolute; top: -250%; left: 0; right: 0; color: white; text-align: center; opacity: .8;}.loading-dot{position: relative; width: 15px; height: 15px; background: #fff; border-radius: 50%; margin-right: 15px; -webkit-animation: dot 1.5s cubic-bezier(0.17, 0.67, 0.83, 0.67) infinite; animation: dot 1.5s cubic-bezier(0.17, 0.67, 0.83, 0.67) infinite;}.loading-dot:nth-of-type(1){margin-right: 0;}.loading-dot:nth-of-type(2){-webkit-animation-delay: .175s; animation-delay: .175s;}.loading-dot:nth-of-type(3){-webkit-animation-delay: .35s; animation-delay: .35s;}@-webkit-keyframes dot{0%{-webkit-transform: translate3d(-1000%, 0, 0); transform: translate3d(-1000%, 0, 0); opacity: 0;}20%{-webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); opacity: 1;}80%{-webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); opacity: 1;}100%{-webkit-transform: translate3d(1000%, 0, 0); transform: translate3d(1000%, 0, 0); opacity: 0;}}@keyframes dot{0%{-webkit-transform: translate3d(-1000%, 0, 0); transform: translate3d(-1000%, 0, 0); opacity: 0;}20%{-webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); opacity: 1;}80%{-webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); opacity: 1;}100%{-webkit-transform: translate3d(1000%, 0, 0); transform: translate3d(1000%, 0, 0); opacity: 0;}}</style> <div id="preload" class="loading-overlay"> <div class="loading-container"> <div class="loading-dot"></div><div class="loading-dot"></div><div class="loading-dot"></div></div></div>');
        }
        else
        {
           var elementoPrelaod = angular.element( document.querySelector( '#preload' ) );
           elementoPrelaod.removeClass("ng-hide");
           elementoPrelaod.addClass("ng-show");
        }
    }
/**
 * @ngdoc method
 * @module Utilidades
 * @name preload#off
 * @description
 * Función para quitar el popup.
 **/
    oPreload.off = function() 
    {
        var elementoPrelaod = angular.element( document.querySelector( '#preload' ) );
        elementoPrelaod.removeClass("ng-show");
        elementoPrelaod.addClass("ng-hide");
    } 
    return oPreload;
})

.factory('alerta', function($state,$compile,$rootScope) 
{
    var oPopup= {};


/**
 * @ngdoc method
 * @module Utilidades
 * @name alerta#fn_generarPopup
 * @description
 * Servicio para creación de un popup generico.
 * @param {string} tipo_alerta Determina el tipo de la alerta.Opciones: <pre>"exito", "error"</pre>.
 * @param {string} contenido Mensaje que personaliza la generación de la alerta.
 **/
    oPopup.fn_generarPopup = function(tipo_alerta,contenido) 
    {

        var oAlerta={
            "exito":{ "tipo":"success", "strong": "Éxito!", "contenido":contenido},
            "error":{ "tipo":"danger", "strong": "Error!", "contenido":contenido}
        }

        oPopup.contenido=oAlerta[tipo_alerta].contenido;
        oPopup.tipo_alerta=oAlerta[tipo_alerta].tipo;
        oPopup.strong=oAlerta[tipo_alerta].strong;
        angular.element(document.querySelectorAll("#alerta")).remove();
        angular.element(document.body).append('<div id="alerta" class="mostrar alert alert-'+oPopup.tipo_alerta+'"'+ ' style="width: 95%; z-index: 99999; transform-origin: center center; top: 10px; position: fixed; margin: 0 auto; height: auto; border-radius: 6px; text-align:center; left: 0; right: 0; transition: all linear 0.5s;"><strong>'+oPopup.strong+'</strong> ' +oPopup.contenido+  '</div>');
        oPopup.cerrarPopup();

        
    }
    oPopup.cerrarPopup = function() 
    {
        setTimeout(function(){
            angular.element(document.querySelectorAll("#alerta")).removeClass('mostrar');
            angular.element(document.querySelectorAll("#alerta")).addClass('ocultar');
        },5000);  
            
    }
    
    
    return oPopup;
})