SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;

SET SQL_SAFE_UPDATES = 0;

# 1 - Insira as produções da Pixar na tabela Movies:
INSERT INTO Pixar.Movies (title, director, `year`, length_minutes)
	VALUES	('Monstros SA', 'Peter Docter', 2001, 92),
			('Procurando Nemo', 'John Lasseter', 2003, 107),
			('Os Incríveis', 'Brad Bird', 2004, 116),
            ('WALL-E', 'Pete Docter', 2008, 104);

# Exercício 2: O filme Procurando Nemo foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional.
# Insira as informações à tabela BoxOffice.
INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
	VALUES (9, 6.8, 450000000, 370000000);
    
# Exercício 3: O nome do diretor do filme "Procurando Nemo" está incorreto, ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o comando UPDATE.
UPDATE Pixar.Movies
SET director = 'Andrew Staton'
WHERE id = 9;

# Exercício 4: O título do filme "Ratatouille" está incorreto na tabela Movies. Além disso, o filme foi lançado em 2007 e não em 2010.
# Corrija esses dados utilizando o comando UPDATE.
UPDATE Pixar.Movies
SET title = 'Ratatouille', year = 2007
WHERE title = 'ratatui';

# Exercício 5: Insira as novas classificações abaixo na tabela BoxOffice, lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela Movies:
INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
	VALUES	(8, 8.5, 300000000, 250000000),
			(10, 7.4, 460000000, 510000000),
            (11, 9.9, 290000000, 280000000);
            
# Exercício 6: Exclua da tabela Movies o filme "WALL-E".
DELETE FROM Pixar.BoxOffice
WHERE movie_id = 11;
DELETE FROM Pixar.Movies
WHERE title = 'WALL-E';

# Exercício 7: Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton".
DELETE FROM Pixar.BoxOffice
WHERE movie_id = 2 OR movie_id = 9;
DELETE FROM Pixar.Movies
WHERE director = 'Andrew Staton';