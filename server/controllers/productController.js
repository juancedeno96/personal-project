module.exports = {
    getAllProduct: async (req,res) => {
        const db = req.app.get('db')
        const allProducts = await db.product.get_product()
        return res.status(200).send(allProducts)
    }
}