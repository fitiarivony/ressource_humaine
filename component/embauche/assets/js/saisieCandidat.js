const nomA=document.getElementById("nomA");
const prenomA=document.getElementById("prenomA");
const age=document.getElementById("age");
const genre=document.getElementById("genre");
const anne=document.getElementById("anne");
const diplome=document.getElementById("diplome");

var inpnom=document.getElementById("nom");
var inpprenom=document.getElementById("prenom");
var inpDateN=document.getElementById("DateN");
var sGenre=document.getElementById("genreSelect");
var exp=document.getElementById("exp");
var sDiplome=document.getElementById("diplomeSelect");

function afficheInfo() 
{
    nomA.value=inpnom.value;
    prenomA.value=inpprenom.value;
    if (getAge(inpDateN.value)<18) {
        age.classList.add("minor");
        age.value=getAge(inpDateN.value)+" ans (mineur)";
    }
    else{
        age.classList.remove("minor");
        age.value=getAge(inpDateN.value)+" ans";
    }
    genre.value=sGenre.value;
    if(exp.value<0)
    {
        exp.value=0;
    }
    else{
        anne.value=exp.value;
    }
    diplome.value=sDiplome.value;
    
}

function getAge(dateN) {
    var dateS=new String(dateN);
    var y=dateS.split("-");
    var date=new Date();
    var yer=date.getFullYear()-y[0];
    
    
    return yer;
    
}

function anneeExp() 
{
    if(exp.value<0)
    {
        exp.value=0;
    }
    else{
        anne.value=exp.value;
    }
}