module.exports = {
    getShirt: async (req, res) => {
        try {
            let db = req.app.get('db')
            let product = await db.typeShirt()
            res.status(200).send(product)
        } catch (error) {
            console.log('had a problem getting Products', error)
            res.status(500).send('error getting product', error)
        }
    },
    getJacket: async (req, res) => {
        try {
            let db = req.app.get('db')
            let product = await db.typeJacket()
            res.status(200).send(product)
        } catch (error) {
            console.log('had a problem getting Products', error)
            res.status(500).send('error getting product', error)
        }
    },
    getAcc: async (req, res) => {
        try {
            let db = req.app.get('db')
            let product = await db.typeAcc()
            res.status(200).send(product)
        } catch (error) {
            console.log('had a problem getting Products', error)
            res.status(500).send('error getting product', error)
        }
    },

    // getProduct: async (req, res) => {
    //     try {
    //         let db = req.app.get('db')
    //         let {type} = req.body
    //         let product = await db.findByType([type])
    //         res.status(200).send(product)
    //     } catch (error) {
    //         console.log('had a problem getting products', error)
    //         res.status(500).send('error getting product', error)
    //     }
    // }

    // updateProductPrice for admin
    // updateProductColor for admin
}