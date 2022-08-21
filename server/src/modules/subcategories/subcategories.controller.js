const SubcategoriesModel = require('./subcategories.model');
const searchParams = require('../../helpers/searchParams');
// const { async } = require('rxjs');

const getSubcategories = async (req, res) => {
    await SubcategoriesModel.find()
        .populate('category_id')
        .then(subcategories => res.status(200).json(subcategories))
        .catch(err => res.status(500).json(err));
}

const searchSubcategories = async (req, res) => {
    await SubcategoriesModel.find(await searchParams.searchData(req.params.searchParams))
        .populate('category_id')
        .then(subcategories => res.status(200).json(subcategories))
        .catch(err => res.status(500).json(err));
}


const createSubcategory = async (req, res) => {
    let subcategory = await new SubcategoriesModel(req.body);
    subcategory.save()
        .then(subcategory => {
            res.status(200).json({ 'message': 'Succsess!', obj: subcategory });
        })
        .catch(err => {
            res.status(400).send({ 'message': 'Error!', error: err });
        });
}

const updateSubcategory = async (req, res) => {
    await SubcategoriesModel.findByIdAndUpdate(req.params.id, req.body)
        .then(subcategory => {
            res.status(200).json({ 'message': 'Succsess!', obj: subcategory });
        })
        .catch(err => {
            handleError(err)
            res.status(400).send({ 'message': 'Error!', error: err });
        });
}

const deleteSubcategory = async (req, res) => {
    await SubcategoriesModel.findByIdAndDelete(req.params.id)
        .then(subcategory => {
            res.status(200).json({ 'message': 'Succsess!', obj: subcategory });
        })
        .catch(err => {
            res.status(400).send({ 'message': 'Error!', error: err });
        });


}

module.exports = { getSubcategories, updateSubcategory, deleteSubcategory, createSubcategory, searchSubcategories };


