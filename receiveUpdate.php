<?php 
header('Access-Control-Allow-Origin: http://localhost:3000');
include_once './APPLICATION_PHP/baseconf.php';

$idcl=$_GET['idcl'];
$idre=$_GET['idre'];
$nb=$_GET['nb'];

$file=fopen("update.txt","a+");
fputs($file,$idcl);
fputs($file,$idre);
fputs($file,$nb);
fputs($file,"\n");
$where="idcandidat='$idcl' and idrecrutement='$idre'";
$set=array("noty"=>$nb);

$r->update("appointment",$set,$where);
fclose($file);
