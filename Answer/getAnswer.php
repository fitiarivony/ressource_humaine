<?php
    include '../error/Error.class.php';
    include '../Answer.class.php';
    include '../File.php';
    include '../Request.php';
    include '../Connect.php';
    include './Parser.class.php';
    include '../connection/connect.php';
error_reporting(0);
header('Access-Control-Allow-Origin: http://localhost:3000');
$directory="data/";
$directory2="../Quest/Questions/";
$recrutement=$_GET["idrecrutement"];
$candidat=$_GET["idcandidat"];
$file=$directory.$candidat.$recrutement.".json";
$recrutement_f=$directory2.$recrutement.".json";
$valeur=file_get_contents($file);
$question=file_get_contents($recrutement_f);

$answ=json_decode($valeur);
$quest=json_decode($question);
// var_dump($answ);
$loop_anw=$answ->answers;
$loop_quest=$quest->question;
$retour=array();
$isa_choix=0;
$isa_libre=0;
if($loop_quest!=null){

    for($i=0;$i<count($loop_quest);$i++){
        $temp=new AnswerEval();
        if(strcmp($loop_quest[$i]->type_question,"CH")==0){
            $isa_choix++;
        }
        else{
            $isa_libre++;
        }
        if($loop_anw[$i]->numero==$loop_quest[$i]->numero_question){
            $temp->intitule_question=$loop_quest[$i]->intitule_question;
            $temp->numero_question=$loop_anw[$i]->numero;
            $temp->type_question=$loop_quest[$i]->type_question;
            $temp->reponse_client=$loop_anw[$i]->answer;
        //     $temp->reponse_correct=$loop_quest[$i]->reponse_correct;
            $retour[]=$temp;
        }
    }
    
    $tosend=new EvalNeed();
    // print_r($retour)
    $tosend->eval=$retour;
    $tosend->nb_libre=$isa_libre;
    $tosend->nb_qcm=$isa_choix;
    $tosend->embauche=$r->get(new Embauche(),"embauche","*","idrecrutement='".$recrutement."' AND idcandidat='".$candidat."'")[0];
    $json_send=json_encode($tosend);
    echo $json_send;
}
// echo json_encode($a);
// foreach($ans->answers as $key => $value){
//     $temp=new Parser();
//     $temp->numero_question=$value->numero;
//     $temp->reponse_correct=$value->answer;
//     $retour[]=$temp;
// }
?>