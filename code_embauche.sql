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

create table employe(
    idemploye varchar(10) default 'EM'||nextval('employe_seq') primary key,
    nom varchar(60) not null,
    prenom varchar(60) NOT null,
    genre varchar(20) not null,
    adresse varchar(20) not null,
    situation_juridique varchar(30) not null,
    debany varchar(10) not null,
    matr_cnaps varchar(10) not null,
    dateEmbauche date default current_timestamp,
    idfonction varchar(10) not null,
    iddept varchar(10) not null,
    salairebase float not null,
    FOREIGN KEY (idfonction) REFERENCES fonction(idfonction),
    FOREIGN KEY (iddept) REFERENCES departement(iddept)
);

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






