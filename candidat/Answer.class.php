<?php
class Answer{
    public $idcandidat;
    public array $answers;
    public $recrutement;
    public function __construct($idcandidat, $answers, $recrutement){
        $this->idcandidat = $idcandidat;
        $this->answers = $answers;
        $this->recrutement = $recrutement;
    }
}
?>