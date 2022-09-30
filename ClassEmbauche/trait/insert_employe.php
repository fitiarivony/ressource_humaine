<?php
include('../../connection.php');
include('../Employe.php');
$employe =new Employe();
$employe->debany="zah";
$employe->idfonction="andrana";
$employe->iddept="essai";
$employe->salairebase=12000;
$employe->avis_embauchage("CA1","RE1");
?>