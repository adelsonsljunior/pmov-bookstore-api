-- Criação da tabela de usuários
CREATE TABLE users (
	id SERIAL NOT NULL PRIMARY KEY,
	user_name TEXT NOT NULL,
	email TEXT NOT NULL UNIQUE,
	user_password TEXT NOT NULL,
	url_photo TEXT
);

-- Inserção de dados na tabela de usuários
INSERT INTO users (user_name, email, user_password) VALUES ('teste', 'teste@gmail.com', '12345678');
INSERT INTO users (user_name, email, user_password) VALUES ('adelson', 'adelson@gmail.com', '12345678');
INSERT INTO users (user_name, email, user_password) VALUES ('maria', 'maria@gmail.com', '12345678');