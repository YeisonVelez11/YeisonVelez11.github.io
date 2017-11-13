angular.module("yeison.constantes", [])



angular.module('angularRoutingApp.controllers', []);
var angularRoutingApp = angular.module('angularRoutingApp.controllers');

// Creación del módulo
var angularRoutingApp = angular.module('yeison', ['ui.router', 'ngAnimate', 'ngSanitize','ui.swiper','ngMap', 'ngScrollable','yeison.utilidades','yeison.validaciones','yeison.CustomDirective']);

//trigger al cambiar de vista para validar loggin
// Configuración de las rutas
angularRoutingApp.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

$urlRouterProvider.otherwise("/");
$locationProvider.html5Mode(false).hashPrefix('');
$stateProvider
    .state('home', {
      url: "/",
      templateUrl: 'templates/home.html',
      controller: 'homeController'
    })
});







