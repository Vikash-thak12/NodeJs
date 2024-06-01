const express = require("express")
const router = express.Router();

const { handleGenerateNewUrl } = require('../controllers/url')



router.post('/', handleGenerateNewUrl)


module.exports = router;