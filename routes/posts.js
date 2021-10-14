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
} )

//display all donations
router.get('/', (req, res) => {
  Post.find()
  .then((result) => {
    res.render("index", {posts:result})
  })
  .catch((err)=> console.log(err,"found error"))
})

// //update a post

// router.put("/:id", async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (post.userId === req.body.userId) {
//       await post.updateOne({ $set: req.body });
//       res.status(200).json("the post has been updated");
//     } else {
//       res.status(403).json("you can update only your post");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
//delete a post

// router.delete("/:id", async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (post.userId === req.body.userId) {
//       await post.deleteOne();
//       res.status(200).json("the post has been deleted");
//     } else {
//       res.status(403).json("you can delete only your post");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.delete("/:id", (req, res) => {

  const id = req.params.id
  Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({redirect: '/'})
    })
    .catch(err => console.log(err))
});
//like / dislike a post

// router.put("/:id/like", async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (!post.likes.includes(req.body.userId)) {
//       await post.updateOne({ $push: { likes: req.body.userId } });
//       res.status(200).json("The post has been liked");
//     } else {
//       await post.updateOne({ $pull: { likes: req.body.userId } });
//       res.status(200).json("The post has been disliked");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


//get a post
router.get('/:id', (req, res) => {
  const id = req.params.id
  Post.findById(id)
  .then((result)=>{
    res.render("details", {post:result})
  })
  .catch(err => console.log(err))
})

//get timeline posts

// router.get("/timeline/all", async (req, res) => {
//   try {
//     const currentUser = await User.findById(req.body.userId);
//     const userPosts = await Post.find({ userId: currentUser._id });
//     const friendPosts = await Promise.all(
//       currentUser.followings.map((friendId) => {
//         return Post.find({ userId: friendId });
//       })
//     );
//     res.json(userPosts.concat(...friendPosts))
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



module.exports = router;
