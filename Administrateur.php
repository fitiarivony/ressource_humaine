<?php
class Administrateur{
    public $identifiant;
    public $mdp;
    static function logAdmin($array){
        $sql="SELECT * from administrateur where identifiant='%s' and mdp='%s'";
        $sql=sprintf($sql,$array['identifiant'],$array['mdp']);
        $valiny=executeQuery($sql);
        // print_r($array);
        // print_r($valiny);
        
        if (!$valiny) {
            $etat=array(
                "etat"=>false,
            );
            echo json_encode($etat);
        }else{
            $etat=array(
                "etat"=>true,
            );
            echo json_encode($etat);
        }
    }
}
?>