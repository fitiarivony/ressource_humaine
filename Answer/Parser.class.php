<?php
include '../embauche/Embauche.class.php';
class Parser{
    public int $numero_question;
    public string $intitule_question,$type_question;
    public ?string $reponse_correct;
    public function __construct(){
        // $this->numero_question = $numero_question;
        // $this->intitule_question = $intitule_question;
        // $this->type_question = $type_question;
        // $this->reponse_correct = $reponse_correct;
    }
}

class AnswerEval{
    public string $intitule_question;
    public string $type_question;
    public string $reponse_client;
    public int $numero_question;
    public function __construc(/*$intitule_question,$type_question,$reponse_client,$numero_question*/){
        // $this->intitule_question=$intitule_question;
        // $this->type_question=$type_question;
        // $this->reponse_client=$reponse_client;
        // $this->numero_question=$numero_question;
    }
}

class EvalNeed{
    public array $eval;
    public int $nb_libre;
    public int $nb_qcm;
    public Embauche $embauche;
}
?>