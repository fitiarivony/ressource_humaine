<?php
class Embauche{
    public string $idrecrutement,$iddept,$nomposte,$infoposte,$requis,$nomdept,$nomcandidat,$prenomcandidat,$idcandidat;
}
class Recrutement{
    public string $idrecrutement,$iddept,$nomposte,$infoposte,$requis;
}
class RecruJSON{
    public Recrutement $poste;
}
?>