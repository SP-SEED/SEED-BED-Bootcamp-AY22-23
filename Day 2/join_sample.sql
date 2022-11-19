use bedbootcamp;

-- SELECT c.first_name, c.last_name, c.email, a.PCode FROM customer c, address a WHERE c.email = a.email; 

SELECT c.first_name, c.last_name, c.email, a.PCode FROM customer c JOIN address a ON c.email = a.email;