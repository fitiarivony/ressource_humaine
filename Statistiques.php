<?php
class Statistiques 
{
   static function firstcardselection($idrecrutement){
    //moyenne note
        $sql="SELECT avg(val) moyenne 
        from 
        ( SELECT sum(noty*coefficient)/sum(coefficient) val,
         idcandidat,idrecrutement
          from reponsechamp 
          join champ on reponsechamp.idchamp=champ.idchamp
          where idrecrutement='%s'
           group by idcandidat,idrecrutement) as moyenne;

        ";
        $sql=sprintf($sql,$idrecrutement);
        $moyennenote=executeQuery($sql)[0]["moyenne"];

    //nombre de diplome
    $sql="SELECT avg(moyenne) diplome
     from 
     (SELECT count(assignerdiplome.iddiplome) moyenne ,idrecrutement 
     from assignerdiplome join assignercandidature 
     on assignerdiplome.idcandidat=assignercandidature.idcandidat 
     where idrecrutement='%s'
     group by assignerdiplome.idcandidat,idrecrutement) 
     as val;
    ";
   $sql=sprintf($sql,$idrecrutement);
   $moyennenbdpilome=executeQuery($sql)[0]["diplome"];

   //nb d'année d'expérience
    $sql="SELECT avg(experience) experience 
    from 
    (SELECT 
    sum(valiny::int+0) experience 
    from reponsechamp join champ
     on reponsechamp.idchamp=champ.idchamp 
     where reponsechamp.idchamp='CH3' and idrecrutement='%s'
     group by idcandidat,idrecrutement) as annee;";
     $sql=sprintf($sql,$idrecrutement);
     $moyennenbexp=executeQuery($sql)[0]["experience"];
    //  echo $moyennenbexp;

    //Age moyenne
    $sql="SELECT 
    avg(extract(YEAR from AGE(current_date,datedenaissance))) age 
    from candidat 
    join assignercandidature 
    on candidat.idcandidat=assignercandidature.idcandidat 
    where idrecrutement='%s'
    group by candidat.idcandidat,idrecrutement;
    ";
     $sql=sprintf($sql,$idrecrutement);
     $moyenneage=executeQuery($sql)[0]["age"];
    //  echo $moyenneage;
    $stat=array();
     $object=array(
        "id"=>1,
        "attribut"=>"moyenne des notes",
        "value"=>$moyennenote,
    );
    
    array_push($stat,$object);
    $object=array(
        "id"=>2,
        "attribut"=>"moyenne du nb de diplome",
        "value"=>$moyennenbdpilome,
    );
    array_push($stat,$object);
    $object=array(
        "id"=>3,
        "attribut"=>"moyenne du nb d experience",
        "value"=>$moyennenbexp,
    );
    array_push($stat,$object);
    $object=array(
        "id"=>4,
        "attribut"=>"moyenne d age",
        "value"=>$moyenneage,
    );
    array_push($stat,$object);
    
    return $stat;
    }
    static function secondcardselection($idrecrutement){
        //genre prédominant
        $sql="select 
        count(idreponse),'Femme' as sexe 
        from reponsechamp join champ 
        on reponsechamp.idchamp=champ.idchamp  
        where champ.nom='genre' and valiny like '%Femme%' and idrecrutement='".$idrecrutement."'
        union
        select count(idreponse) nombre,'Homme' 
        from reponsechamp join champ 
        on reponsechamp.idchamp=champ.idchamp
         where champ.nom='genre' and valiny like '%Homme%' and idrecrutement='".$idrecrutement."';
        ";
        //echo $sql;
        $nb=executeQuery($sql);
        $predominance=array();
        if ($nb[0]["count"]>=$nb[1]["count"]) {
            $homme=array(
                "nb"=>$nb[0]["count"],
                "id"=>"Homme"
            );
            array_push($predominance,$homme);
        }else{
            $femme=array(
                "nb"=>$nb[0]["count"],
                "id"=>"Femme"
            );
            array_push($predominance,$femme);
        }
        // print_r($nb);
        $total=0;
        foreach ($nb as $value) {
            $total+=$value["count"];
        }
        $chiffres=array();
        foreach ($nb as $value) {
            $tab=array(
                "sexe"=>$value["sexe"],
                "moyenne"=>($value['count']/$total)*100
            );
            array_push($chiffres,$tab);
        }
        $stats=array(
            "predominance"=>$predominance,
            "chiffres"=>$chiffres
        );
        // print_r($stats);
        return $stats;
    }
    static function get_statistiques($idrecrutement){
        $first=Statistiques::firstcardselection($idrecrutement);
        $second=Statistiques::secondcardselection($idrecrutement);
        $val=array(
           
            "first"=>$first,
            "second"=>$second,
        );
        return $val;
    }
    static function get_stats(){
        $sql="SELECT * from recrutement where idrecrutement in (select idrecrutement from reponsechamp join champ on reponsechamp.idchamp=champ.idchamp)";
        $result=executeQuery($sql);
        $val=array();
        for ($i=0; $i <count($result); $i++) { 
          array_push($val,Statistiques::get_statistiques($result[$i]['idrecrutement']));
        }
        print_r($val);
    }
    
}

?>