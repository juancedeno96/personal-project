
module.exports = {
    getAllProduct: async (req,res) => {
        const db = req.app.get('db')
        const allProducts = await db.product.get_product()
        return res.status(200).send(allProducts)
    },

    addOrder: async (req, res) => {
        const db = req.app.get('db')
        const {total, customer_id, quantity} = req.body
        const order = await db.order.add_order(total, customer_id, quantity)
        return res.status(200).send(order)
    }
}