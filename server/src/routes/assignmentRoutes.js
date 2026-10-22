const express = require('express');
const router = express.Router();
const controller = require('../controllers/assignmentController');
const auth = require('../middleware/auth');

router.get('/', controller.getAssignments);
router.post('/', auth, controller.createAssignment);

module.exports = router;