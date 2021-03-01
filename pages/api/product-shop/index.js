import dbConnect from "../../../utils/dbConnect";
import Product from "../../../models/Product";
dbConnect();

export default async (req, res) => {
    const { method } = req;
    switch (method) {
        case 'GET':
            try {
                const products = await Product.find({});
                // res.setHeader('Cache-Control', 's-maxage=60') // 1 day
                res.setHeader('Cache-Control', 's-maxage=60') // 1 minute

                res.status(200).json({
                    success: true,
                    data: products
                })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case 'POST':
            try {
                const storeProduct = await Product.create(req.body)
                res.status(201).json({ message: true, data: storeProduct })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
    // res.status(200).json({
    //     product: "baju"
    // })
}