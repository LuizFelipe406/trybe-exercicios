# EXERCICIO 1
SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE 'GR%';

# EXERCICIO 2
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca = 2
ORDER BY fornecedor ASC;

# EXERCICIO 3
SELECT peca, Preco, fornecedor FROM PecasFornecedores.Fornecimentos
WHERE fornecedor LIKE '%n%';

# EXERCICIO 4
SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC;

# EXERCICIO 5
SELECT COUNT(*) FROM PecasFornecedores.Fornecedores
WHERE code LIKE '%f%';

# EXERCICIO 6
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE Preco > 15 AND Preco < 40
ORDER BY Preco ASC;

# EXERCICIO 7 
SELECT COUNT(*) FROM PecasFornecedores.Vendas
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';