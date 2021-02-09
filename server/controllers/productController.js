
module.exports = {
    getAllProduct: async (req,res) => {
        const db = req.app.get('db')
        const allProducts = await db.product.get_product()
        return res.status(200).send(allProducts)
    },
    
    addOrder: async (req, res) => {
        const db = req.app.get('db')
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
    },

    getUserItems: async (req,res)=>{
        const {customer_id} = req.params
        const db= req.app.get('db')
        let items = await db.order.get_items_by_customer_id(customer_id)
        return res.status(200).send(items)
    },

    deleteItem:  (req,res) => {
        const {product_id} = req.params
        const db = req.app.get('db')
        const updatedCart = db.order.delete_items(product_id)
        return res.status(200).send(updatedCart)
    },

    updateQuantity: (req, res) => {
        const {product_id} = req.params
        const {quantity} = req.body;
        const db = req.app.get('db')
        db.order.updatequantity(quantity, product_id)
        .then(_=>res.sendStatus(200))
    }
}

// deletePost: (req, res) => {
//     req.app.get('db').post.delete_post(req.params.id)
//       .then(_ => res.sendStatus(200))
//   }