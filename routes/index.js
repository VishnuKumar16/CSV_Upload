const express = require("express");
const multer = require("multer");
const router = express.Router();
const upload = multer({ dest: "uploads/" });

const homeController = require("../controllers/homeController");
const uploadController = require('../controllers/uploadController');

router.get("/", homeController.home);
router.post("/upload", upload.single("file"), homeController.upload);
router.get('/view/:fileId', uploadController.view)
router.get('/delete/:fileId', uploadController.delete)

module.exports = router;
