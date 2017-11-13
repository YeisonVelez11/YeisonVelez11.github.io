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
angular.module("yeison.validaciones", [])

/**
 * @ngdoc service
 * @module Validaciones
 * @name validacionJquery
 * @description
 * Servicio para generar validaciones a los formularios.
 **/

.factory('validacionCampos', function() {

        var oValidacionCampos={mensaje:"", validacion:false};

        oValidacionCampos.fn_getCamposEditables = function(array,data) {

 /** @ngdoc method
 * @module Validaciones
 * @name validacionJquery#fn_getCamposEditables
 * @usage 
 * @description
 * Se validan individualmente los campos para la libreria de la edición de campos en la misma. Se debe agregar un atributo llamado validación en el campo a editar, luego se llama este factory <br> posibles valores:
  <pre>
  required | required=mensaje_custom<br>
  minlength=number<br>
  maxlength=number<br>
  date<br>
  email<br>
  numeric | numeric=int<br><br>
  equalto=string
  different=string
  range=numer1-number2
  domain_email=domain (ej bios.co)
  checkbox_min=number
  checkbox_max=number
  password [needs 1 Capital Letter, 1 Especial caracter, 1 Number, 6 characters]
  </pre>
  se debe incluir en el campo los siguientes atributos ej:
  <pre><a  href='#' editable-text='user.name' e-label='User Name' onbeforesave='validacion.fn_getCamposEditables(this['$editable'].attrs.validacion, $data)'' validacion='required'>{{user.name}}</a></pre>
  donde <pre>validacion='required'</pre> corresponde a los elementos a validar, y <pre>validacion.fn_getCamposEditables</pre> en primera instancia 'validacion' es una variable $scope que contiene el factory en el controller(esto solo para los campos dinámicos editables), y se llama la función
 <br>Para validar un formulario, es necesario la inyección de la directiva correspondiente.
 <br> Es indispensable tener todo esto dentro de una etiqueta form y dentro del botón que ejecuta la función o el submit del formulario.. 
 <pre>ng-disabled="nombre_formulario.$invalid"</pre><br>
 * @param {Array} array contiene el array de las validaciones que son puestas en el atributo "validacion".
 * @param {String} data Corresponde al string a evaluar.
 * @return {string} mensaje de validación en caso de error o true en caso de estar correcto
 **/
                var oValidacionCampos={mensaje:""};
                var aValidacion=array.trim().split(",");
                for(var i=0; i<aValidacion.length; i++){

                     if(aValidacion[i]=="file"){
                      break;
                     }

                    if(aValidacion[i].search("required")!=-1){
                       var required=aValidacion[i].split("=");
                       if(required.length>1){
                        var mensaje=required[1];
                       }
                       else{
                        mensaje="El campo es requerido";
                       }
                       if(data=="" || data==null || data==undefined){
                           oValidacionCampos.mensaje=mensaje;
                           return oValidacionCampos.mensaje;
                       }
                    }

                    if(aValidacion[i]=="email"){
                           var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                           if(!email.test(data)) {
                               oValidacionCampos.mensaje="Debe ingresar una dirección de Correo Electrónico";
                               return oValidacionCampos.mensaje;
                           }
                    }   


                   /* if(aValidacion[i]=="numeric"){

                           if( !Number.isInteger(parseInt(data)) ) {
                               oValidacionCampos.mensaje="Debe ingresar un valor númerico";
                               return oValidacionCampos.mensaje;
                           }
                    }*/


                    if(aValidacion[i].search("numeric")!=-1){
                      var numeric=aValidacion[i].split("=");
                       if(numeric.length>1){
                        if(numeric[1]=="int"){
                         if(Number.isInteger(Number(data))==false){
                            oValidacionCampos.mensaje="Debe ingresar un número entero";
                            return oValidacionCampos.mensaje;
                         }
                        }
                       }
                       else{
                        if( !Number.isInteger(parseInt(data)) ) {
                          oValidacionCampos.mensaje="Debe ingresar un valor númerico";
                          return oValidacionCampos.mensaje;
                        }
                       }

                    }


                    if(aValidacion[i].search("minlength")!=-1) {
                           var min=aValidacion[i].split("=");
                           if( !(parseInt(min[1])<=data.length))   {
                               oValidacionCampos.mensaje="Debe ingresar un valor mínimo de "+min[1]+ " "+"caracteres";
                               return oValidacionCampos.mensaje;
                           }
                            
                    }

                    if(aValidacion[i].search("maxlength")!=-1) {
                           var min=aValidacion[i].split("=");
                           if( !(parseInt(min[1])>=data.length))   {
                               oValidacionCampos.mensaje="Debe ingresar un valor máximo de "+min[1]+ " "+"cáracteres";
                               return oValidacionCampos.mensaje;

                           }
                            
                    }

                    if(aValidacion[i].search("password")!=-1) {
                      var containsDigits = /[0-9]/.test(data)
                      var containsUpper = /[A-Z]/.test(data)
                      var containSpecial= !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\:<>\?]/g.test(data);
                           if( containsDigits==false || containsUpper==false || data.length<=5 || containSpecial==true)   {
                               oValidacionCampos.mensaje="Debe contener al menos un carácter en mayúscula,un número y un carácter especial";
                               return oValidacionCampos.mensaje;
                           } 
                    }

                    if(aValidacion[i].search("date")!=-1) {
                            var regEx = /^\d{4}-\d{2}-\d{2}$/;
                            var cadena=data.split('/').join('-'); 
                           if( cadena.match(regEx) == null)   {
                               oValidacionCampos.mensaje="Debe ingresar una fecha Valida en el formato YYYY/mm/dd";
                               return oValidacionCampos.mensaje;
                           }
                    }

                    if(aValidacion[i].search("equalto")!=-1) {
                            
                           var equal=aValidacion[i].split("=");

                           if( equal[1]!=data)   {
                               oValidacionCampos.mensaje="Este valor debe coincidir con el campo solicitado";
                               return oValidacionCampos.mensaje;
                           }
                    }
                    if(aValidacion[i].search("different")!=-1) {
                            
                           var equal=aValidacion[i].split("=");

                           if( equal[1]==data){
                               oValidacionCampos.mensaje="Este valor no debe ser igual a "+equal[1];
                               return oValidacionCampos.mensaje;
                           }
                    }
                    if(aValidacion[i].search("range")!=-1) {
                            
                           var cadena=aValidacion[i].split("=");
                           var rango=cadena[1].split("-");
                           var iData=parseFloat(data);
                           if( !(  ( (iData>=parseFloat(rango[0]) ) && ( iData<=parseFloat(rango[1]))) ) )   {
                               oValidacionCampos.mensaje="El valor debe estar entre "+ rango[0] +" y "+ rango[1];
                               return oValidacionCampos.mensaje;
                           }
                    }

                    if(aValidacion[i].search("domain_email")!=-1) {
                          var mail=aValidacion[i].split("=");
                          console.log(mail[1])
                          var re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
                          if (re.test(data)) {
                              if (data.indexOf(("@"+mail[1]), data.length - ("@"+mail[1]).length) === -1) {
                                oValidacionCampos.mensaje="El dominio debe terminar en "+mail[1];
                                return oValidacionCampos.mensaje;
                              } 
                          } else {
                                oValidacionCampos.mensaje="El dominio debe terminar en "+mail[1];
                              return oValidacionCampos.mensaje;
                          }
                    }
                }

                return true;
        }

 /** @ngdoc method
 * @module Validaciones
 * @name validacionJquery#fn_validarForm
 * @description
 * Se cargan los textos personalizados y la instanacia para generar las validaciones.
 **/
        /*oValidacionCampos.fn_validarForm = function(array,data) {
            return jQuery.extend(jQuery.validator.messages,oValidacionCustom);   
        }*/
    return oValidacionCampos;
})

