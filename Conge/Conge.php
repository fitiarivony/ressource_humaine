<?php
    
    class Conge
    {
        public function getNbrCongePris($idEmploye)
        {
            $nbrJour=0;
            try {
                $con = new PDO("pgsql:host=localhost;port=8089;dbname=rhtovo","societe", "mdp");
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
                $con = new PDO("pgsql:host=localhost;port=8089;dbname=rhtovo","societe", "mdp");
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


    class EmployeList
    {
        public function comptagecongeTable()
        {
            $conge=new Conge();
            $nbrJour=0;
            try {
                $con = new PDO("pgsql:host=localhost;port=8089;dbname=rhtovo","societe", "mdp");
                $sql="select * from employe";
                $resultats=$con->query($sql);
                $resultats->setFetchMode(PDO::FETCH_OBJ);
                $array=array();

                while ($resultat=$resultats->fetch()) {
                    array_push($array,array(
                        "idemploye"=>$resultat->idemploye,
                        "nom"=>$resultat->nom,
                        "prenom"=>$resultat->prenom,
                        "conge"=>$conge->getNbrCongePris($resultat->idemploye),
                        "chiffres"=>$conge->calcule($resultat->idemploye),
                    ));
                }
               
            } 
            catch (PDOException $e) 
            {
                        	print "Erreur ! : " . $e->getMessage();
                        	die();
            }
            return json_encode($array);
        }
    }
    
    


?>