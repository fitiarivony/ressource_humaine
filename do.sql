CREATE VIEW liste_emp
AS
SELECT 
employe.*,
nomdept,
nomfonction

FROM employe
JOIN departement
on 
employe.iddept = departement.iddept
join fonction on
employe.idfonction = fonction.idfonction;