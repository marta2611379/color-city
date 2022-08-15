const ProductsModels = require('./products.model');

const getUsers = (req, res) => {
    ProductsModels.find((err, product) => {
        if (err) {
            console.log(err);
            res.status(500).json(err)
        }
        else {
            res.status(200).json(product)
        }
    })
    // res.status(200).json(ProductsModels.find())
    // try {
    //     const allFieldsServices = await ProductsModels.find();
    //     res.status(200).json(allFieldsServices)
    // } catch (err) {
    //     res.status(500).json(err)
    // }
}

module.exports = { getUsers };
// class ProductsController {
//     getUsers(req, res) {
//         ProductsModels.find((err, issues) => {
//             if (err)
//                 console.log(err);
//             else
//                 res.json(issues);
//         });
//         // try {
//         //     const allFieldsServices = ProductsModels.find();
//         //     res.status(200).json(allFieldsServices)
//         // } catch (err) {
//         //     res.status(500).json('gjrsddhhdjhsjdhsjdh')
//         // }
//         // })
//     }
// }

// module.exports = new ProductsController()


// exports.fields_update_services = async(req, res) =>{
//     const { fieldsBody } = req.body;
//     try{
//         const fields = await FieldsCreateServicesModels.findOne({value: req.params.id});
//         if(fields){
//             await FieldsCreateServicesModels.findByIdAndUpdate(fields._id, { $set: { 'fields': JSON.parse(fieldsBody) } });
//         }else await FieldsCreateServicesModels.create({fields: JSON.parse(fieldsBody), value:req.params.id });
//         res.status(201).json({ msg: "success",  })
//     }catch(err){
//         res.status(500).json(err)
//     }
// }
// exports.all_fields = async (req, res) => {
//     try {
//         const allFieldsServices = await FieldsCreateServicesModels.find();
//         res.status(200).json(allFieldsServices)
//     } catch (err) {
//         res.status(500).json(err)
//     }
// }