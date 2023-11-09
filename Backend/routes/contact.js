const express = require("express")

const contactController = require("../controller/contact")
const router = express.Router()

router.route('/create').post(contactController.createContact)
router.route('/list').get(contactController.contact_list)
router.route('/:id')
    .get(contactController.getContact)
    .patch(contactController.updateContact)
    .delete(contactController.deleteContact)
    
module.exports = router