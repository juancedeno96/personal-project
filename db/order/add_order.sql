insert into
    order_item (total, customer_id, product_id, quantity)
values
    ($1, $2, $3, $4);
    
select * from order_item where customer_id = $2;


--     create table order_item (
--     order_id serial primary key,
--     total numeric,
--     customer_id int references customer(customer_id),
--     product_id int references product(product_id),
--     quantity int
-- )

