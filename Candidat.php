<?php
include('connection.php');
class Candidat
{
    public $idcandidat;
    public $nom;
    public $prenom;
    public $adresse;
    public $datedenaissance;
    public $email;
    public $mdp;
    public $nompere;
    public $nommere;
   static function insert($array)
    {
        $sql="INSERT INTO candidat(nom,prenom,adresse,datedenaissance,email,mdp,nomdupere,nomdelamere) values ('%s','%s','%s','%s','%s','%s','%s','%s')";
        $sql=sprintf($sql,$array['nom'],$array['prenom'],$array['adresse'],$array['datenaissance'],$array['email'],$array['mdp'],$array['nompere'],$array['nommere']);
        echo $sql."\n";

        executeUpdate($sql);

    }
    static function assignerdiplome($array,$idcandidat)
    {
        foreach ($array as $value) {
            $diplome="INSERT INTO assignerdiplome(idcandidat,iddiplome,filiere) values ('%s','%s','%s') ";
           $diplome=sprintf($diplome,$idcandidat,$value['iddiplome'],$value['filiere']);
        //    executeUpdate($diplome);
        echo $diplome.'\n';
        }

    }
   static function remplirchamp($array,$idcandidat){
        
        foreach ($array as $value) {
            $sql="INSERT INTO reponsechamp(idcandidat,idchamp,valiny) values ('%s','%s','%s') ";
            $sql=sprintf($sql,$idcandidat,$value['idchamp'],$value['valiny']);
            echo $sql."\n";
            executeUpdate($sql);
        }
    }
  
    static function insererCandidat($array,$idrecrutement){
        Candidat::insert($array['infocandidat']);
        Candidat::assignercandidature(Candidat::getLastCandidat(),$idrecrutement);
        Candidat::assignerdiplome($array['diplomes'],Candidat::getLastCandidat());
        Candidat::remplirchamp($array['champs'],Candidat::getLastCandidat());
        

    }
    static function getLastCandidat(){
        $sql="select*from candidat order by substring(idcandidat from 3 )::integer desc limit 1;";
        $resultat=executeQuery($sql);
        // print_r($resultat);
        return $resultat[0]['idcandidat'];
    }
    static function assignercandidature($idcandidat,$idrecrutement){
        $sql="INSERT INTO assignercandidature (idcandidat,idrecrutement) values('%s','%s')";
         $sql=sprintf($sql,$idcandidat,$idrecrutement);
        echo $sql."\n";
         executeUpdate($sql);
    }

    static function listembauche($idrecrutement){
        $sql="select*from assignercandidature join candidat on candidat.idcandidat=assignercandidature.idcandidat where idrecrutement='%s' and candidat.idcandidat not in (select idcandidat from employe where idcandidat is not null);";
        $sql=sprintf($sql,$idrecrutement);
        return executeQuery($sql);
    }
    
    
}

?>