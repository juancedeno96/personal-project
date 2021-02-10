module.exports={
    updateInfo: (req, res) => {
        const {first_name, last_name, email} = req.body
        const {customer_id} = req.params;
        db = req.app.get('db');

        const [updatedUser] = db.customer.update_customer_info(customer_id, first_name, last_name, email)

        return res.status(200).send(updatedUser)
    }

}