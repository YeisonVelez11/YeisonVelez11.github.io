<?php
	$mail = $_REQUEST["mensaje"];
	$titulo = $_REQUEST["asunto"];
	$headers = "MIME-Version: 1.0\r\n"; 
	$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
	$headers .= "From: ".$_REQUEST["nombre"]." < ".$_REQUEST["email"]." >\r\n";
	$bool = mail($_REQUEST["email"],$titulo,$mail,$headers);
	if($bool){
	    echo "ok";
	}else{
	    echo "Mensaje no enviado";
	}
?>
