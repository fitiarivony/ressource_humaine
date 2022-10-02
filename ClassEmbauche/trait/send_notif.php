<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include('../../connection.php');
include('../Employe.php');
$notif=Employe::send_notif();
echo json_encode($notif);
?>