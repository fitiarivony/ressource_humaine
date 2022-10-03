<?php
        include '../error/Error.class.php';
        include '../Answer.class.php';
        include '../File.php';
        include '../Request.php';
        include '../Connect.php';
        include '../connection/connect.php';
        include './Embauche.class.php';
    error_reporting(0);
    header('Access-Control-Allow-Origin: http://localhost:3000');

    $a=$_GET["q"];
    $b=$r->get(new Recrutement(),"recrutement","*","idrecrutement='".$a."'");
    $ab=new RecruJSON();
    $ab->poste=$b[0];

    echo json_encode($ab);
?>