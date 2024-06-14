const express = require("express")
const router = express.Router();

const { handleGenerateNewUrl, handleGetAnalytics } = require('../controllers/url')



router.post('/', handleGenerateNewUrl) //For generating new short url 
router.get('/analytics/:shortID', handleGetAnalytics)


module.exports = router;
