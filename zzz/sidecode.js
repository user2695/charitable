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
router.delete("/:id", (req, res) => {
    const post = Post.findById(req.param.id)
    .then((result)=>{
        post.deleteOne();
    })
    .err((err=> console.log(err)))
})

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

//create user
// router.post('/registerUser', async (req, res) => {
//   // First Validate The Request

//   // Check if this user already exisits
//   let user = await User.findOne({ email: req.body.email });
//   if (user) {
//       return res.status(400).send('That user already exisits!');
//   } else {
//       // Insert the new user if they do not exist yet
//       user = new User({
//           name: req.body.name,
//           email: req.body.email,
//           password: req.body.password,
//           endorser: req.body.endorser
//       });
//       await user.save();
//       res.send(user);
//   }
// });