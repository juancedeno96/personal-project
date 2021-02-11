select sum(total) as cost, sum(quantity) as quantity from order_item where customer_id=$1
