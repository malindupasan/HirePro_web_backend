const CustomerModel = require('../model/customer.model')
const ServiceProviderModel = require('../model/serviceprovider.model')
const ServiceModel = require('../model/service.model')
const CSRModel = require('../model/csr.model')



exports.getServiceProviderCount=async (req, res, next) => {

    try {
        // const authHeader = req.headers.authorization;
        // const {serviceproviderid}=req.body;

        // const customerid = await CustomerServices.getIdFromToken(authHeader);
        // if(!customerid){
        //     res.send(404).json({message:"No access"});
        // }
       const result1= await ServiceProviderModel.getNoofServiceProviders();
       

     
        console.log(result1);
        res.status(200).json(result1);

     
    } catch (error) {
        console.error(error);
    }

    
}

exports.getCustomerCount=async (req, res, next) => {

    try {
        // const authHeader = req.headers.authorization;
        // const {serviceproviderid}=req.body;

        // const customerid = await CustomerServices.getIdFromToken(authHeader);
        // if(!customerid){
        //     res.send(404).json({message:"No access"});
        // }
       const result1= await CustomerModel.countCustomers();
       

     
        console.log(result1);
        res.status(200).json(result1);

     
    } catch (error) {
        console.error(error);
    }


}

exports.getRevenue=async (req, res, next) => {

    try {
        // const authHeader = req.headers.authorization;
        // const {serviceproviderid}=req.body;

        // const customerid = await CustomerServices.getIdFromToken(authHeader);
        // if(!customerid){
        //     res.send(404).json({message:"No access"});
        // }
       const result1= await ServiceModel.getrevenue();
       

     
        console.log(result1);
        res.status(200).json(result1);

     
    } catch (error) {
        console.error(error);
    }


}
exports.getCompletedTasksGrouped=async (req, res, next) => {

    try {
        // const authHeader = req.headers.authorization;
        // const {serviceproviderid}=req.body;

        // const customerid = await CustomerServices.getIdFromToken(authHeader);
        // if(!customerid){
        //     res.send(404).json({message:"No access"});
        // }
       const result1= await ServiceModel.getCompletedGrouped();
       
       const transformedResults = result1.reduce((accumulator, current) => {
        accumulator[current.category] = parseInt(current.completed_count, 10);
        return accumulator;
      }, {});
     
        console.log(transformedResults);
        res.status(200).json(transformedResults);

     
    } catch (error) {
        console.error(error);
    }


}
exports.tasksByMonth=async (req, res, next) => {

    try {
        // const authHeader = req.headers.authorization;
        // const {serviceproviderid}=req.body;

        // const customerid = await CustomerServices.getIdFromToken(authHeader);
        // if(!customerid){
        //     res.send(404).json({message:"No access"});
        // }
       const result1= await ServiceModel.getTasksByMonth();
       
       
     
        // console.log(result1);
        res.status(200).json(result1);

     
    } catch (error) {
        console.error(error);
    }


}



exports.addCsr=async (req, res, next) => {

    try {
        // const authHeader = req.headers.authorization;
        // const {serviceproviderid}=req.body;

        // const customerid = await CustomerServices.getIdFromToken(authHeader);
        // if(!customerid){
        //     res.send(404).json({message:"No access"});
        // }

        const {name,email,phone,password}=req.body;
       const result1= await CSRModel.addcsr(name,email,phone,password);
       
       
     
        console.log(result1);
        res.status(200).json(result1);

     
    } catch (error) {
        console.error(error);
    }


}


exports.getCSR=async (req, res, next) => {

    try {
        // const authHeader = req.headers.authorization;
        // const {serviceproviderid}=req.body;

        // const customerid = await CustomerServices.getIdFromToken(authHeader);
        // if(!customerid){
        //     res.send(404).json({message:"No access"});
        // }

       const result1= await CSRModel.getcsr();
       
       
     
        console.log(result1);
        res.status(200).json(result1);

     
    } catch (error) {
        console.error(error);
    }


}



exports.login=async (req, res, next) => {

    try {
        // const authHeader = req.headers.authorization;
        // const {serviceproviderid}=req.body;

        // const customerid = await CustomerServices.getIdFromToken(authHeader);
        // if(!customerid){
        //     res.send(404).json({message:"No access"});
        // }

       const result1= await CSRModel.getcsr();
       
       
     
        console.log(result1);
        res.status(200).json(result1);

     
    } catch (error) {
        console.error(error);
    }


}