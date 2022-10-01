CREATE role societe login password 'mdp';
CREATE DATABASE rhtovo;
alter DATABASE rhtovo owner to societe;


create sequence departement_seq;
create sequence recrutement_seq;
create sequence candidat_seq;
create sequence champ_seq;
create sequence reponsechamp_sep;
create sequence test_seq;
create sequence typequestion_seq;
create sequence question_seq;
create sequence reponsetest_sep;
create sequence appointment_seq;
create sequence diplome_seq;
create sequence assignerdiplome_seq;
create sequence reponsetestCandidat_seq;



create table departement(
    iddept varchar(10) default 'DE'||nextval('departement_seq') primary key,
    nomdept varchar(50)
);
insert into departement(nomdept) values ('Finance'),('Ressources Humaines'),('Logistique'),('Communication'),('Marketing');


create table recrutement(
    idrecrutement varchar(10) default 'RE'||nextval('recrutement_seq') primary key,
    iddept varchar(10),
    nomposte varchar(70) not null,
    infoposte varchar(300) not null,
    requis varchar(300) not null,
    cloture int not null default 0,
    datelimite date default '31/12/2022',
    FOREIGN KEY(iddept) REFERENCES departement(iddept) 
);

insert into recrutement(iddept,nomposte,infoposte,requis) values
('DE2','Assistant(e)','L assistant(e) appuiera l equipe RH en place dans les missions de recrutement,formation,evaluation,realisation des projets internes ',' Diplome Bacc+3 Management et Ressources Humaines avec bon niveau d anglais et de français'),
('DE5','Assistante','Nous recrutons une Assistante dont les attributions seront la gestion des appels d offres','Diplome bacc+3 en Marketing avec une experience de 2 ans sur un poste similaire ayant une excellente capacite redactionnelle'),
('DE4','Community Manager','Nous recrutons un(e) Community Manager dont les attributions seront de developper et animer la communication sur les reseaux sociaux,de creer et de mettre en ligne du contenu editorial ainsi qu assurer une veille technologique par le biais de nouveaux outils ou medias','Diplome en marketing,Communication,Multimedia avec 2 ans d experience minimum dans un poste similaire,ayant une excellence capacité redactionnelle')
;

create table candidat(
    idcandidat varchar(10) default 'CA'||nextval('candidat_seq') primary key,
    nom varchar(30) not null,
    prenom varchar(30) not null,
    adresse varchar(70) not null,
    datedenaissance date,
    email varchar(70) not null,
    mdp varchar(70) not null,
    nomdupere varchar(200) not null,
    nomdelamere varchar(200) not null
);
insert into candidat(nom,prenom,adresse,datedenaissance,email,mdp,nomdupere,nomdelamere) values 
('Rakoto','Jean','IVI 101 Ambohimanarina','20/03/1996','rakotojean@gmail.com','jeanrakoto','Rakoto John','Rajao Marie'),
('Rabe','Koto','IVJ 104 Itaosy','01/06/1998','rabekoto@gmail.com','arorabe','Rabe Aro','Ravelo Jeanine'),
('Andrianjaka','Iraka','IFF 109 Andoharanofotsy','01/06/1998','andrianjak@gmail.com','iraka','Andrianjaka Mino','Raholy Kanto')
;


create table diplome(
    iddiplome varchar(10) default 'DI'|| nextval('diplome_seq') primary key,
    nomdiplome varchar(100) not null
);
insert into diplome(nomdiplome) values('Bacc'),('Licence'),('Master'),('Doctorat');

create table assignerdiplome(
    idassignerdiplome varchar(10) default 'ASS'|| nextval('assignerdiplome_seq') primary key,
    iddiplome varchar(10),
    idcandidat varchar(10),
    filiere varchar(100),
    FOREIGN KEY (iddiplome) REFERENCES diplome(iddiplome),
    FOREIGN KEY (idcandidat) REFERENCES candidat(idcandidat)
);
insert into assignerdiplome (idcandidat,iddiplome,filiere) values
('CA1','DI1','A2'),('CA1','DI2','Marketing'),
('CA2','DI1','A2'),('CA2','DI2','Management_Comm'),('CA2','DI3','Management'),
('CA3','DI1','A2'),('CA3','DI2','Marketing'),('CA3','DI3','Marketing'),('CA3','DI4','Marketing');
;

create table assignercandidature(
    idcandidat varchar(10),
    idrecrutement varchar(10),
    FOREIGN KEY(idrecrutement) REFERENCES recrutement(idrecrutement),
    FOREIGN KEY(idcandidat) REFERENCES candidat(idcandidat)
);
insert into assignercandidature(idcandidat,idrecrutement) values
('CA1','RE1'),
('CA2','RE1'),
('CA3','RE2')
;

