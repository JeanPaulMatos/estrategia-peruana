<?php

// Llamando a los campos
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$codigo = $_POST['codigo'];
$cantidad = $_POST['cantidad'];
$mensaje = $_POST['mensaje'];

// Datos para el correo
$destinatario = "mat9807jp@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "De: $nombre \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Correo: $correo \n";
$carta .= "Codigo: $codigo \n";
$carta .= "Cantidad: $cantidad \n";
$carta .= "Mensaje: $mensaje";

// Enviando Mensaje
mail($destinatario, $asunto, $carta);

?>