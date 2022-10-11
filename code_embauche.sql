create sequence employe_seq;
create sequence groupe_seq;
create sequence categorie_seq;
create sequence fonction_seq;
create sequence contrat_seq;
create sequence assignercontrat_seq;
CREATE sequence cnaps_seq;
CREATE sequence conge_seq;
create sequence planning_seq;
create sequence sm_seq;

create sequence affil_cnaps_seq; 

create table groupe(
    idgroupe varchar(10) default 'GR'||nextval('groupe_seq') primary key,
    nomgroupe varchar(20) not null
);
insert into groupe(nomgroupe) values
('Groupe 1'),('Groupe 2'),('Groupe 3'),('Groupe 4'),('Groupe 5')
;

create table categorie(
    idcategorie varchar(10) default 'CA'||nextval('categorie_seq') primary key,
    nomcategorie varchar(30) not null,
    idgroupe varchar(10) not null,
    FOREIGN KEY (idgroupe) REFERENCES groupe(idgroupe)
);
insert into categorie(nomcategorie,idgroupe) VALUES 
('M1','GR1'),('M2','GR1'),('1A','GR1'),('1B','GR1'),
('OS1','GR2'),('OS2','GR2'),('OS3','GR2'),
('2A','GR2'),('2B','GR2'),('3A','GR2'),('3B','GR2'),
('A1','GR2'),('A2','GR2'),('A3','GR2'),('B1','GR2'),('B2','GR2'),('B3','GR2'),('B4','GR2'),
('C1','GR2'),('C2','GR2'),('C3','GR2'),('D1','GR2'),('D2','GR2'),('D3','GR2'),
('OP2','GR3'),('OP3','GR3'),('4A','GR3'),('4B','GR3'),('5A','GR3'),('5B','GR2'),
('A4','GR3'),('B5','GR3'),('C4','GR3'),('D4','GR3')
;

create table fonction(
    idfonction varchar(10) default 'FO'||nextval('fonction_seq') primary key,
    nomfonction varchar(40) not null,
    idcategorie varchar(10) not null,
    FOREIGN KEY (idcategorie) REFERENCES categorie(idcategorie) 
);
insert into fonction(nomfonction,idcategorie) values
('Fonction1','CA1'),('Fonction2','CA2'),('Fonction3','CA34'),('Fonction','CA4'),
('Fonction6','CA34')
;


create table employe(
    idemploye varchar(10) default 'EM'||nextval('employe_seq') primary key,
    nom varchar(60) not null,
    prenom varchar(60) NOT null,
    genre varchar(20) not null,
    adresse varchar(20) not null,
    situation_juridique varchar(30) not null,
    debany varchar(10),
    matr_cnaps varchar(10),
    dateEmbauche date default current_timestamp,
    idfonction varchar(10) not null,
    iddept varchar(10) not null,
    salairebase float not null,
    datenaissance date,
    FOREIGN KEY (idfonction) REFERENCES fonction(idfonction),
    FOREIGN KEY (iddept) REFERENCES departement(iddept)
);

-- Deba ny dept
insert into employe(nom,prenom,adresse,genre,situation_juridique,idfonction,iddept,salairebase,datenaissance) values
('Rakoto','Jean','Andoharanofotsy','Homme','Propre','FO5','DE5',30000000,'29/03/2002'),
('Rabe','Jeanne','Analakely','Femme','Propre','FO5','DE4',30000000,'29/03/2001'),
('Rajao','Johnny','Alarobia','Homme','Propre','FO5','DE3',30000000,'01/03/2002'),
('Ravelo','Oli','Ambanidia','Femme','Propre','FO5','DE2',30000000,'29/03/2001')
;

