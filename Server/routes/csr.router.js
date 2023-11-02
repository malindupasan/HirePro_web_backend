
const AdminController = require('../controller/admin.controller')

const router = require('express').Router();



router.get('/getcustomercount',AdminController.getCustomerCount)
router.get('/getserviceprovidercount',AdminController.getServiceProviderCount)
router.get('/getrevenue',AdminController.getRevenue)
router.get('/getCompletedGroupBy',AdminController.getCompletedTasksGrouped)
router.get('/gettasksbymonth',AdminController.tasksByMonth)
router.post('/add-csr',AdminController.addCsr)
router.get('/getcsr',AdminController.getCSR)
router.post('/login',AdminController.login)

module.exports = router;
