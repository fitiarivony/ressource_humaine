<?php
class Employe 
{
    public $idemploye;
    public $nom;
    public $prenom;
    public $genre;
    public $adresse;
    public $situation_juridique;
    public $debany;
    public $matr_cnaps;
    public $dateEmbauche;
    public $idfonction;
    public $iddept;
    public $salairebase;

  public  function avis_embauchage($idcandidat,$idrecrutement){
        $sql="SELECT * from candidat where idcandidat='%s'";
        $sql=sprintf($sql,$idcandidat);
        $infocandidat=executeQuery($sql)[0];
        $sql="INSERT INTO employe
        (nom,prenom,genre,adresse,situation_juridique,debany,idfonction,iddept,salairedebase) 
        values 
        ('%s','%s','%s','%s','%s','%s','%s','%s','%s')
        ";
        $sql=sprintf($sql,$infocandidat['nom'],$infocandidat['prenom'],Employe::getGenre($idcandidat,$idrecrutement),$infocandidat['adresse'],Employe::getsituation_juridique($idcandidat,$idrecrutement),$this->debany,$this->idfonction,$this->iddept,$this->salairebase);
        echo $sql;
        // executeUpdate($sql);
    }
    
    static function getGenre($idcandidat,$idrecrutement){
        $sql="SELECT * from reponsechamp join champ on reponsechamp.idchamp=champ.idchamp where idrecrutement='%s' and idcandidat='%s' and nom='genre'";
        $sql=sprintf($sql,$idrecrutement,$idcandidat);
        return executeQuery($sql)[0]["valiny"];
    }
    static function getsituation_juridique($idcandidat,$idrecrutement){
        $sql="SELECT * from reponsechamp  join champ on reponsechamp.idchamp=champ.idchamp where idrecrutement='%s' and idcandidat='%s' and nom='situation juridique'";
        $sql=sprintf($sql,$idrecrutement,$idcandidat);
        return executeQuery($sql)[0]["valiny"];
    }
    public function affilier_cnaps(){
        $sql="UPDATE employe set matr_cnaps='%s' where idemploye='%s'";
        $sql=sprintf($sql,"CS".Employe::getNextval_cnaps(),$this->idemploye);
        echo $sql;
        // executeUpdate($sql);
    }
    static function getNextval_cnaps(){
        $sql="SELECT nextval('affil_cnaps_seq') as valiny";
        // return executeQuery($sql)[0]["valiny"];
    }
    public static function send_notif(){
        $sql="  select trunc(date_part('day',current_timestamp-dateEmbauche::timestamp)/7),employe.* from employe where trunc(date_part('day',current_timestamp-dateEmbauche::timestamp)/7)>=2";
        return executeQuery($sql);    
    }
    public static function get_info($idcandidat,$idrecrutement){
        $sql="SELECT * from candidat where idcandidat='%s'";
        $sql=sprintf($sql,$idcandidat);
        
        $infocandidat=executeQuery($sql)[0];
        $candidat=array(
            "nom"=>$infocandidat["nom"],
            "prenom"=>$infocandidat["prenom"],
            "genre"=>Employe::getGenre($idcandidat,$idrecrutement),
            "situation"=>Employe::getsituation_juridique($idcandidat,$idrecrutement),
            "adresse"=>$infocandidat['adresse'],
        );
        return $candidat;

    }
    public static function getDepartement(){
        $sql="SELECT *from departement";
        return executeQuery($sql);
    }
    public static function getFonction(){
        $sql="SELECT *from fonction";
        return executeQuery($sql);
    }

}

?>