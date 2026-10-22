const express = require('express');
const router = express.Router();
const controller = require('../controllers/submissionController');
const auth = require('../middleware/auth');

router.get('/', controller.getSubmissions);
router.post('/', controller.createSubmission);
router.put('/:id/feedback', auth, controller.addFeedback);

module.exports = router;