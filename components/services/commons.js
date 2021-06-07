angular.module("yeison.commons", [])

/**
 * @ngdoc service
 * @module Autenticación
 * @name auth
 * @description
 * Servicio para la autenticación de usuarios.
 **/

.factory("auth", function($state,$location,$window)
{
    oLogin={};
/**
 * @ngdoc method
 * @name auth#login
 * @param {String} correo correo  del usuario.
 * @param {String} password password del usuario.
 * @description
 * Permitir el ingreso de usuario al sistema
 **/
        oLogin.login=function(correo, password)
        {
            $window.sessionStorage.setItem("correo",correo);
            $window.sessionStorage.setItem("password",password);
            $window.sessionStorage.setItem("tipo_usuario","administrador"); 
            $state.go("home");
        },
/**
 * @ngdoc method
 * @name auth#logout
 * @description
 * Finaliza la sesión del usuario actual, redirigiendolo al login
 **/
        oLogin.logout=function()
        {
            $window.sessionStorage.removeItem("correo");
            $window.sessionStorage.removeItem("password");
            $location.path("/login");
        },
/**
 * @ngdoc method
 * @name auth#checkStatus
 * @description
 * Verifica si un usuario actualmente tiene sesión activa, en caso contrario se redigirá al login
 **/
        oLogin.checkStatus= function()
        {
            var aRutasPrivadas = [];
            var aRutas=$state.get(); //se obtiene un array con todos los posibles estados
            for(var i in aRutas)
            {
                aRutasPrivadas.push(aRutas[i].url);
            }

            if(this.in_array($location.path(),aRutasPrivadas) &&  ($window.sessionStorage.getItem("correo") === null) )
            {
                $location.path("/login")
            }
        },
/**
 * @ngdoc method
 * @name auth#in_array
 * @param {String} ubicacion recibe la ubicacíon actual de la vista.
 * @param {Array} aRutasPrivadas recibe un array con todas las rutas de la navegación.
 * @description
 * Verifica si un usuario actualmente tiene sesión activa, en caso contrario se redigirá al login
 **/
        oLogin.in_array = function(location, aRutasPrivadas)
        {
            var key = '';
            for(key in aRutasPrivadas)
            {
                if(aRutasPrivadas[key] == location)
                {
                    return true;
                }
            }
            return false;
        }
    return oLogin;

})

/**
 * @ngdoc service
 * @module Commons
 * @name eliminar
 * @description
 * Servicio para la eliminación de un determinado objeto, una vez que se confirme.
 **/

.factory('eliminar', function($state,$rootScope,$uibModal,popup_generico) {
    var oElim= {};
/**
 * @ngdoc method
 * @name eliminar#fn_generarPopupConfirm
 * @description
 * Servicio para la eliminación de un determinado objeto.
 * @param {object} objeto objeto que se desea eliminar.
 * @param {Array} array Array que contiene el objeto a eliminar.
 * @param {string} titulo titulo de la cabecera del popup de eliminar.
 * @param {string} contenido contenido del titulo del popup para eliminar.
 **/       
    oElim.fn_generarPopupConfirm = function(objeto,array,titulo,contenido) 
    {

      oElim.titulo=titulo;
      oElim.contenido=contenido;
      oElim.objeto=objeto;
      oElim.array=array;

      $rootScope.modalInstances.push($uibModal.open({
        template: '<form id="form_popup" class="form-horizontal"><div class="modal-header"><h3 class="modal-title">'+oElim.titulo+'</h3></div><div class="modal-body"><center>'+oElim.contenido+'</center></div><div class="modal-footer"><button  type="submit" class="btn btn-primary" ng-click="fn_confirmar()">OK</button><button  type="submit" class="btn btn-primary" ng-click="fn_CerrarModal()">no</button></div></form>',
        controller: function($scope)
        {
            $scope.fn_confirmar=function(){
                oElim.fn_confirmar();
            }
            $scope.fn_CerrarModal=function(){
                popup_generico.fn_CerrarModal();
            }
        },
        backdrop: 'static'
      }));
    }
/**
 * @ngdoc method
 * @name eliminar#fn_confirmar
 * @description
 * Función que elimina el objeto cuando se confirme el popup.
 **/       
    oElim.fn_confirmar = function()
    {
        var index =  oElim.array.indexOf(oElim.objeto);
        oElim.array.splice(index, 1);
        popup_generico.fn_CerrarModal();
    }
        return oElim;
})
