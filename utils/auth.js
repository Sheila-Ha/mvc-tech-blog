

// This might not be needed now that I added the middleware folders







const withAuth = (req, res, next) => {

  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;