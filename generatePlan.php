<?php 
header('Access-Control-Allow-Origin: http://localhost:3000');

include_once './APPLICATION_PHP/baseconf.php';
class Employe{
    public $idEmploye;
    public $nom;
    public $prenom;
    public $idDepartment;
    
}
// function listeEmplDept($idDept){
    // include './APPLICATION_PHP/baseconf.php';
// }
$test=array();
for ($i=0; $i < 100; $i++) { 
    $test[]=array('idEmploye'=>"EMP".($i+1), 'nom'=>"Rakoto",'prenom'=>"Ndrema",'idDepartment'=>"DEPT1");
}

$idDept=isset($_GET["idDept"])?$_GET["idDept"]:"DE1";
$listeOlona=array('EMP1','EMP2','EMP3','EMP4','EMP5','EMP6','EMP7','EMP8','EMP9','EMP10','EMP11','EMP12','EMP13','EMP14','EMP15','EMP16');
$r->get(new Employe(),"employe","idEmploye,nom,prenom,iddept","iddept='$idDept'");

function findFirstSat($annee){
    $debut=mktime(8,0,0,7,1,$annee);
    while (date("N",$debut)!=6) {
        $debut=mktime(8,0,0,7,date("j",$debut)+1,$annee);
    }
    return $debut;
}
function genDaty($annee){
    $deb=findFirstSat($annee);
    $debVoalo=$deb;
    $finVoalo=mktime(8,0,0,date("m",$debVoalo),date("j",$debVoalo)+14,date("Y",$debVoalo));
    $res=array();
    for ($i=0; $i < 7; $i++) { 
        // echo ($i+1)." ".date("d-m-Y H:i:s",$debVoalo)." à ".date("d-m-Y H:i:s",$finVoalo)."\n";
        $res[]=array("debut"=>date("d-m-Y",$debVoalo), "fin"=>date("d-m-Y",$finVoalo));
        $debVoalo=mktime(8,0,0,date("m",$debVoalo),date("j",$debVoalo)+7,date("Y",$debVoalo));
        $finVoalo=mktime(8,0,0,date("m",$debVoalo),date("j",$debVoalo)+14,date("Y",$debVoalo));
    }
    return $res;
}
function coupe(array $listeOlona){
    $isa=count($listeOlona);
    $taloh=0;
    $indice=1;
    $vaovao=(int)(($isa*$indice)/7);
    $res=array();
    while ($vaovao<$isa+1){
        $temp=array();
        for ($i=$taloh; $i < $vaovao; $i++) { 
            $temp[]=$listeOlona[$i];
        }
        $taloh=$vaovao;
        $indice++;
        $vaovao=(int)(($isa*$indice)/7);
        $res[]=$temp;
    }
    return $res;
    
}
$annee=2022;
function genPlan($annee, $listeOlona){
    $partage=coupe($listeOlona);
    $daty=genDaty($annee);
    $data=array();
    for ($i=0; $i < count($partage); $i++) { 
        $data[]=array("partage"=>$partage[$i], "daty"=>$daty[$i]);
    }
    echo json_encode($data);
}
// $listeOlona=Employe::listeEmplDept("DPT1");
genPlan($annee, $test);

?>