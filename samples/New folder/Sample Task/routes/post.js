const express = require('express')
const postController = require ('../Controller/post')

const router = express.Router();
router.get('/', postController.getPost);
router.post("/post", postController.createPost );



module.exports = router;