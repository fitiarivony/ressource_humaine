<?php
class DNS{
    static function mysql($host="localhost",$db){
        return "mysql:host=$host;dbname=$db;charset=UTF8";
    }
    static function pgsql($host="localhost",$port,$base){
        return "pgsql:host=$host;port=$port;dbname=$base";
    }
}

class Connection{    
    static function connect($base,$user="root",$mdp="",$port=8089) : PDO {
        echo "tonga";
        //$dsn='pgsql:host=localhost;port=8089;dbname='.$base;
        //echo $dsn;
        
        $connection=new PDO(DNS::pgsql("localhost",$port,$base),$user,$mdp);
        return $connection;
    }
}
?>