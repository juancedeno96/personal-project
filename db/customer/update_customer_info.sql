update customer_id

first_name = $2,
last_name = $3,
email= $4

where customer_id = $1

returning customer_id, first_name, last_name, email, profile_pic;