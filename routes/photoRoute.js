const router = require('express').Router();
const {getPhoto, getPhotoID, updatePhoto, addPhoto, delPhoto} = require('../controlers/PhotoCtrl');


//get Photos
router.get('/photo', getPhoto)

//add Photo 
router.post('/photo', addPhoto)

//get Photo by id
router.get('/photo/:id', getPhotoID)

//update Photo by id
router.put('/photo/update/:id', updatePhoto)

//delete Photo by id
router.delete('/photo/:id', delPhoto)


module.exports = router;