const Blog = require('../models/blog')
const getAllBlogs = (req,res) =>{
    Blog.find().sort({ createdAt: -1})
    .then((result)=>{
      res.render('index',{title: 'All Blogs',blogs:result})
    })
    .catch((err)=>{
     res.send(err)
    })
    
  };

  const singleBlog = async(req,res)=>{
    try {
      const id = req.params.id;
      const blog = await Blog.findById(id);
      res.render('details',{blog: blog,title: 'Blog Details'})
    } catch (error) {
      res.render('404')
    }
      
  }
  const getCreateBlog = (req, res)=> {
    res.render('create',{title: 'create new post'})
  }

const createBlog = async(req,res)=>{
    const blog = await new Blog(req.body)

    blog.save()
    .then((result)=>{
       res.redirect('/blogs');
    })
    .catch((err)=>{
      console.log(err)
    })
}

const aboutBlog = (req, res)=> {
    res.render('about',{title: 'About page'})
  }
const deleteBlog =async(req,res)=>{
    try {
      const id = req.params.id;
      
      if (!id) {
        res.status(400).json({ msg: `No member whit id of ${req.params.id}` });
      }
      const blog = await Blog.findByIdAndDelete(id);   
      res.render('/');
    } catch (error) {
      
    }
  }

  module.exports = {
    getAllBlogs,singleBlog,getCreateBlog,createBlog,aboutBlog,deleteBlog
  }