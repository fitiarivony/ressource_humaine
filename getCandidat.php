<?php  
header('Access-Control-Allow-Origin: http://localhost:3000');
include_once './APPLICATION_PHP/baseconf.php';
class Candidature{
    public $idcandidat;
    public $idrecrutement;
    public $nom;
    public $prenom;
}
$id=$_GET['idrecrut'];
$listeCandidat=$r->get(new Candidature(),"assignercandidature join candidat on candidat.idcandidat=assignercandidature.idcandidat","idrecrutement,candidat.idcandidat,nom,prenom","idrecrutement='$id'");
$data=array("lsCand"=>$listeCandidat);
echo json_encode($data);

?>