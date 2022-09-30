<?php
class Recrutement{
    public $idrecrutement;
    public $iddept;
    public $nomposte;
    public $infoposte;
    public $requis;
    static function select_annonce(){
        $sql="select*from recrutement 
        join departement 
        on recrutement.iddept=departement.iddept";
        return executeQuery($sql);
    }
    static function get_recrutement_done(){
        $sql="SELECT * FROM recrutement where cloture=0";
        return executeQuery($sql);
    }
}
?>