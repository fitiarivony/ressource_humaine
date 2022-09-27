<?php
include('Candidat.php');
include('Champ.php');

include('Statistiques.php');
$infocandidat=array(
  "nom"=>'Rakoto',
  "prenom"=>"Jean",
  "adresse"=>"IVI 101 Ambohimanarina",
  "datenaissance"=>"20-03-1996",
  "email"=>"rakotojean@gmail.com",
  "mdp"=>"jeanrakoto",
  "nompere"=>"Rakoto John",
  "nommere"=>"Rajao Marie"
);
// echo (json_encode($infocandidat));
// Candidat::insert($infocandidat);
$diplome=array();
$infodip=array(
  "iddiplome"=>"DI1",
  "filiere"=>"Marketing"
);
array_push($diplome,$infodip);

// echo json_encode($diplome);
// Candidat::assignerdiplome($diplome,"CA1");

$reponsechamp=array(
    "idchamp"=>'CH3',
    "valiny"=>"reponse"
);
$reponses=array();
array_push($reponses,$reponsechamp);
array_push($reponses,$reponsechamp);
// echo json_encode($reponses);
// Candidat::remplirchamp($reponses,"CA2");
// Champ::update_coefficient(Champ::select_all());
$insertion=array(
  "infocandidat"=>$infocandidat,
  "diplomes"=>$diplome,
  "champs"=>$reponses
);
// echo json_encode($insertion);

  // {"infocandidat":
    //     {"nom":"Faneva","prenom":"Jean","adresse":"Manjaka","datenaissance":"2021-08-22","email":"faneva","mdp":"mdp01","nompere":"hihi","nommere":"hoho"}
    //     ,"diplomes":[{"iddiplome":"DI1","filiere":"hhj"}
    //     ,{"iddiplome":"DI3","filiere":"jiji"}]
    //     ,"champs":[{"idchamp":"CH2","valiny":"jdjd"},{"idchamp":"CH3","valiny":"1"}]
    // }
$stats=Statistiques::get_statistiques('RE1');
echo json_encode($stats);
?>