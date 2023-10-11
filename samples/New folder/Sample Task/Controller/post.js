const Post = require ('../models/post')

exports. getPost = (req, res) => {
    res.json({
        Products : [{title:"Laptops"}, {Category:"Electronic"}, {Os: "Mac OS"}]
    });
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    console.log('CREATING POST:', post)
}
