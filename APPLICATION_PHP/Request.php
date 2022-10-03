<?php
class Request{
    public ?PDO $connect=null;
    public function __construct(PDO $connection){
        if($connection!=null){
            $this->connect = $connection;
        }
    }
    public function getList(object $obj,$table,$fields="*"):array|null{
        $class=get_class($obj);
        $query="SELECT $fields FROM $table";
        if($this->connect!=null){
            $stmt=$this->connect->query($query);
            $s=$stmt->execute();
            $resultat=$stmt->fetchAll(PDO::FETCH_CLASS,$class);
            return $resultat;
        }
        return null;
    }

    public function get(object $obj,$table,$fields="*",$where="1=1"):array|null{
        $class=get_class($obj);
        $query="SELECT $fields FROM $table where $where";
        if($this->connect!=null){
            $stmt=$this->connect->query($query);
            $s=$stmt->execute();
            $resultat=$stmt->fetchAll(PDO::FETCH_CLASS,$class);
            return $resultat;
        }
        return null;
    }
    public function insert($table,$fields,$values):bool{
        $query="INSERT INTO $table($fields) VALUES($values)";
        $validation=false;
        if($values!=""){
            $statement=$this->connect->prepare($query);
            $validation=$statement->execute();
        }
        return $validation;
    }

    public function update($table,array $set,$where="1=1"):bool{
      
      
        $sets="";
       $ct=0;
       $alava=count($set);
       foreach($set as $key=>$val){
        $ask=is_numeric($val);
        if($ask){
            $val="'".$val."'";
        }
        $sets.= $key."=".$val.(($ct==$alava-1)?"":",");
        $ct++;
       }
      
       $query="UPDATE $table SET ".$sets." WHERE ".$where;
       $validation=false;
    
        $statement=$this->connect->prepare($query);
       
       return $statement->execute();
    }
}

?>