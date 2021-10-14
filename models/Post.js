const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      
    },
    amount: {
      type: String,
      
    },
    title: {
      type: String,
     
    },
    desc: {
      type: String,
      max: 500,
    },
    reason: {
      type: String,
      max: 500,
    },
    image: {
      type: String,
      required:true,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
