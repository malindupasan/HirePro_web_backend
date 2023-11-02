const CustomerModel = require('../model/customer.model')
const ServiceProviderModel = require('../model/serviceprovider.model')
const ServiceModel = require('../model/service.model')

exports.getCategoryRequests = async (req, res, next) => {
    try {
       const result1= await ServiceProviderModel.getNoCategoryRequests();
        res.status(200).json(result1);
    } catch (error) {
        console.error(error);
    }
}

exports.setCategory = async (req, res, next) => {
    try {
        const {providerid, category, categoryid} = req.body;
        const result1= await ServiceProviderModel.addCategory(providerid, category, categoryid);
        res.status(200).json(result1);
    } catch (error) {
        console.error(error);
    }
}

exports.rejectCategory = async (req, res, next) => {
    try {
        const {providerid, category, categoryid} = req.body;
        const result1= await ServiceProviderModel.rejectCategory(providerid, category, categoryid);
        res.status(200).json(result1);
    } catch (error) {
        console.error(error);
    }
}

exports.getSp = async (req, res, next) => {
    try {
        const result1= await ServiceProviderModel.getSp();
        res.status(200).json(result1);
    } catch (error) {
        console.error(error);
    }
}