<?php
class Salaire_Min{
    public $idsalairemin;
    public $sme;
    public $sma;
    public $idcategorie;
    public $datemodif;
    public function insert(){
        $sql = "INSERT INTO salaires(sme,sma,idcategorie) values
        ('%s','%s','%s')";
        $sql=sprintf($sql,$this->sme,$this->sma,$this->idcategorie);
        //echo $sql;
        executeUpdate($sql);
        return array("etat"=>true);
        
    }
    public function update(){
        $sql="UPDATE salaires SET sme = '%s', sma = '%s',datemodif=current_timestamp where idcategorie = '%s' ";
        $sql=sprintf($sql,$this->sme,$this->sma,$this->idcategorie);
        //echo $sql;
         executeUpdate($sql);
        return array("etat"=>true);
    }
    public static function vao_inserer(){
        $sql="SELECT * from categorie where idcategorie not in (select idcategorie from salaires);";
        return executeQuery($sql);
    }
    public static function efa_inserer(){
        $sql="SELECT * from categorie where idcategorie  in (select idcategorie from salaires);";
        return executeQuery($sql);
    }
}   
?>