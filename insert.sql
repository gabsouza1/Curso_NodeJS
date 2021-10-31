insert into usuarios(nome, email, idade) values (
    "Gabriel Souza",
    "gbriel@teste.com",
    26
);

select * from usuarios;

insert into usuarios(nome, email, idade) values (
    "Felipe Silva",
    "felipe@teste.com",
    32
);

insert into usuarios(nome, email, idade) values (
    "Joana Pereira",
    "joana@teste.com",
    19
);

insert into usuarios(nome, email, idade) values (
    "Robson Ribeiro",
    "robson@teste.com",
    24
);


select * from usuarios where nome = "Ana Santos";


select * from usuarios where nome = "Gabriel Souza";

select * from usuarios where idade >= 18

delete from usuarios where nome = 'Felipe Silva';



update usuarios set nome = "Rodrigo Torquato" where nome = "Ana Santos"