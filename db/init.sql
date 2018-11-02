create table users (
    user_id serial primary key,
    auth_id text, 
    user_name varchar(30),
    user_email varchar, 
    user_photo text,
    street1 varchar(100),
    street2 varchar(100),
    city varchar(40),
    state varchar(40),
    zip integer,
    is_admin boolean not null default false
);

create table products (
    product_id serial primary key,
    product_name varchar,
    product_img text,
    product_price integer,
    product_color varchar
);

create table cart (
    cart_id serial primary key,
    user_id int references users(user_id),
    product_id int references products(product_id),
    paid boolean not null default false,
    quantity int 
)