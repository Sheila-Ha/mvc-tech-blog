const router = require("express").Router();
const { Blog, User } = require("../../models");
const withAuth = require("../../utils/auth");

// Get all Blogs
router.get("/", async (req, res) => {
  try {
    // Get all projects and join with user data
    const dbBlogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));

    res.render("homepage", {
      blogs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