-- Mpiasa ny dept
insert into employe(nom,prenom,adresse,genre,situation_juridique,debany,idfonction,iddept,salairebase,datenaissance) values
('Rabe','Rova','Ankadifotsy','Homme','Propre','EM1','FO4','DE1',10000000,'29/03/2002'),
('Rajao','Raly','Ambohimanarina','Femme','Propre','EM1','FO4','DE1',10000000,'29/03/2002'),
('Randria','Kolo','Ankadimbahoaka','Femme','Propre','EM6','FO3','DE1',5000000,'29/03/2002'),
('Randria','Johan','Antanimena','Homme','Propre','EM6','FO3','DE1',5000000,'29/03/2002'),
('Andria','Holy','Andraharo','Femme','Propre','EM1','FO2','DE1',800000,'29/03/2002'),
('Ravalo','Faly','Andraharo','Homme','Propre','EM1','FO2','DE1',8000000,'29/03/2002'),

('Andria','Faneva','Ankadifotsy','Homme','Propre','EM2','FO4','DE2',10000000,'29/03/2002'),
('Rasamy','Andy','Andraharo','Homme','Propre','EM2','FO4','DE2',10000000,'29/03/2002'),
('Andrianarison','Adrian','Betafo','Homme','Propre','EM12','FO3','DE2',8000000,'29/03/2002'),
('Rajaonarison','Raoul','Ambodivonkely','Homme','Propre','EM12','FO3','DE2',7000000,'29/03/2002'),
('Rabejahavo','Kanto','Anosivavaka','Femme','Propre','EM12','FO3','DE2',7000000,'29/03/2002'),
('Rakoto','Auriel','Alasora','Femme','Propre','EM12','FO3','DE2',6000000,'29/03/2002')
;




create table contrat(
    idcontrat varchar(10) default 'CT'||nextval('contrat_seq') primary key,
    typecontrat varchar(30) not null
);
insert into contrat(typecontrat)values('CDD'),('CDI'),('Contrat d essai');
create table assignercontrat(
    idassigner varchar(10) default 'AS'||nextval('assignercontrat_seq') primary key,
    idcontrat varchar(10) not null,
    idemploye varchar(10) not null,
    datedebut date not null,
    datefin date,
    detail varchar(100),
    FOREIGN KEY (idcontrat) REFERENCES contrat(idcontrat),
    FOREIGN KEY (idemploye) REFERENCES employe(idemploye)
);

create table conge(
    idconge varchar(10) default 'CG'||nextval('conge_seq') primary key,
    idemploye varchar(10) not null,
    datedebut date not null,
    datefin date not null,
    motif varchar(20),
    accepte boolean default null,
    FOREIGN KEY (idemploye) REFERENCES employe(idemploye)
);


create table cnaps(
    idcnaps varchar(10) default 'CN' ||nextval('cnaps_seq') primary key,
    idemploye varchar(10) not null,
    motif varchar(90),
    FOREIGN KEY (idemploye) REFERENCES employe(idemploye)
);

create table planning(
    idplanning varchar(10) default 'PL'||nextval('planning_seq') primary key,
    idemploye varchar(10) not null,
    datedebut date not null,
    datefin date not null,
    FOREIGN KEY (idemploye) REFERENCES employe(idemploye)
);

create table salaires (
    idsalairemin varchar(10) default 'SA'||nextval('sm_seq') primary key,
    sme float not null,
    sma float not null,
    idcategorie varchar(10),
    datemodif date not null default current_timestamp,
    FOREIGN KEY (idcategorie) REFERENCES categorie(idcategorie)
);
insert into salaires(idcategorie,sme,sma) values
('CA1',184653,189476),('CA3',184653,189476),
('CA2',185341,194987),('CA4',185341,194987),
('CA5',186720,195677),('CA8',186720,195677),
('CA6',192230,204634),('CA9',192230,204634),
('CA7',203944,217036),('CA10',203944,217036)
;


create view v_repart_sex as
select (count(idemploye)::float/(select count(idemploye) from employe)::float) as isa, genre from employe group by genre;

create view v_emp_cat as 
select count( idemploye), nomcategorie from employe join fonction on fonction.idfonction=employe.idfonction join categorie on categorie.idcategorie=fonction.idcategorie group by nomcategorie;

create view v_emp_dept as 
select count(idemploye) as isa, nomdept from employe join departement on departement.iddept=employe.iddept group by nomdept; 



