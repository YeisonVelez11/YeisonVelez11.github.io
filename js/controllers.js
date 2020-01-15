angularRoutingApp.controller('homeController', function($scope,$state,$http,$timeout,$window,alerta,preload){


	$scope.educacion=
	[
		{
			"nombre":"Ingeniería en Sistemas y Telecomunicaciones.",
			"periodo":"2010 - 2015",
			"institucion":"Universidad de Manizales - Programa de ingeniería en sistemas y telecomunicaciones."
		},
		{
			"nombre":"Certificado de formación de desarrollo en dispositivos móviles ANDROID 80 horas presenciales.",
			"periodo":"Septiembre 2012",
			"institucion":"People Contact S.A.S"
		},
		{
			"nombre":"Curso de Diseño y Desarrollo de juegos para dispositivos móviles y android.",
			"periodo":"28 de diciembre de 2012",
			"institucion":"Crystal Elearning (Málaga, España)."
		},		
		{
			"nombre":"EVENTO CO – CREA Manizales – Colombia.",
			"periodo":"4 y 5 de mayo de 2013",
			"institucion":"ParqueSoft - Manizales."
		},	
		{
			"nombre":"1er Encuentro Nacional sobre Innovación tecnológica y empresarial.",
			"periodo":"23 al 24 de Febrero de 2012",
			"institucion":"Universidad Nacional de Colombia, sede Manizales - La Nubia."
		},	
		{
			"nombre":"Participación en Seminario de Tecnología de la información y comunicación.",
			"periodo":"10 de Septiembre de 2012",
			"institucion":"Escuela superior de administración pública ESAP."
		},	
		{
			"nombre":"Curso de “Bioingeniería: explorando datos fisiológicos para aplicaciones interactivas” con una intensidad de 14 horas.",
			"periodo":"31 de Agosto y 1 de Septiembre",
			"institucion":"Centro de Bioinformática y Biología Computacional de Colombia (BIOS)."
		},
		{
			"nombre":"Curso: “Fundraising: herramientas y metodología en la búsqueda de financiamiento para proyectos de CTeI.“",
			"periodo":"26 Y 27 de Julio 2016",
			"institucion":"Centro de Bioinformática y Biología Computacional de Colombia (BIOS)."
		},
		{
			"nombre":"Diplomado en computación científica, simulación, Big Data, con una intensidad de 120 horas.",
			"periodo":"octubre de 2016 - Diciembre 2016",
			"institucion":"Centro de Bioinformática y Biología Computacional de Colombia (BIOS)."
		},
		{
			"nombre":"Angular 5 y TypeScript - Curso de introducción paso a paso",
			"periodo":"Abril de 2018",
			"institucion":"Udemy"
		},

		{
			"nombre":"Curso de Angular 6 - Desde cero hasta profesional.",
			"periodo":"Mayo de 2018",
			"institucion":"Udemy."
		},
		{
			"nombre":"Aprende Ionic 3 desde cero (antes Ionic 2): Curso inmersivo.",
			"periodo":"Mayo de 2018",
			"institucion":"Udemy."
		},
		{
			"nombre":"ionic 2 y ionic 3: Crea apps para Android e iOS desde cero.",
			"periodo":"Junio de 2018",
			"institucion":"Udemy."
		},
		{
			"nombre":"Curso de FlexBox desde 0",
			"periodo":"Julio de 2018",
			"institucion":"Udemy."
		},
		{
			"nombre":"Certified UX Design Foundation",
			"periodo":"Septiembre - Noviembre 2018",
			"institucion":"BS Group"
		},
		{
			"nombre":"React Native Expo",
			"periodo":"Enero 2020",
			"institucion":"Udemy"
		}



	]




	$scope.testimonios=
	[

		{
			"nombre":"Felipe Vega",
			"testimonio":"Yeison is a very talented software engineer who's always committed to the code duties. Among his multiple technical skills at integrating presentation layer with back-end layer, he has the ability to come up with solutions for complex challenges very quickly. He's always open to suggestions when it comes to receive feedback regarding his code. He has the potential to become a key player at any software development team.",
			"imagen":"img/felipe.jpg",
			"cargo":"Senior Ingeniero UX, LiveVox"
		},

		{
			"nombre":"Esteban Correa",
			"testimonio":" Laboró bajo mi supervisión desde el 4 de mayo del año 2015 en los diferentes aplicativos del centro y su desenvolvimiento resultó muy satisfactorio tanto para mi, como para la empresa que representó",
			"imagen":"img/esteban.jpg",
			"cargo":"Director del área de bioingeniería, Centro de Bioinformática y Biología computacional de Colombia (BIOS)"
		},

		{
			"nombre":"Jorge Hernán Franco",
			"testimonio":"Cada vez me siento mas orgulloso de todo el potencial que tienes, sigue  para adelante y que dios te siga bendiciendo",
			"imagen":"img/franco.jpg",
			"cargo":"Coordinador de prácticas en la Universidad de Manizales. (Magister en Educacion. Docencia)"
		}
	]

	$scope.experiencia=
	[
		{
			"nombre":"Almera Information Management S.A.S",
			"tiempo": "Agosto de 2014 - Febrero de 2015",
			"funcion": "Desarrollo web y carga de información a plataforma de gestión de proyectos"
		},

		{
			"nombre":"Tic Solutions Integration",
			"tiempo": "Diciembre 2015 - Mayo de 2016",
			"funcion": "Desarrollo web full stack y labores de levantamiento de requerimientos y diseño y especificación."
		},
		{
			"nombre":"Centro de Bioinformática y Biología Computacional de Colombia",
			"tiempo": "Mayo de 2015 - Mayo de 2018",
			"funcion": "Desarrollo web, front-end en labores de apoyo en la implementación de los aplicativos del centro desde el punto de vista de funcionalidad. Manejo de muro de visualización de datos."
		},
		{
			"nombre":"MDos4 - Portal de la Vida",
			"tiempo": "Junio de 2018 (Trabajo actual)",
			"funcion": "Líder de desarrollo de aplicaciones móviles."
		},
		{
			"nombre":"Universidad de Manizales",
			"tiempo": "Octubre 1 2018 - Octubre 28 2019",
			"funcion": "Apoyo en aplicativos afines a la analítica de datos"
		},
		{
			"nombre":"CIA TRANSPORTADORA S.A.S",
			"tiempo": "Octubre 28 2019 - Enero 14 de 2020",
			"funcion": "Apoyo en app de gestión de containers"
		}

	]

	$scope.distinciones=
	[
		{
			"distincion":"Excelencia Académica VII semestre"
		},
		{
			"distincion":"Excelencia Académica VIII semestre"
		},
		{
			"distincion":"Excelencia Académica IX semestre"
		},
		{
			"distincion":"Certificado de reconocimiento por el mejor resultado en la evaluación de desempeño en BIOS (22 de Diciembre del 2016)"
		}
	]

	//$scope.$emit('content.changed');
	$scope.imagen_personal="img/yeison2.jpg";

	$scope.portafolio=false;

	if($window.innerWidth<992){
		$timeout(function(){
			$scope.seccion='resumen';
		})
	}/*
	else{
		console.log('hola que hace')
		$scope.ocultarSeccion=false;
		$scope.seccionActiva='*';
		$scope.otrasSecciones="transicion_alaldo_home";
		        $scope.resolucion=992;
	}
*/

	$scope.fn_cerrarPortalio= function(){
		$scope.portafolio=false;
		/*document.getElementById('video').pause();
		document.getElementById('video').currentTime = 0;*/
	}
	var timeout=15000;

	$scope.enviarCorreo= function(){

		preload.on();
		$http({
            method: 'GET',
            url: 'php/enviarCorreo.php?nombre='+$scope.nombre+"&email="+$scope.email+"&asunto="+$scope.asunto+"&mensaje="+$scope.mensaje,
            data: {"prueba":"prueba"},
            timeout: timeout
        }).then(function(data) {
           preload.off();
           alerta.fn_generarPopup('error','No se ha podido enviar tu correo, por favor intentalo de nuevo más tarde, o escribeme a mi correo!')
		   //alerta.fn_generarPopup('exito','Se ha enviado tu correo, me pondré en contacto contigo en cuanto pueda. Muchas gracias!')
        },function(data) {
             preload.off();
             alerta.fn_generarPopup('error','No se ha podido enviar tu correo,por favor intentalo de nuevo más tarde!')
        });
	}

	$scope.aMedia=
	[
	   {
		"descripcion":"App para acercar  usuarios al sistema de salud.",
		"titulo":"clicsalud",
		"video":"img/clicsaludc.JPG",
		"imagen":"img/clicsalud.jpg"
	   },
	   {
		"descripcion":"Recopilación, seguimiento y estadística del uso de la app clicsalud",
		"titulo":"Portal Clicsalud",
		"video":"img/portal clicsaludc.JPG",
		"imagen":"img/portal clicsalud.PNG"
	   },
	   {
		"descripcion":"Análisis de sentimiento en PQRS en el sector salud",
		"titulo":"NLP v1",
		"video":"img/nlpv1c.JPG",
		"imagen":"img/nlpv1.png"
	   },
	   {
		"descripcion":"APP para identificación de flores mediante la captura fotográfica",
		"titulo":"e-Flora",
		"video":"img/plantappc.JPG",
		"imagen":"img/eflora.JPG"
	   },
	   {
		"descripcion":"APP para medir el éxito de pacientes que se someten a intervención bariátrica",
		"titulo":"Bariatrack",
		"video":"img/bariatrackc.JPG",
		"imagen":"img/bariatrack.JPG"
	   },
	   {
		"descripcion":"Red de empresas colombianas del sector BIO que se conectan para hacer negocios y proyectos.",
		"titulo":"BiotecRed",
		"video":"img/biotecredc.JPG",
		"imagen":"img/logo_biotec.png"
	   },
	   {
		"descripcion":"Portal para rendición de cuentas y entregables para el proyecto de Regalías",
		"titulo":"Portal Regalías",
		"video":"img/portal_regaliasc.JPG",
		"imagen":"img/portal_regalias.JPG"
	   },
	   {
		"descripcion":"Portal informativo sobre procesos internos del área",
		"titulo":"SisbioTV",
		"video":"img/sisbiotvc.JPG",
		"imagen":"img/sisbiotv.JPG"
	   },
	   {
		"descripcion":"Lengua electrónica que analiza los alimentos e identifica su composición",
		"titulo":"Neurolengua",
		"video":"img/neurolenguac.JPG",
		"imagen":"img/neurolengua.JPG"
	   },
	   {
		"descripcion":"App y portal para la generación del 'efecto morphing' entre un humano a un simio",
		"titulo":"Morphing App",
		"video":"img/morphingc.JPG",
		"imagen":"img/morphing.JPG"
	   },
	   {
		"descripcion":"Análisis de sentimiento de tweets en tiempo real",
		"titulo":"NLP v2",
		"video":"img/nlpv2c.JPG",
		"imagen":"img/nlpv2.JPG"
	   },
	   {
		"descripcion":"Plataforma visualización datos clínicos",
		"titulo":"Dengue en Caldas",
		"video":"img/mapac.jpg",
		"imagen":"img/mapa.jpg"
	   },
	   {
		"descripcion":"Launcher para presentar los aplicativos del CBBC",
		"titulo":"Launcher",
		"video":"img/launcher.jpg",
		"imagen":"img/launcher.jpg"
	   },
	   {
		"descripcion":"Testigos electorales partido MIRA",
		"titulo":"Testigos MIra",
		"video":"img/testigoc.JPG",
		"imagen":"img/testigos.JPG"
	   },	   
	   {
		"descripcion":"Plataforma de transferencia de valores del sector salud",
		"titulo":"TVSS",
		"video":"img/TVSSC.JPG",
		"imagen":"img/TVSS.JPG"
	   },
	   {
		"descripcion":"App para visualizar ofertas,redimir cupones usando la geolocalización",
		"titulo":"TIN APP",
		"video":"img/background_tin.jpg",
		"imagen":"img/icon_tin.jpg"
	   },
	   {
		"descripcion":"Reúne tu información de salud",
		"titulo":"Midis App Salud",
		"video":"img/midis_back.jpg",
		"imagen":"img/icon_midis.jpg"
	   },
	   {
		"descripcion":"Sistema de Gestión de Calidad",
		"titulo":"SGC",
		"video":"img/sgc_c.jpg",
		"imagen":"img/sgc.jpg"
	   },
	   {
		"descripcion":"Cultura del servicio para focalizar la mejora a la atención para los usuarios UM",
		"titulo":"Cultura del servicio",
		"video":"img/csumanizales_c.JPG",
		"imagen":"img/csumanizales.JPG"
	   }
	 ]

	//indice del contenido
	$scope.index=-1;
	$scope.fn_transicion= function(sentido){
		$scope.portafolio=true;
		var elemento = document.getElementById('video');
		if(sentido!='next' && sentido!='prev'){
			//document.getElementById('video').src=$scope.aMedia[sentido].video;

			$scope.index=sentido;
			$scope.preview=$scope.aMedia[$scope.index].video;

		}
		
		if(sentido=='next'){
		$scope.index++;
			if($scope.aMedia.length<= $scope.index ){
				$scope.index=0;
			}
			//document.getElementById('video').src=$scope.aMedia[$scope.index].video;
			$scope.preview=$scope.aMedia[$scope.index].video;
			$scope.transicion="next";
			elemento.classList.remove($scope.transicion);
			void elemento.offsetWidth;
			elemento.classList.add($scope.transicion);
		}

		if(sentido=='prev'){
			$scope.index--;
			if($scope.index<=-1 ){
				$scope.index=$scope.aMedia.length-1;
			}
			//document.getElementById('video').src=$scope.aMedia[$scope.index].video;
			$scope.preview=$scope.aMedia[$scope.index].video;
			$scope.transicion="prev";
			elemento.classList.remove($scope.transicion);
			void elemento.offsetWidth;
			elemento.classList.add($scope.transicion);
		}
		//document.getElementById('video').play();
	}

	$scope.ver_seccion=function(seccion){
		//$("#home").addClass('centrar_seccionPpal')
		if($scope.seccion=="home" || $scope.seccion=="" ){
			angular.element( document.querySelector( '#imagen_personal' ) ).removeClass('mostrar_foto');
			$timeout(function(){
				angular.element( document.querySelector( '#imagen_personal' ) ).addClass('mostrar_foto');
			})
		}
		else{
			angular.element( document.querySelector( '#imagen_personal' ) ).addClass('mostrar_foto');
		}
		$scope.seccion=seccion;
		$scope.imagen_personal="img/yeison2.jpg";
		
		if($scope.seccion=='resumen'){
			$timeout(function(){
				angular.element( document.querySelector( '.section.otrasSecciones' ) ).removeClass('otrasSecciones');
				angular.element( document.querySelector( '#menu' ) ).addClass('centrar_seccionPpal_menu');
				angular.element( document.querySelector( '#'+seccion ) ).addClass('otrasSecciones');
				angular.element( document.querySelector( '#home' ) ).addClass('centrar_seccionPpal');
			})
		}
		else{
			angular.element( document.querySelector( '.section.otrasSecciones' ) ).removeClass('otrasSecciones');
			angular.element( document.querySelector( '#menu' ) ).addClass('centrar_seccionPpal_menu');
			angular.element( document.querySelector( '#'+seccion ) ).addClass('otrasSecciones');
			angular.element( document.querySelector( '#home' ) ).addClass('centrar_seccionPpal');			
		}
	}

	$scope.fn_home=function(){
		if($scope.seccion!='home'){
			angular.element( document.querySelector( '#imagen_personal' ) ).removeClass('mostrar_foto');
			$timeout(function(){
				angular.element( document.querySelector( '#imagen_personal' ) ).addClass('mostrar_foto');
			})
		}
		else{
			angular.element( document.querySelector( '#imagen_personal' ) ).addClass('mostrar_foto');
		}
		$scope.seccion="home";
		$scope.imagen_personal="img/yeison.jpg";
		angular.element( document.querySelector( '#menu' ) ).removeClass('centrar_seccionPpal_menu');
		angular.element( document.querySelector( '#home' ) ).removeClass('centrar_seccionPpal');
		angular.element( document.querySelector( '.section.otrasSecciones' ) ).removeClass('otrasSecciones');

	}
});
