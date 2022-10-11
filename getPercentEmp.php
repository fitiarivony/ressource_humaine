<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
include_once './APPLICATION_PHP/baseconf.php';
class Repart_Sex{
    public $isa;
    public $genre;
}
class EmpCat{
    public $isa;
    public $nomcategorie;
}
class EmpDept{
    public $isa;
    public $nomdept;
}
$listeRepart=$r->get(new Repart_Sex(),"v_repart_sex");
$listeEmpCat=$r->get(new EmpCat(),"v_emp_cat");
$listeEmpDept=$r->get(new EmpDept(),"v_emp_dept");
$data=array("listeRepart"=>$listeRepart,"listeEmpCat"=>$listeEmpCat,"listeEmpDept"=>$listeEmpDept);
echo json_encode($data);
?>