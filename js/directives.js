

//bueno

angular.module("yeison.CustomDirective", [])


.directive("nombreDirectiva", function() {
    return function(scope,element,attrs){
        
    }    
})

/**
 * @ngdoc directive
 * @module Validaciones
 * @name validacion
 * @description
 * Servicio para generar validaciones a los formularios. Incluir en el fichero index.html y agregar el atributo validacion.
 * @restrict 'AE' //the elements the directive is restricted to.
 * @element  <input type='text' ng-model='texto' validacion="required minlength=2"/> los valores se introducen sin comillas, ej: equalto=perro Necesario agregar name al formulario, y cada elemento a evaluar con un ng-model
    Para validar incluir la linea ng-click='fn_ValidarTodo(this.nombre_formulario); nombre_formulario.$valid && funcion_ejecutada_al_estar_validado()'
  ej ng-click='fn_ValidarTodo(this.form); form.$valid && enviar_Datos()'
 **/
.directive('validacion', function ($timeout,$rootScope,validacionCampos,$compile) {

    return {
        restrict: 'AE',
        require: 'ngModel',

        link: function (scope, element, attrs, ngModel) {
                if (!ngModel){
                        console.log("no hay modal")
                return;          
        }
        //se valida al iniciar el formulario
        $timeout(function() {
            //form.$setValidity('check'+sNombreModel, false); //validacion inicial
            /*var val=ngModel.$viewValue;
             fn_validarIndividual(attrs,val,element,false);*/
             //console.log(attrs,val,element,false)
         })


        scope.fn_ValidarTodo= function(sFormActive){

                var form=fn_getForm(sFormActive);
                for(var i in form.$$controls){
                        fn_validarIndividual(form.$$controls[i].$$attr,form.$$controls[i].$viewValue,angular.element(form.$$controls[i].$$element[0]),true,sFormActive);
                }
        }


        function fn_getForm(sFormActive){
            if(sFormActive==undefined){
                if(attrs.$$element[0].type!=undefined){
                    var sNombreForm="";
                    var sAuxNombreForm=element.parent(); //elemento inicial
                    if(sAuxNombreForm[0].localName!='form'){
                        while(sNombreForm!='form'){
                            sAuxNombreForm=sAuxNombreForm.parent()
                            sNombreForm=sAuxNombreForm[0].localName;
                        }
                    }
                    var form=scope[sAuxNombreForm[0].name];
                    return form;
                }
            }else{
                return  sFormActive;; 
            }                     
        }
        function fn_validarIndividual(attrs,val,element,mostar_error,sFormActive){
            var form=fn_getForm(sFormActive);
            
            if(attrs.type=='checkbox' ){
                var sNombreModel=attrs.ngModel;
                var aOptions=attrs.validacion.split(",");
                var error='';
                for(var t in aOptions){
                    var iKey_check=0;
                    var oCheckbox={};
                    var cont_check_true=0;
                    angular.forEach(angular.element('[ng-model="'+sNombreModel+'"]'), function(value, key){

                        iKey_check=key;
                        oCheckbox=value;
                        if(value.checked==true){
                            cont_check_true++;
                        }
                    });
                    
                    var sValidacion=aOptions[t].split("=");
                    if(sValidacion[0]=='required'){
                        if(cont_check_true==0){
                            if(sValidacion.length!=1){
                                var error=sValidacion[1];
                            }
                            else{
                                var error="Este campo es necesario";
                            }

                        }

                    }
                    if(sValidacion[0]=='checkbox_min'){
                        if(cont_check_true<parseInt(sValidacion[1])) {
                            var sPlural=parseInt(sValidacion[1])==1?'opcion':'opciones.';
                            var error="Debes seleccionar como mínimo "+ sValidacion[1] +" "+sPlural;
                        }

                    }
                    if(sValidacion[0]=='checkbox_max'){
                        if(cont_check_true>parseInt(sValidacion[1])) {
                            var sPlural=parseInt(sValidacion[1])==1?'opcion':'opciones.';
                            var error="Debes seleccionar como máximo "+ sValidacion[1] +" "+sPlural;
                        }
                    }
                    
                }
                if(error==''){
                    var elemento_eliminar=(angular.element((document.getElementById('error'+sNombreModel ))));                
                    elemento_eliminar.remove();
                    form.$setValidity('check'+sNombreModel, true);

                }
                else{
                    form.$setValidity('check'+sNombreModel, false);
                    var elemento_eliminar=(angular.element((document.getElementById('error'+sNombreModel ))));
                    elemento_eliminar.remove();
                    if(mostar_error==true){
                        var newDirective = angular.element('<div id="error'+sNombreModel+'"'+ ' class="span_wrong" style="display:block;margin-top:3px;margin-bottom: 5px;">'+error+'</div>');
                        var final_checkbox = angular.element(oCheckbox);
                        final_checkbox.parent().after(newDirective); //se genera despues del label o span
                        $compile(newDirective)(scope);
                    }

                }
            }

               if(attrs.type=='radio' ){

                var sNombreModel=attrs.ngModel;
                var name=attrs.name;
                if(attrs.validacion.search("required")!=-1){
                    var iKey_check=0;
                    var oradio={};
                    var cont_check_true=0;
                    angular.forEach(angular.element('[name="'+name+'"]'), function(value, key){
                        iKey_check=key;
                        oradio=value;
                        if(value.checked==true){
                            cont_check_true++;
                        }
                    });
                    if(cont_check_true==0) {
                        var elemento_eliminar=(angular.element((document.getElementById('error'+name ))));
                        elemento_eliminar.remove();
                        if(mostar_error==true){
                            var newDirective = angular.element('<div id="error'+name+'"'+ ' class="span_wrong" style="display:block;margin-top:5px;margin-bottom: 5px;">'+"Debes seleccionar una opción"+'</div>');
                             var final_radio = angular.element(oradio);
                            final_radio.parent().after(newDirective);
                            $compile(newDirective)(scope);
                        }
                        form.$setValidity('radio'+sNombreModel, false);
                    }
                    else{
                        var elemento_eliminar=(angular.element((document.getElementById('error'+name ))));
                        elemento_eliminar.remove();
                        form.$setValidity('radio'+sNombreModel, true);
                    }
                }
            }


            if(attrs.type=='file' ){
                var sNombreModel=attrs.ngModel;
                var aValidacionFile=attrs.validateFile.split(",");
                for(var t in aValidacionFile){

                     if(aValidacionFile[t]=="required" ){
                       if(element[0].files.length!=0){
                            form.$setValidity('validateFile_R_'+sNombreModel, true);
                            var error="";
                            if ( !angular.element((document.getElementById('error'+sNombreModel )) ).length ) 
                            {
                                var elemento_eliminar=(angular.element((document.getElementById('error'+sNombreModel ))));
                                elemento_eliminar.remove();    
                            }    
                        }
                      
                       else{
                            form.$setValidity('validateFile_R_'+sNombreModel, false);
                            var elemento_eliminar=(angular.element((document.getElementById('error'+sNombreModel ))));
                            elemento_eliminar.remove();  
                            var error="Debes seleccionar un archivo";
                            element.addClass("input_wrong");
                            var newDirective = angular.element('<div id="error'+sNombreModel+'"'+ ' class="span_wrong" style="display:block;margin-top:5px;    margin-bottom: 5px;">'+error+'</div>');
                            element.after(newDirective);
                            $compile(newDirective)(scope);
                       }
                   }
                }
            }

            if(attrs.$$element[0].type!='radio' && attrs.$$element[0].type!='checkbox'  && attrs.$$element[0].type!=undefined && attrs.$$element[0].type!="file" ){

                  var validacion=validacionCampos.fn_getCamposEditables(attrs.validacion,val);
                  var sNombreModel=attrs.ngModel;
                  if (validacion==true) {
                    element.removeClass("input_wrong");
                    /*element.addClass("correct"); */
                    form.$setValidity('validacion', true);
                    var elemento_eliminar=(angular.element((document.getElementById('error'+sNombreModel ))));
                    elemento_eliminar.remove();


                } else {
                   /* element.removeClass("correct");*/
                    form.$setValidity('validacion', false);
                    var elemento_eliminar=(angular.element((document.getElementById('error'+sNombreModel ))));
                    elemento_eliminar.remove();
                    if(mostar_error==true){
                        element.addClass("input_wrong");
                        var newDirective = angular.element('<div id="error'+sNombreModel+'"'+ ' class="span_wrong" style="display:block;margin-top:5px;    margin-bottom: 5px;">'+validacion+'</div>');
                        element.after(newDirective);
                        $compile(newDirective)(scope);
                    }
                }

            }

        }// fin método

        ngModel.$parsers.push(function(val){
            fn_validarIndividual(attrs,val,element,true);
            ngModel.$render();
            return val; 

        })
              
        }
    };
})

