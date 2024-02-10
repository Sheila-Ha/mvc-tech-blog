const router = require("express").Router();
const { Project, User } = require("../../models");
// Wk 14, 3 day 1:25
const { isAuthenticatedUser } = require("../../middleware/is-authenticated");

// Get all projects for homepage
router.get("/", async (req, res) => {
  try {
    const projectData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      projects,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// (1:20 3rd day)
router.use(isAuthenticatedUser);

// Get one project
router.get("/project/:id", async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["id", "title", "project_body", "user_id", "created_at"],
        },
      ],
    });

    const project = projectData.get({ plain: true });
    res.render("project", { project, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get one user
router.get("/user", async (req, res) => {
  try {
    const UserData = await User.findByPk(req.params.id);

    const user = userData.get({ plain: true });

    res.render("profile", { user, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("login", (req, res) => {
  // If user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/sign-up", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("sign-up");
});

router.project("/sign-up", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
