angular.module('docApp').value('DOCS_NAVIGATION', {
  "guide": {
    "id": "guide",
    "name": "Guide",
    "navGroups": [
      {
        "name": "Guide",
        "type": "groups",
        "href": "guide",
        "navItems": [
          {
            "name": "howToUse",
            "type": "",
            "href": "guide/howToUse"
          }
        ]
      }
    ]
  },
  "api": {
    "id": "api",
    "name": "API",
    "navGroups": [
      {
        "name": "Autenticación",
        "type": "groups",
        "href": "api/Autenticación",
        "navItems": [
          {
            "name": "function",
            "type": "section",
            "href": "api/Autenticación/function"
          },
          {
            "name": "validarLogin",
            "type": "function",
            "href": "api/Autenticación/function/validarLogin"
          },
          {
            "name": "fn_abrirModal",
            "type": "function",
            "href": "api/Autenticación/function/fn_abrirModal"
          },
          {
            "name": "fn_ModalAviso",
            "type": "function",
            "href": "api/Autenticación/function/fn_ModalAviso"
          },
          {
            "name": "fn_CerrarModal",
            "type": "function",
            "href": "api/Autenticación/function/fn_CerrarModal"
          },
          {
            "name": "service",
            "type": "section",
            "href": "api/Autenticación/service"
          },
          {
            "name": "auth",
            "type": "service",
            "href": "api/Autenticación/service/auth"
          }
        ]
      },
      {
        "name": "Validaciones",
        "type": "groups",
        "href": "api/Validaciones",
        "navItems": [
          {
            "name": "directive",
            "type": "section",
            "href": "api/Validaciones/directive"
          },
          {
            "name": "validacion",
            "type": "directive",
            "href": "api/Validaciones/directive/validacion"
          },
          {
            "name": "validateFile",
            "type": "directive",
            "href": "api/Validaciones/directive/validateFile"
          },
          {
            "name": "service",
            "type": "section",
            "href": "api/Validaciones/service"
          },
          {
            "name": "validacionJquery",
            "type": "service",
            "href": "api/Validaciones/service/validacionJquery"
          }
        ]
      },
      {
        "name": "Commons",
        "type": "groups",
        "href": "api/Commons",
        "navItems": [
          {
            "name": "service",
            "type": "section",
            "href": "api/Commons/service"
          },
          {
            "name": "eliminar",
            "type": "service",
            "href": "api/Commons/service/eliminar"
          }
        ]
      },
      {
        "name": "Utilidades",
        "type": "groups",
        "href": "api/Utilidades",
        "navItems": [
          {
            "name": "service",
            "type": "section",
            "href": "api/Utilidades/service"
          },
          {
            "name": "popup_generico",
            "type": "service",
            "href": "api/Utilidades/service/popup_generico"
          },
          {
            "name": "alerta",
            "type": "service",
            "href": "api/Utilidades/service/alerta"
          },
          {
            "name": "http",
            "type": "service",
            "href": "api/Utilidades/service/http"
          },
          {
            "name": "ErrorPeticion",
            "type": "service",
            "href": "api/Utilidades/service/ErrorPeticion"
          },
          {
            "name": "preload",
            "type": "service",
            "href": "api/Utilidades/service/preload"
          }
        ]
      }
    ]
  }
});
