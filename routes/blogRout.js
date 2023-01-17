const {
  getAllBlogs,singleBlog,getCreateBlog,createBlog,aboutBlog,deleteBlog
} = require('../controller/blogController')
const express = require('express');
 const router = express.Router();

 router.get('/', (req, res)=> {
 
    res.redirect('/blogs')
   })
   
   router.get('/blogs', getAllBlogs);

   router.get('/about',aboutBlog )
    
   router.get('/blogs/create', getCreateBlog)

   router.post('/blogs',createBlog);

   router.get('/blogs/:id',singleBlog);
   
   router.delete('/blogs/:id',deleteBlog);

   
   router.get('/about-us', (req, res)=> {
      res.redirect('about');
   })
   
   router.use('*',(req, res)=> {
     res.render('404',{title: '404 page'})
   })

   module.exports = router