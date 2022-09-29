<?php
header('Access-Control-Allow-Origin:http://localhost:3000');
include ('../connection.php');
include('../Candidat.php');
Candidat::insert($_GET['info']);
?>