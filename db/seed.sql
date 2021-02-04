create table customer (
    customer_id serial primary key,
    first_name varchar not null,
    last_name varchar not null,
    email varchar not null,
    password varchar not null,
    profile_pic text
);

create table product (
    product_id serial primary key,
    name varchar(50) not null,
    unit_price numeric
    img_url text
);


insert into product (name, unit_price, img_url)
values ()                                          --Table to add products, only I can modify it
select * from product


create table orders (
    order_id serial primary key,
    total numeric,
    customer_id int references customer(customer_id),
    quantity int,
)

insert into orders (total, customer_id, quantity, date_created)
values ($1, $2, $3, $4)

create table order_items (

    order_id int references order(order_id),
    product_id int references product(product_id)
)

create table favorite(
    product_id int references product(product_id)
    customer_id int references customer(customer_id)
)



select name, first_name, quantity, total from customer c join orders o
on e.customer_id = o.customer_id join order_items oi on o.order_id = oi.order_id
join product p on p.product_id = oi.product_id
