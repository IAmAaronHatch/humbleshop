module.exports = {
    getProducts = (req, res) => {
        try {
            let db = req.app.get('db')
            let product = await db.findItemByType()
            res.status(200).send(product)
        } catch (error) {
            console.log('had a problem getting Products', error)
            res.status(500).send('error getting product', error)
        }
    }

    // updateProductPrice for admin
    // updateProductColor for admin
}