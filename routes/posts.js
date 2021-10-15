const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
const path = require("path")
const multer = require("multer")
const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, './public/media')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--'+ file.originalname)
  }
})
const upload = multer({storage: storage})

//create donation
router.post("/create", upload.single("image") , (req,res) => {

  const newPost = new Post({
    title: req.body.title,
    desc : req.body.desc,
    amount: req.body.amount,
    image : req.file.filename,
  })
  
  newPost.save()
  .then((result)=>{
    res.redirect("/")
    // res.send(result)
  })
  .catch(err=>console.log(err))
})


//Display all donations
router.get('/', (req, res) => {
  Post.find()
  .then((result) => {
    res.render("index", {posts:result})
  })
  .catch((err)=> console.log(err,"found error"))
})


//DELETE POST
router.delete("/:id", (req, res) => {

  const id = req.params.id
  Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({redirect: '/'})
    })
    .catch(err => console.log(err))
});

//get a single post
router.get('/:id', (req, res) => {
  const id = req.params.id
  Post.findById(id)
  .then((result)=>{
    res.render("details", {post:result})
  })
  .catch(err => console.log(err))
})

module.exports = router;
