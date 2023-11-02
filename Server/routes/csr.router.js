
const AdminController = require('../controller/admin.controller')
const CSRController = require('../controller/csr.controller')

const router = require('express').Router();



router.get('/getcustomercount',AdminController.getCustomerCount)
router.get('/getserviceprovidercount',AdminController.getServiceProviderCount)
router.get('/getrevenue',AdminController.getRevenue)
router.get('/getCompletedGroupBy',AdminController.getCompletedTasksGrouped)
router.get('/gettasksbymonth',AdminController.tasksByMonth)

router.get('/getCategoryRequests',CSRController.getCategoryRequests)
router.post('/setCategory',CSRController.setCategory)
router.post('/rejectCategory',CSRController.rejectCategory)
router.get('/getSp',CSRController.getSp)

module.exports = router;
