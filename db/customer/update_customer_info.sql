update
    customer
set
    first_name = $2,
    last_name = $3,
    email = $4
where
    customer_id = $1;
