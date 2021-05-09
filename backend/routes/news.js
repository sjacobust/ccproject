const express = require('express');
const router = express.Router();
const { newsController } = require('../src/controllers');


router.get('/', newsController.getNews);
router.delete('/', newsController.deleteNews);
router.post('/', newsController.saveNews);


module.exports = router;