SELECT first_name, name, img_url, total, c.customer_id, p.product_id, quantity from

customer c join order_item o on c.customer_id = o.customer_id join product p on o.product_id = p.product_id

where c.customer_id = $1;



