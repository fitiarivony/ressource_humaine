<?php
//fonction connection à la base postgresql
function returnConnection(){
    $dsn='pgsql:host=localhost;port=5432;dbname=rhtovodev';
    try {
        $dbh = new PDO($dsn, 'postgres', 'root');
        return $dbh;
        
    } catch (Exception $e) {
        print "Erreur ! : " . $e->getMessage();
        die();
    }
}


//fonction qui récupère la reponse de la requete 
function executeQuery($query){
    $dbh=returnConnection();
    $resultat=$dbh->query($query);
    $resultat=$resultat->fetchAll(PDO::FETCH_ASSOC);
    return $resultat;
}

//fonction qui execute seulement la requete
function executeUpdate($query){
    $dbh=returnConnection();
    $dbh->query($query);
}
?>