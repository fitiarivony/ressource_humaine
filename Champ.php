<?php
class Champ 
{
    public $idchamp;
    public $nom;
    public $coefficient;
    public $idrecrutement;
    
    static function update_coefficient($array){
        
        foreach ($array as  $value) {
           
           $sql="UPDATE champ set coefficient='%s' where idchamp='%s'";
           $sql=sprintf($sql,$value['coefficient'],$value['idchamp']);
           executeUpdate($sql);
        }
    }
    static function select_all($idrecrutement){
        $sql="SELECT * FROM champ where idrecrutement='%s' and nom!='genre' and nom!='diplome' ";
        $sql=sprintf($sql,$idrecrutement);
        return executeQuery($sql);

    }
    
}

?>