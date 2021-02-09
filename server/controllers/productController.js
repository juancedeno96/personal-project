
module.exports = {
    getAllProduct: async (req,res) => {
        const db = req.app.get('db')
        const allProducts = await db.product.get_product()
        return res.status(200).send(allProducts)
    },
    
    addOrder: async (req, res) => {
        const db = req.app.get('db')
        console.log(req.body)
        const {total, customer_id, quantity} = req.body
        const {product_id} = req.params
        let order;
        try{
           order = await db.order.add_order(total, customer_id, product_id, quantity)
        } 
        catch(err){
            console.log(err)
        }
        return res.status(200).send(order)
    }
}