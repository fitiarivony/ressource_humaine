<?php
include './connection.php';
class ReponseChamp 
{
    public $idreponse;
    public $idchamp;
    public $idcandidat;
    public $valiny;
    public $noty;
    static function insert($array){
        foreach ($array as $value) {
            $sql="INSERT INTO reponsechamp(idchamp,idcandidat,valiny) values ('%s','%s','%s')";
            $sql=sprintf($sql,$value['idchamp'],$value['idcandidat'],$value['valiny']);
            echo $sql;
        }
    }
    static function update($array){
        foreach ($array as  $value) {
            $sql="UPDATE reponsechamp SET noty='%s' where idreponse='%s'";
            $sql=sprintf($sql,$value['value'],$value['idreponse']);
            executeUpdate($sql);
        }
    }
}

?>