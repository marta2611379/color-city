const BrandsModels = require('./brands.model');

const getBrands = async (req, res) => {
    await BrandsModels.find()
        .then(brand => res.status(200).json(brand))
        .catch(err => res.status(500).json(err));
}

const createBrand = async (req, res) => {
    let brand = await new BrandsModels(req.body);
    brand.save()
        .then(brand => {
            res.status(200).json({ 'message': 'Succsess!', obj: brand });
        })
        .catch(err => {
            res.status(400).send({ 'message': 'Error!', error: err });
        });
}

const updateBrand = async (req, res) => {
    await BrandsModels.findByIdAndUpdate(req.params.id, req.body)
        .then(brand => {
            res.status(200).json({ 'message': 'Succsess!', obj: brand });
        })
        .catch(err => {
            handleError(err)
            res.status(400).send({ 'message': 'Error!', error: err });
        });
}

const deleteBrand = async (req, res) => {
    await BrandsModels.findByIdAndDelete(req.params.id)
        .then(brand => {
            res.status(200).json({ 'message': 'Succsess!', obj: brand });
        })
        .catch(err => {
            res.status(400).send({ 'message': 'Error!', error: err });
        });


}

module.exports = { getBrands, updateBrand, deleteBrand, createBrand };


