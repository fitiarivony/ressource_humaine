<?php
        include '../error/Error.class.php';
        include '../Answer.class.php';
        include '../File.php';
        include '../Request.php';
        include '../Connect.php';
        include './Parser.class.php';
        include '../connection/connect.php';
    // error_reporting(0);
    header('Access-Control-Allow-Origin: http://localhost:3000');

    $directory="data/";
    $directory2="../Quest/Questions/";

    $a=json_decode($_GET["q"]); //get the data
    
    $recrutement=$a->idrecrutement;
    $candidat=$a->idcandidat;
    $file=$directory.$candidat.$recrutement.".json";
    $recrutement_f=$directory2.$recrutement.".json"; // read json files
    $valeur=file_get_contents($file);
    $question=file_get_contents($recrutement_f);

    $answ=json_decode($valeur);
    $quest=json_decode($question);  //decode it to stdclass
// var_dump($answ);
    $loop_anw=$answ->answers;   //get answers 
    $loop_quest=$quest->question; // get questions

    $note_libre=0;
    $note_qcm=0;

    $isa_choix=0;
    $isa_libre=0;

    $isa=count($loop_quest);
    for($i=0;$i<$isa;$i++){
        if(strcmp($loop_quest[$i]->type_question,"CH")==0){
            $isa_choix++;
        }
        else{
            $isa_libre++;
        }
    }
// count QCM and free-------------


    for($i=0;$i<count($loop_quest);$i++){
        if($loop_quest[$i]->numero_question== $loop_anw[$i]->numero){
            if(strcmp($loop_quest[$i]->type_question,"CH")==0){
                if(strcmp($loop_anw[$i]->answer,$loop_quest[$i]->reponse_correct)==0){
                    
                    $note_qcm+=(20)/$isa_choix;
                }
            }
           
        }
    }
// QCM note
// -------------------------------------------
$note_lb=$a->note;


foreach($note_lb as $n){
    $note_libre+=($n->note*20)/$isa_libre;
}
$sur_20_qcm=0;
$sur_20_libre=0;
$nb_div=2;
if($isa_choix!=0){
    $sur_20_qcm=($note_qcm)/$isa_choix;
    $nb_div=1;
}
if($isa_libre!=0){
    $sur_20_libre=$note_libre/$isa_libre;
    $nb_div=1;
}

$total=intval($sur_20_libre+$sur_20_qcm)/2;
// echo $sur_20_libre." ".$total;
$dd=new Erreur("Noter");
if(!$r->update("reponsetestcandidat",array("note"=>intval($total)),"idrecrutement='".$recrutement."' AND idcandidat='".$candidat."'")){
$dd=new Erreur("Pas mis a jour");
}
echo json_encode($dd);

// $total=($note_qcm/$isa_choix)+($note_libre/$isa_libre);
// echo $total/2;
?>