create table users (
    id serial primary key,
    auth_id text, 
    name varchar(30),
    email varchar, 
    picture text
);