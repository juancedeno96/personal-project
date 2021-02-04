const purchases = []


module.exports = {
    getAllProduct: async (req,res) => {
        const db = req.app.get('db')
        const allProducts = await db.product.get_product()
        return res.status(200).send(allProducts)
    },

    addProduct: async (req, res) => {
        const {total, customer_id, quantity} = req.body
        const db = req.app.get('db')
        const order = await db.order.add_product(total, customer_id, quantity)
        return res.status(201).send(order)
    }
}