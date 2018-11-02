insert into cart (user_id, product_id, paid)
values ($1, $2, false)
returning * where user_id = $1;