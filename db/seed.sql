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


create table order(
    order_id serial primary key,
    total numeric,
    customer_id int references customer(customer_id)
    date_created timestamp
);

create table order_items (
    order_id int references order(order_id),
    product_id int references product(product_id)
)

create table favorite(
    product_id int references product(product_id)
    customer_id int references customer(customer_id)
)

