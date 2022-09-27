<?php
include 'Question.php';
include 'File.php';
include 'Request.php';
$a=json_decode("{
    \"question\": [{
            \"numero_question\": 1,
            \"intitule_question\": \"vous-etes vivant?\",
            \"type_question\": \"CH\",
            \"reponse_possible\": [
                \"oui\", \"non\"
            ],
            \"reponse_correct\": \"oui\"
        },
        {
            \"numero_question\": 3,
            \"intitule_question\": \"vous-etes alefa?\",
            \"type_question\": \"LIB\",
            \"reponse_possible\": [],
            \"reponse_correct\": null
        }
    ],
    \"recrutement\": \"RC1\"
}");
$ilaiko=$a->question;
$valide=array();
foreach($ilaiko as $b){
    $temp=new Question($b->numero_question,$b->intitule_question,$b->type_question,$b->reponse_possible,$b->reponse_correct);
    // echo $temp->right();
    if($temp->right()){
        $valide[]=$temp;
    }
}

$finality=new Questions($valide,$a->recrutement);
$soratana=json_encode($finality);
$directory="Questions/";
if(!is_dir($directory)){
    mkdir($directory);
}
File::write($directory."zavatra.json","w",$soratana);

?>