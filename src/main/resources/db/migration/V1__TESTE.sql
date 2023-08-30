CREATE TABLE usuario (
	id serial NOT NULL,
	nome text NOT NULL,
	idade integer NOT NULL,
);

insert into usuario(nome, idade) values ( 'Nataniel', 29);