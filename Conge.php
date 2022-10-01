<?php
    
    class Conge
    {
        public function getNbrCongePris($idEmploye)
        {
            $nbrJour=0;
            try {
                $con = new PDO("pgsql:host=localhost;port=5432;dbname=rhtovo","societe", "mdp");
                $sql="select * from conge where idemploye='".$idEmploye."'";
                $resultats=$con->query($sql);
                $resultats->setFetchMode(PDO::FETCH_OBJ);
                while ($resultat=$resultats->fetch()) {
                    if($resultat->accepte){
                        $datetime1 = new DateTime($resultat->datedebut);
                        $datetime2 = new DateTime($resultat->datefin);
                        $interval = $datetime1->diff($datetime2);
                        $nbrJour=$interval->days+$nbrJour;
                    }
                    
                }
            } 
            catch (PDOException $e) 
            {
                        	print "Erreur ! : " . $e->getMessage();
                        	die();
            }
            return $nbrJour;
        }

        public function getSalaireBase($idEmploye)
        {
            $salaireBase=0;
            try {
                $con = new PDO("pgsql:host=localhost;port=5432;dbname=rhtovo","societe", "mdp");
                $sql="select * from employe where idemploye='".$idEmploye."'";
                $resultats=$con->query($sql);
                $resultats->setFetchMode(PDO::FETCH_OBJ);
                while ($resultat=$resultats->fetch()) {
                   $salaireBase=$resultat->salairebase;
                }
            } 
            catch (PDOException $e) 
            {
                        	print "Erreur ! : " . $e->getMessage();
                        	die();
            }
            return $salaireBase;
        }

        public function getNbrCongeNonPris($idEmploye)
        {
            $nbrJour=30-$this->getNbrCongePris($idEmploye);
            return $nbrJour;
        }

        public function calcule($idEmploye)
        {
            $value=$this->getNbrCongeNonPris($idEmploye)*$this->getSalaireBase($idEmploye);
            $value=$value/30;
            return $value;
        }

        
    }
    


?>