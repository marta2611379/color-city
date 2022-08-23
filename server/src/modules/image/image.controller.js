const ImageModels = require('./image.model');
import fsPromises from 'fs/promises'
import path from 'path'
const fs = require("fs");

const uploadImage = async (req, res,) => {
    var img = fs.readFileSync(req.file.path);
    var encode_img = img.toString('base64');
    var final_img = {
        contentType: req.file.mimetype,
        image: new Buffer.from(encode_img, 'base64')
    };
    let image = await new ImageModels(final_img);
    image.save()
        .then(img => {
            emptyFolder('./uploads');
            res.status(200).json({ 'message': 'Succsess!', obj: img });
        })
        .catch(err => {
            res.status(400).send({ 'message': 'Error!', error: err });
        });
}

const getImage = async (req, res) => {
    await ImageModels.find()
        .then(brand => { res.status(200).json(brand); })
        .catch(err => res.status(500).json(err));
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


module.exports = { uploadImage, getImage };


