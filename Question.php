<?php
class Question{
    public $numero_question=-1;
    public $intitule_question="///";
    public $type_question="ntnt";
    public array $reponse_possible;
    public $reponse_correct="asd1";
    public function __construct($numero_question, $intitule_question, $type_question, $reponse_possible,$reponse_correct){
        $this->numero_question = $numero_question;
        $this->intitule_question = $intitule_question;
        $this->type_question = $type_question;
        $this->reponse_possible = $reponse_possible;
        $this->reponse_correct = $reponse_correct;
    }

    public function right():bool{
        return $this->numero_question!=-1 && strcmp($this->intitule_question,"///")!=0 && strcmp($this->type_question,"ntnt")!=0 && strcmp($this->reponse_correct,"asd1")!=0;
    }

}

class Questions{
    public $question=array();
    public $idrecrutement;
    public function __construct($question,$idrecrutement) {
        $this->question = $question;
        $this->idrecrutement = $idrecrutement;
    }
}
?>