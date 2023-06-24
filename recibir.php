<?php
$con =mysqli_connect('localhost','root','','museo')  or die ('Error en la conexion servidor');
$sql = "INSERT INTO opiniones VALUES ('".$_POST["Correo"]."','".$_POST["Nombre"]."','".$_POST["Telefono"]."','".$_POST["Mensaje"]."')";
$resultado = mysqli_query($con, $sql) or die ('Error en el query database');
mysqli_close($con);
echo "Opinion enviada correctamente";

?>