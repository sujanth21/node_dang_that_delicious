// @desc    Getting the home page for the store
// @route   GET /
// @access  Public
exports.getHomePage = (req, res, next) => {
  try {
    res.render("index");
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
