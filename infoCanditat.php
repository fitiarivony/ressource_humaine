<?php 
header('Access-Control-Allow-Origin: http://localhost:3000');
include_once './APPLICATION_PHP/baseconf.php';
$idcandidat=$_GET['idc'];
$idrecrutement=$_GET['idr'];
class Champ{
    public $nom;
    public $idchamp;
}
class ReponseChamp{
    public $idcandidat;
    public $idreponse;
    public $valiny;
    public $idchamp;
}
class Candidat
{
    public $idcandidat;
    public $nom;
    public $prenom;
}
$champ=new Champ();
$rChamp=new ReponseChamp();
$cand=new Candidat();
$listechamp=$r->get($champ,"champ","idchamp,nom","idrecrutement="."'".$idrecrutement."' order by idchamp");
$reponseCand=$r->get($rChamp,"reponsechamp","idreponse,idchamp,idcandidat,valiny","(idchamp in (select idchamp from champ where idrecrutement="."'".$idrecrutement."')) and idcandidat="."'".$idcandidat."' order by idchamp");
    $infoCanditat=$r->get($cand,"candidat","idcandidat,nom,prenom","idcandidat="."'".$idcandidat."'");
$data=array("listechamp"=>$listechamp,"reponsechamp"=>$infoCanditat,"rc"=>$reponseCand);
echo json_encode($data);
?>