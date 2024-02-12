const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  //console.log('test');
  try {
    // Get all projects and JOIN with user data
    const projectData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    // console.log('PROJECT DATA:');
    // console.log(projectData);
    // Serialize data so the template can read it
    const projects = projectData.map((project) => project.get({ plain: true }));
    // console.log('PROJECTS:');
    // console.log(projects);
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      projects, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log('error!');
    res.status(500).json(err);
  }
});

router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
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

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;








// const router = require("express").Router();
// const { Project, User } = require("../models");
// // Wk 14, 3 day 1:25
// // const { isAuthenticatedUser } = require("../middleware/is-authenticated");
// const withAuth = require('../utils/auth');

// // Get one user
// router.get("/user", withAuth, async (req, res) => {
//   try {
//     const UserData = await User.findByPk(req.params.id);

//     const user = userData.get({ plain: true });

//     res.render("profile", { user, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("login", (req, res) => {
//   // If user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect("/");
//     return;
//   }

//   res.render("login");
// });

// router.get("/sign-up", (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect("/");
//     return;
//   }
//   res.render("sign-up");
// });

// router.post("/sign-up", async (req, res) => {
//   try {
//     const userData = await User.create({
//       username: req.body.username,
//       password: req.body.password,
//     });
//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.username = userData.username;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // (1:20 3rd day)
// // router.use(withAuth);

// // Get all projects and JOIN with user data
// router.get("/", withAuth,async (req, res) => {
//   try {
//     const projectData = await Project.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ["name"],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const projects = projectData.map((project) => project.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render("homepage", {
//       projects,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // Get one project
// router.get("/project/:id", withAuth, async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ["id", "title", "project_body", "user_id", "created_at"],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });
//     res.render("project", { project, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });


// module.exports = router;
