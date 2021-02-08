insert into
    order_item (total, customer_id,  quantity)
values
    ($1, $2, $3)


--     create table order_item (
--     order_id serial primary key,
--     total numeric,
--     customer_id int references customer(customer_id),
--     product_id int references product(product_id),
--     quantity int
-- )

