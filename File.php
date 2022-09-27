<?php
class File{
    
    static function write($fichier,$method="a+",string $line){
        $fp=fopen($fichier,$method);    //Manokatra connection
        fputs($fp,$line.PHP_EOL);   //Manoratra anaty fichier
        fclose($fp);                //Manidy connection
    }
    static function read($filename){
        #Mamaky fichier
        $fp=fopen($filename, 'r');
        $data=array();
        while(!feof($fp)){      //jusqu'a la fin du fichier
            $zv=fgets($fp);
            
            if($zv!=null){      //raha null le ligne dia tsy atao ao
                $data[]=$zv;
            }
        }
        fclose($fp);            //manidy connection
        return $data;
    }
}
?>