/**
 * @ngdoc directive
 * @module Validaciones
 * @name validateFile
 * @description
 * Servicio para generar validaciones a los archivos inut file, agregando la directiva validate-file y como atributos los posibles valores:.
 * <pre>document
 * image
 * size=tamano_bytes</pre>
 * @restrict 'AE' //the elements the directive is restricted to.
 * @element  <input type="file" id='file' accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
text/plain, application/pdf, image/*"  ng-model='file' validate-file="document,size=15000000" />
required
document
size(en bytes 15000000 = 15mb)
 **/
.directive('validateFile', function ($timeout,$compile) {

    return {
        restrict: 'AE',
        require: 'ngModel',

        link: function (scope, element, attrs, ngModel) {
                    if (!ngModel){
                return;
          }
          //initially set false validation of form

            function fn_getForm(){
                    if(attrs.$$element[0].type!=undefined){
                        var sNombreForm="";
                        var sAuxNombreForm=element.parent(); //elemento inicial
                        if(sAuxNombreForm[0].localName!='form'){
                            while(sNombreForm!='form'){
                                sAuxNombreForm=sAuxNombreForm.parent()
                                sNombreForm=sAuxNombreForm[0].localName;
                            }
                        }
                        var form=scope[sAuxNombreForm[0].name];
                        return form;
                    }                
            }


            function bindEvent(element, type, handler) {
                if (element.addEventListener) {
                  element.addEventListener(type, handler, false);
                } else {
                  element.attachEvent('on' + type, handler);
                }
            }
            

               bindEvent(element[0], 'change', function() {
                   var form=fn_getForm();
                   var sNameFile=this.files[0].name;
                   var sExtension=sNameFile.split(".");
                   sExtension=sExtension[sExtension.length-1].toLowerCase();
                   aValidacionFile=attrs.validateFile.split(",");
                   var sNombreModel=attrs.ngModel;
                   var error="";    
                       for(var t in aValidacionFile){


                           if(aValidacionFile[t]=="image"){
                               if(sExtension=="gif" || sExtension=="jpg" || sExtension=="jpeg" || sExtension=="png" || sExtension=="bmp"){
                           
                               }
                               else{
                                     error="Debes seleccionar una imágen válido";                          
                                   //element[0].value=null;
                               }
                           }
                           if(aValidacionFile[t]=="document"){
                                   if(sExtension=="doc" || sExtension=="docx" || sExtension=="xlsx" || sExtension=="xls" || sExtension=="csv" || sExtension=="pdf" || sExtension=="ppt" || sExtension=="pptx"){
                                
                                   }
                                   else{

                                    error="Debes seleccionar un documento válido";
                                       //element[0].value=null;
                                   }
                           }
                            if(aValidacionFile[t].search("size")!=-1){
                                var size=aValidacionFile[t].split("=");
                                if(this.files[0].size<size[1]){
       
                                }
                                else{
                                   error="El archivo excede los "+size[1]+" bytes.";
                                }
                           }
                       }
                       if(error==""){
                            form.$setValidity('validateFile'+sNombreModel, true);
                            element.removeClass("input_wrong");
                            var elemento_eliminar=(angular.element((document.getElementById('error'+sNombreModel ))));
                            elemento_eliminar.remove();
                       }
                       else{
                            form.$setValidity('validateFile'+sNombreModel, false);
                            element.addClass("input_wrong");
                            var elemento_eliminar=(angular.element((document.getElementById('error'+sNombreModel ))));
                            elemento_eliminar.remove();
                            var newDirective = angular.element('<div id="error'+sNombreModel+'"'+ ' class="span_wrong" style="margin-top:5px;     margin-bottom: 5px;">'+error +'</div>');
                            element.after(newDirective) ;
                            $compile(newDirective)(scope);
                       }
                       scope.$apply(function(){
                            ngModel.$render();
                        })

             });

        }
    };
})

