<?php 
header('Access-Control-Allow-Origin: http://localhost:3000');
$data=json_decode($_GET['data'],true);
// print_r($data);

function createDateDeb($data){
    $JetH=explode("T",$data);
    $JMA=explode("-",$JetH[0]);
    $Hr=explode(":",$JetH[1]);
    $date=mktime($Hr[0],$Hr[1],0,$JMA[1],$JMA[2],$JMA[0]);
    return $date;
}
function createHeure($data){
    $hr=explode(":",$data);
    $heure=mktime($hr[0],$hr[1],0,0,0,0);
    // print_r($hr);
    return $heure;
}
function createBureau($data){
    $tab=array();
    for ($i=0; $i < count($data); $i++) { 
        $tab[]=$data[$i]['value'];
    }
    return $tab;
}


$listeCandidat=["CA1","CA2","CA3","CA4","CA5","CA6"];
$dateDeb = mktime(16,0,0,date("m"),date("d"),date("Y"));
$dateDeb = createDateDeb($data['dateDebut']);
createHeure($data['heureDeb']);
function getHour($date){
    return mktime(date("H",$date),date("i",$date),date("s",$date));
}
function mkAppointment($listeCandidat,$dateDeb,$debutJournee,$finJournee){
    $resultat=array();
    $dateDeb=mktime(date("H",$dateDeb),date("i",$dateDeb)-20,date("s",$dateDeb),date("m",$dateDeb),date("d",$dateDeb),date("Y",$dateDeb));
    foreach($listeCandidat as $cand){
        $dateappoint=mktime(date("H",$dateDeb),date("i",$dateDeb)+20,date("s",$dateDeb),date("m",$dateDeb),date("d",$dateDeb),date("Y",$dateDeb));
        $datefin=mktime(date("H",$dateappoint),date("i",$dateappoint)+20,date("s",$dateappoint),date("m",$dateappoint),date("d",$dateappoint),date("Y",$dateappoint));
        if (getHour($dateappoint)<getHour($debutJournee)) {
            $dateappoint=mktime(date("H",$debutJournee),date("i",$debutJournee),date("s",$debutJournee),date("m",$dateappoint),date("d",$dateappoint),date("Y",$dateappoint));
            $datefin=mktime(date("H",$dateappoint),date("i",$dateappoint)+20,date("s",$dateappoint),date("m",$dateappoint),date("d",$dateappoint),date("Y",$dateappoint));
        }
        if (getHour($datefin)>getHour($finJournee)) {
            $dateappoint=mktime(date("H",$debutJournee),date("i",$debutJournee),date("s",$debutJournee),date("m",$dateappoint),date("d",$dateappoint)+1,date("Y",$dateappoint));
            $datefin=mktime(date("H",$dateappoint),date("i",$dateappoint)+20,date("s",$dateappoint),date("m",$dateappoint),date("d",$dateappoint),date("Y",$dateappoint));
        }
        while (date("N",$dateappoint)==6 ||date("N",$dateappoint)==7) {
            $dateappoint=mktime(date("H",$debutJournee),date("i",$debutJournee),date("s",$debutJournee),date("m",$dateappoint),date("d",$dateappoint)+1,date("Y",$dateappoint));
            $datefin=mktime(date("H",$dateappoint),date("i",$dateappoint)+20,date("s",$dateappoint),date("m",$dateappoint),date("d",$dateappoint),date("Y",$dateappoint));
        }
        $resultat[]=array("candidat"=>$cand,"date"=>date("Y-m-d\TH:i",$dateappoint));
        $dateDeb=$dateappoint;
    }
    return $resultat;
}
function mkAppointmentMoreNb(array $listeCandidat,$dateDeb,$debutJournee,$finJournee,array $listeBureau,$idr){
    $nb=count($listeBureau);
    $resultat=array();
    $iBureau=0;
    //$dateDeb=mktime(date("H",$dateDeb),date("i",$dateDeb)-20,date("s",$dateDeb),date("m",$dateDeb),date("d",$dateDeb),date("Y",$dateDeb));
    foreach($listeCandidat as $cand){
        $decalage=0;
        if($iBureau==$nb){
            $decalage=20;
            $iBureau=0;
        }
        $dateappoint=mktime(date("H",$dateDeb),date("i",$dateDeb)+$decalage,date("s",$dateDeb),date("m",$dateDeb),date("d",$dateDeb),date("Y",$dateDeb));
        $datefin=mktime(date("H",$dateappoint),date("i",$dateappoint)+20,date("s",$dateappoint),date("m",$dateappoint),date("d",$dateappoint),date("Y",$dateappoint));
        if (getHour($dateappoint)<getHour($debutJournee)) {
            $dateappoint=mktime(date("H",$debutJournee),date("i",$debutJournee),date("s",$debutJournee),date("m",$dateappoint),date("d",$dateappoint),date("Y",$dateappoint));
            $datefin=mktime(date("H",$dateappoint),date("i",$dateappoint)+20,date("s",$dateappoint),date("m",$dateappoint),date("d",$dateappoint),date("Y",$dateappoint));
        }
        if (getHour($datefin)>getHour($finJournee)) {
            $dateappoint=mktime(date("H",$debutJournee),date("i",$debutJournee),date("s",$debutJournee),date("m",$dateappoint),date("d",$dateappoint)+1,date("Y",$dateappoint));
            $datefin=mktime(date("H",$dateappoint),date("i",$dateappoint)+20,date("s",$dateappoint),date("m",$dateappoint),date("d",$dateappoint),date("Y",$dateappoint));
        }
        while (date("N",$dateappoint)==6 ||date("N",$dateappoint)==7) {
            $dateappoint=mktime(date("H",$debutJournee),date("i",$debutJournee),date("s",$debutJournee),date("m",$dateappoint),date("d",$dateappoint)+1,date("Y",$dateappoint));
            $datefin=mktime(date("H",$dateappoint),date("i",$dateappoint)+20,date("s",$dateappoint),date("m",$dateappoint),date("d",$dateappoint),date("Y",$dateappoint));
        }
        $resultat[]=array("candidat"=>$cand,"date"=>date("Y-m-d\TH:i",$dateappoint),"bureau"=>$listeBureau[$iBureau%$nb],"idrecrutement"=>$idr);
        $dateDeb=$dateappoint;
        $iBureau++;
    }
    return $resultat;
}
$deb=createHeure($data['heureDeb']);
$fin=createHeure($data['heureFin']);
$Bureau=createBureau($data['bureaux']);
// print_r($Bureau);
$test=mkAppointmentMoreNb($listeCandidat,$dateDeb,$deb,$fin,$Bureau,$data['idrecrutement']);
echo json_encode($test);
?>

