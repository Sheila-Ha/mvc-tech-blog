const router = require("express").Router();
const { Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

// Get all Blogs
router.get("/", async (req, res) => {
  try {
    // Get all projects and join with user data
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const blogs = dbPostData.map((blog) => post.get({ plain: true }));

    res.render("homepage", {
      post,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get one Post