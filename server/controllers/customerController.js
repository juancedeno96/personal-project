module.exports={
    updateInfo:  (req, res) => {
        console.log(req.body)
        console.log(req.params)
        const {firstName, lastName, emailInput} = req.body
        const {customer_id} = req.params;
        const db = req.app.get('db');
        const updatedUser =  db.customer.update_customer_info(customer_id, firstName, lastName, emailInput)
        return res.status(200).send(updatedUser)
    }

}