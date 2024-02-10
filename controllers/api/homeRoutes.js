const router = require("express").Router();
const { Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

// Get all Posts
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

    const posts = dbPostData.map((blog) => posts.get({ plain: true }));

    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get one Post
// router.get("/post/:id", async (req, res) => {
//   // If user is not logged in, redirect the user to the login page
//   if (!req.session.loggedIn) {
//     res.redirect('/login');
//   } else {
//     //If user is logged in, allow them to view the posts
//     try {
//       const dbPostData = await Post.findByPk(req.params.id, {
//         include [
//           {
//             model: User,
//             attributes: [

//             ]
//           }
//         ]
//       })
//     }
//   }
// });

// Serialize date 

// Pass serialized data

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    //find the logged in user based on the session ID
    const newUserData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("login", (req, res) => {
  // If user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }
  
  res.render("login");
});

module.exports = router;
