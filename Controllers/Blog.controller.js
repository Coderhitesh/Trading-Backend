const Blog = require('../Models/Blog.Model')

exports.createBlog = async (req, res) => {
    try {
        const { title, content, image } = req.body;

        if (!title || !content || !image) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            });
        }

        const newBlog = new Blog({
            title,
            content,
            image
        });

        await newBlog.save();

        res.status(201).json({
            success: true,
            message: 'New Blog Created Successfully',
            data: newBlog
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

exports.updateBlog = async (req, res) => {
    try {
        const blogId = req.params.id;

        const existingBlog = await Blog.findById(blogId);
        if (!existingBlog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        const { title, content, image } = req.body;

        const updateBlog = await Blog.findByIdAndUpdate(blogId, {
            title,
            content,
            image
        }, {
            new: true
        });

        res.status(200).json({
            success: true,
            message: 'Blog is updated',
            data: updateBlog
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'internal server error'
        });
    }
}

exports.deleteBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        const existingBlog = await Blog.findById(blogId);
        if (!existingBlog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found'
            });
        }

        await Blog.findByIdAndDelete(blogId);
        res.status(200).json({
            success: true,
            message: 'Blog is deleted',
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

exports.getAllBlog = async (req, res) => {
    try {
        const allBlog = await Blog.find();
        if (allBlog.length > 0) {
            res.status(200).json({
                success: true,
                message: 'All Blog is fetched',
                data: allBlog
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Blog is not found'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
}

exports.singleBlog = async (req, res) => {
    try {
        const BlogId = req.params.id;
        const singleBlog = await Blog.findById(BlogId);
        if (!singleBlog) {
            return res.status(404).json({
                success: false,
                message: 'Blog is not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Blog is fetched',
            data: singleBlog
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
}
