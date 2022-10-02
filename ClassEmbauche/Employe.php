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
    public $datenaissance;

  public  function avis_embauchage($idcandidat,$idrecrutement){
        $sql="SELECT * from candidat where idcandidat='%s'";
        $sql=sprintf($sql,$idcandidat);
        // echo $sql;
        $infocandidat=executeQuery($sql)[0];
        $sql="INSERT INTO employe
        (nom,prenom,genre,adresse,situation_juridique,debany,idfonction,iddept,salairebase,idcandidat,datenaissance) 
        values 
        ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')
        ";
        $sql=sprintf($sql,$infocandidat['nom'],$infocandidat['prenom'],Employe::getGenre($idcandidat,$idrecrutement),substr($infocandidat['adresse'],0,19)  ,Employe::getsituation_juridique($idcandidat,$idrecrutement),$this->debany,$this->idfonction,$this->iddept,$this->salairebase,$idcandidat,$infocandidat['datedenaissance']);
      //  echo $sql;
     
        executeUpdate($sql);
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
            "idcandidat"=>$infocandidat['idcandidat'],
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

    public static function getSuperieur($idfonction,$iddept){
        $sql="SELECT *from employe where idfonction in(
        select idfonction from categorie join fonction on categorie.idcategorie=fonction.idcategorie where substring(idgroupe from 3)::int>'%s') and iddept='%s' ";
        $sql=sprintf($sql,Employe::getGroupe($idfonction),$iddept);
        return executeQuery($sql);
    }
    public static function getGroupe($idfonction){
        $sql="SELECT substring(idgroupe from 3)::int numgroupe from fonction join categorie on fonction.idcategorie=categorie.idcategorie where idfonction='%s' ";
        $sql=sprintf($sql,$idfonction);

        return executeQuery($sql)[0]['numgroupe'];
    }
    public static function getNoContrat(){
        $sql="SELECT*from employe where idemploye not in(select idemploye from assignercontrat where datefin>current_timestamp);";
        return executeQuery($sql);
    }
    public static function getEmploye($idemploye){
        $sql="SELECT employe.*,nomdept,nomfonction,candidat.nomdupere,candidat.nomdelamere from employe join departement on employe.iddept=departement.iddept join fonction on employe.idfonction=fonction.idfonction left join candidat on employe.idcandidat=candidat.idcandidat where idemploye='%s'";
        $sql=sprintf($sql,$idemploye);
        return executeQuery($sql)[0];
    }
    public static function getIdContrat($nomcontrat){
        $sql="SELECT * from contrat where typecontrat='%s'";
        
        $sql=sprintf($sql,$nomcontrat);
        
        return executeQuery($sql)[0]['idcontrat'];
    }
    public static function assignercontrat($array){
      
        $sql="INSERT INTO assignercontrat(idemploye,datedebut,datefin,detail,idcontrat) values ('%s','%s','%s','%s','%s')";
        $sql=sprintf($sql,$array['idemploye'],$array['datedebut'],$array['datefin'],$array['detail'],Employe::getIdContrat($array['contrat']));
        // echo $sql;
        executeUpdate($sql);
         return array("etat"=>"true");
    }
}

?>