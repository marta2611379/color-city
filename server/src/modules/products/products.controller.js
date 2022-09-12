const searchParams = require('../../helpers/searchParams');
const ProductsModels = require('./products.model');
// import fsPromises from 'fs/promises'
// import path from 'path'
var fsPromises = require('fs/promises');
var path = require('path');
const fs = require("fs");

const getProducts = async (req, res) => {
    await ProductsModels.find()
        .populate({
            path: 'category_id'
        }).populate({
            path: 'subcategory_id'
        }).populate({
            path: 'manufacturer_id',
        })
        .then(product => res.status(200).json(product))
        .catch(err => res.status(500).json(err));
}

const searchProducts = async (req, res) => {
    await ProductsModels.find(await searchParams.searchData(req.params.searchParams))
        .populate({
            path: 'category_id'
        }).populate({
            path: 'subcategory_id'
        }).populate({
            path: 'manufacturer_id',
        })
        .then(subcategories => res.status(200).json(subcategories))
        .catch(err => res.status(500).json(err));
}

const createProducts = async (req, res) => {
    let data = JSON.parse(req.body.body)
    let tempArr = []
    req.files.map(file => {
        var final_img = {
            contentType: file.mimetype,
            image: new Buffer.from(
                fs.readFileSync(file.path).toString('base64'),
                'base64'
            )
        };
        tempArr.push(new Object({ img: file.originalname, final: final_img }))
    })
    data.goods.map(v => {
        const temp = tempArr.filter(image => image.img == v.img)
        if (temp.length)
            v.img = (temp[0].final)

    })

    let brand = await new ProductsModels(data);
    brand.save()
        .then(product => {
            emptyFolder('./uploads');
            res.status(200).json({ 'message': 'Succsess!', obj: product });
        })
        .catch(err => {
            res.status(400).send({ 'message': 'Error!', error: err });
        });
}

const updateProducts = async (req, res) => {
    await ProductsModels.findByIdAndUpdate(req.params.id, req.body)
        .then(product => {
            res.status(200).json({ 'message': 'Succsess!', obj: product });
        })
        .catch(err => {
            handleError(err)
            res.status(400).send({ 'message': 'Error!', error: err });
        });
}

const deleteProducts = async (req, res) => {
    await ProductsModels.findByIdAndDelete(req.params.id)
        .then(product => {
            res.status(200).json({ 'message': 'Succsess!', obj: product });
        })
        .catch(err => {
            res.status(400).send({ 'message': 'Error!', error: err });
        });


}

const emptyFolder = async (folderPath) => {
    try {
        const files = await fsPromises.readdir(folderPath);
        for (const file of files) {
            await fsPromises.unlink(path.resolve(folderPath, file));
            console.log(`${folderPath}/${file} has been removed successfully`);
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = { getProducts, updateProducts, deleteProducts, createProducts, searchProducts };

