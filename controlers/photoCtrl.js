const photoSchema = require('../models/photoModel');


exports.getPhoto = async (req, res) => {
    try {
        const photo = await photoSchema.find(req.body);
        res.json(photo);
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }
}

exports.addPhoto = async (req, res) => {
    const { title, product_id, description, images } = req.body;

    try {
        const photo = new photoSchema({
            product_id, 
            images
        })
        await photo.save();
        res.json({msg:"product added"});
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }
}

exports.getPhotoID = async (req, res) => {
    try {
        const photo = await photoSchema.findById(req.params.id)
        res.json(photo)
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }

}

exports.updatePhoto = async (req, res) => {
    const { title, product_id, description, images } = req.body;

    try {
        const photo = await photoSchema.findByIdAndUpdate(req.params.id, {
            product_id, 
            images
        });

        let results = photo.save()
        await results
        res.json({ msg: 'Items Updated' })
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }
}

exports.delPhoto = async (req, res) => {
    try {
        const photo = await photoSchema.findByIdAndDelete(req.params.id);

        photo;
    
        res.json({msg:"Item deleted"})
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }
}