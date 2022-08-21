const CategoriesModels = require('./categories.model');
const SubcategoriesModels = require('../subcategories/subcategories.model');

const getCategories = async (req, res) => {
    await CategoriesModels.find()
        .then(categories => res.status(200).json(categories))
        .catch(err => res.status(500).json(err));
}

const createCategory = async (req, res) => {
    let category = await new CategoriesModels(req.body);
    category.save()
        .then(category => {
            res.status(200).json({ 'message': 'Succsess!', obj: category });
        })
        .catch(err => {
            res.status(400).send({ 'message': 'Error!', error: err });
        });
}

const updateCategory = async (req, res) => {
    await CategoriesModels.findByIdAndUpdate(req.params.id, req.body)
        .then(brand => {
            res.status(200).json({ 'message': 'Succsess!', obj: brand });
        })
        .catch(err => {
            handleError(err)
            res.status(400).send({ 'message': 'Error!', error: err });
        });
}


const deleteCategory = async (req, res) => {
    await SubcategoriesModels.findOne({ category_id: req.params.id })
        .then(subcategory => {
            (subcategory) ?
                res.status(400).send({ 'message': 'There are subcategories that refer to this category!', error: err })
                : (
                    CategoriesModels.findByIdAndDelete(req.params.id)
                        .then(brand => {
                            res.status(200).json({ 'message': 'Succsess!', obj: brand });
                        })
                        .catch(err => {
                            res.status(400).send({ 'message': 'Error!', error: err });
                        })
                );
        })
        .catch(err => {
            res.status(400).send({ 'message': 'Error!', error: err });
        });
}

module.exports = { getCategories, updateCategory, deleteCategory, createCategory };