.directive('resize', ['$window','$timeout', function ($window,$timeout) {
     return {
        link: link,
        restrict: 'A'           
     };
     function link(scope, element, attrs){
        scope.width = $window.innerWidth;
        
            function onResize(){
                // uncomment for only fire when $window.innerWidth change   
                if (scope.width !== $window.innerWidth)
                {
                    scope.width = $window.innerWidth;
                    if(scope.width>992){
                        if(scope.seccion!="home" && scope.seccion!=""){
                            angular.element( document.querySelector( '#menu' ) ).addClass('centrar_seccionPpal_menu');
                            angular.element( document.querySelector( '#'+scope.seccion ) ).addClass('otrasSecciones');
                            angular.element( document.querySelector( '#home' ) ).addClass('centrar_seccionPpal');
                            if(scope.seccion=='resumen'){
                                $timeout(function(){
                                 scope.seccion='';
                                })
                                $timeout(function(){
                                 scope.seccion='resumen';
                                },1000)
                            }
                        }

                    }
                    else{
                        if(scope.seccion=='resumen'){
                            $timeout(function(){
                             scope.seccion='';
                            })
                            $timeout(function(){
                             scope.seccion='resumen';
                            },1000)
                        }


                        angular.element( document.querySelector( '#menu' ) ).removeClass('centrar_seccionPpal_menu');
                        angular.element( document.querySelector( '#home' ) ).removeClass('centrar_seccionPpal');
                        angular.element( document.querySelector( '.section.otrasSecciones' ) ).removeClass('otrasSecciones');
                    }
                    scope.$digest();
                }
            };

            function cleanUp() {
                angular.element($window).off('resize', onResize);
            }

            angular.element($window).on('resize', onResize);
            scope.$on('$destroy', cleanUp);
     }    
 }]);
