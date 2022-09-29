<?php 

include_once './APPLICATION_PHP/Connect.php';
include_once './APPLICATION_PHP/Request.php';
$r=new Request(Connection::connect("rhtovodev","postgres","root",5432));



?>