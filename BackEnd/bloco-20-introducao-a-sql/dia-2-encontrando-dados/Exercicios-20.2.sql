# exercicio - 1
SELECT "this is SQL Exercise, Practice and Solution";

#exercicio - 2
SELECT 23, 24 , 6;

# EXERCICIO - 3
SELECT 10 + 15;

# EXERCICIO - 4
SELECT 14 * 2;

# EXERCICIO - 5
SELECT * FROM Scientists.Scientists;

# EXERCICIO - 6
SELECT name AS "nome_do_projeto", hours AS "tempo_de_trabalho" FROM Scientists.Projects;

# EXERCICIO - 7
SELECT name FROM Scientists.Scientists ORDER BY name ASC;

# EXERCICIO - 8
SELECT name FROM Scientists.Scientists ORDER BY name DESC;

# EXERCICIO - 9
SELECT CONCAT("O projeto ", name, " precisou de ", hours, " horas para ser concluido") FROM Scientists.Projects;

# EXERCICIO - 10
SELECT name, hours FROM Scientists.Projects ORDER BY hours DESC LIMIT 3;

# EXERCICIO - 11
SELECT DISTINCT project FROM Scientists.AssignedTo;

# EXERCICIO - 12
SELECT name FROM Scientists.Projects ORDER BY hours DESC LIMIT 1;

# EXERCICIO - 13
SELECT name FROM Scientists.Projects ORDER BY hours ASC LIMIT 1 OFFSET 1;

# EXERCICIO - 14
SELECT * FROM Scientists.Projects ORDER BY hours LIMIT 5;

# EXERCICIO - 15
SELECT CONCAT("Existem ", COUNT(name), " cientistas na tabela Scientists") FROM Scientists.Scientists;
