#1
SELECT MAX(salary) FROM hr.employees;

#2
SELECT MAX(salary) - MIN(salary) from hr.employees;

#3
SELECT job_id, AVG(salary) AS `Média Salarial` FROM hr.employees GROUP BY job_id ORDER BY `Média Salarial` DESC;

#4
SELECT SUM(salary) AS `Total dos Salarios` FROM hr.employees;

#5
SELECT ROUND(MAX(salary), 2), ROUND(MIN(salary),2), ROUND(SUM(salary),2), ROUND(AVG(salary),2) FROM hr.employees;

#6
SELECT COUNT(*) FROM hr.employees GROUP BY job_id HAVING job_id = 'it_prog';

#7
SELECT job_id, SUM(salary) FROM hr.employees GROUP BY job_id;

#8
SELECT job_id, SUM(salary) FROM hr.employees GROUP BY job_id HAVING job_id = 'it_prog';

#9
SELECT job_id, AVG(salary) AS `Média Salarial` FROM hr.employees GROUP BY job_id HAVING job_id <> 'it_prog' ORDER BY `Média Salarial` DESC;

#10
SELECT AVG(salary), COUNT(*) FROM hr.employees GROUP BY department_id HAVING COUNT(*) > 10;

#11
SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, 515, 777)
WHERE LEFT(phone_number, 3) = 515;

#12
SELECT first_name FROM hr.employees WHERE CHAR_LENGTH(first_name) >= 8;

#13
SELECT employee_id, first_name, YEAR(hire_date) FROM hr.employees;

#14
SELECT employee_id, first_name, DAY(hire_date) FROM hr.employees;

#15
SELECT employee_id, first_name, MONTH(hire_date) FROM hr.employees;

#16
SELECT UCASE(first_name) FROM hr.employees;

#17
SELECT last_name, hire_date FROM hr.employees WHERE MONTH(hire_date) = 07 AND YEAR(hire_date) = 1987;

#18
SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) FROM hr.employees;