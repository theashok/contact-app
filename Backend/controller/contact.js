var Contact = require('../model/contact')
const ApiFeatures = require('./../Utils/ApiFeatures');


exports.createContact = async (req, res) => {
    try{
        const contact = await Contact.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                contact
            }
        })
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}
exports.contact_list = async function(req, res){
    try{
        const features = new ApiFeatures(Contact.find(), req.query)
                                .filter()
                                .sort()
                                .limitFields()
                                .paginate();
        let contactList = await features.query;
       
        res.status(200).json({
            status: 'success',
            
            data: {
                contactList
            }
        });
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
}

exports.getContact = async (req, res) => {
    try{
       
        const contact = await Contact.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                contact
            }
        });
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
}

exports.updateContact = async (req, res) => {
    try{
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        res.status(200).json({
            status: "success",
            data: {
                movie: updatedContact
            }
        });
    }catch(err){
        res.status(404).json({
            status:"fail",
            message: err.message
        });
    }
}

exports.deleteContact = async (req, res) => {
    try{
        await Contact.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null
        });
    }catch(err){
        res.status(404).json({
            status:"fail",
            message: err.message
        });
    }
}

