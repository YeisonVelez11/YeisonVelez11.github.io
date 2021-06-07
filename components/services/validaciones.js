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