create table champ(
    idchamp varchar(10) default 'CH'|| nextval('champ_seq') primary key,
    nom varchar(20) not null,
    coefficient int not null default 1 check (coefficient>=1),
    idrecrutement varchar(10),
    FOREIGN KEY(idrecrutement) REFERENCES recrutement(idrecrutement)
);
insert into champ(nom,idrecrutement) values 
('genre','RE1'),
('situation juridique','RE1'),
('annee experience','RE1'),
('diplome','RE1'),

('genre','RE2'),
('situation juridique','RE2'),
('annee experience','RE2'),
('diplome','RE2')
;

create table reponsechamp(
    idreponse varchar(10) default 'RC'||nextval('reponsechamp_sep') primary key,
    idchamp varchar(10),
    idcandidat varchar(10),
    valiny varchar(10),
    noty int,
    FOREIGN KEY(idchamp) REFERENCES champ(idchamp),
    FOREIGN KEY(idcandidat) REFERENCES candidat(idcandidat)
);
insert into reponsechamp(idcandidat,idchamp,valiny,noty) values 
('CA1','CH1','Femme',19),('CA1','CH2','Propre',14),('CA1','CH3','5',12),('CA1','CH4','Beaucoup',16),
('CA2','CH1','Homme',14),('CA2','CH2','Propre',14),('CA2','CH3','7',16),('CA2','CH4','Beaucoup',12),
('CA3','CH1','Femme',19),('CA3','CH2','Sale',0),('CA3','CH3','7',6),('CA3','CH4','Beaucoup',10)
;

create table test(
    idtest varchar(10) default 'TE'||nextval('test_seq') primary key,
    idrecrutement varchar(10),
    fichier varchar(40),
    FOREIGN KEY(idrecrutement) REFERENCES recrutement(idrecrutement)
);

insert into test(idrecrutement) values
('RE1')
;


CREATE TABLE reponsetestCandidat(
    idreponsetestcandidat varchar(10) default 'REC'||nextval('reponsetestCandidat_seq') PRIMARY KEY,
    idrecrutement varchar(10),
    idcandidat varchar(10),
    fichier varchar(40),
    FOREIGN KEY(idrecrutement) REFERENCES recrutement(idrecrutement),
    FOREIGN KEY(idcandidat) REFERENCES candidat(idcandidat)
);


create table appointment(
    idappointement varchar(10) default 'AP'||nextval('appointment_seq') primary key,
    daty date,
    noty int,
    idcandidat varchar(10),
    idrecrutement varchar(10),
    bureau varchar(10),
    FOREIGN KEY (idcandidat) REFERENCES candidat(idcandidat),
     FOREIGN KEY (idrecrutement) REFERENCES recrutement(idrecrutement)
);
create table administrateur(
    identifiant varchar(60),
    mdp varchar(60)
);
insert into administrateur(identifiant,mdp) values ('admin','admin');


-- genre
create view stat_genre as 
select count(idreponse) nombre,'Femme' as sexe from reponsechamp join champ on reponsechamp.idchamp=champ.idchamp  where reponsechamp.idchamp='CH1' and valiny like '%Femme%'
union
select count(idreponse),'Homme' from reponsechamp join champ on reponsechamp.idchamp=champ.idchamp where reponsechamp.idchamp='CH1' and valiny like '%Homme%';



-- Resultat selection 
create view resultat_selection as  select sum(noty*coefficient)/sum(coefficient) note,idcandidat,idrecrutement from reponsechamp join champ on reponsechamp.idchamp=champ.idchamp group by idcandidat,idrecrutement;


-- genre
create view stat_genre_apres_select as 
select count(idreponse) nombre,'Femme' as sexe from reponsechamp join champ on reponsechamp.idchamp=champ.idchamp  where reponsechamp.idchamp='CH1' and valiny like '%Femme%' and idcandidat in (select idcandidat from resultat_selection where note>=10)
union
select count(idreponse),'Homme' from reponsechamp join champ on reponsechamp.idchamp=champ.idchamp where reponsechamp.idchamp='CH1' and valiny like '%Homme%' and idcandidat in (select idcandidat from resultat_selection where note>=10);



create view v_stats_appointment as 
select recrutement.idrecrutement, nomposte, moyenne from recrutement left join (select idrecrutement,avg(noty) as moyenne from appointment group by idrecrutement) as moy on moy.idrecrutement=recrutement.idrecrutement ;

CREATE VIEW V_test
AS
SELECT 
reponsetestCandidat.*,
candidat.nom,
candidat.prenom,
recrutement.nomposte,
test.fichier as exam
FROM reponsetestCandidat
JOIN candidat ON
candidat.idcandidat=reponsetestCandidat.idcandidat 
JOIN recrutement ON
recrutement.idrecrutement= reponsetestCandidat.idrecrutement
JOIN test ON
test.idrecrutement=recrutement.idrecrutement
;

create view afaka_selection as select *from resultat_selection where note>=10;