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

// @desc    Get a add store page
// @route   GET /add
// @access  Private
exports.addStore = (req, res, next) => {
  try {
    res.render("editStore", { title: "Add Store" });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

// @desc   Create a new store and stored to a database
// @route  POST /add
// @access Private
exports.createStore = (req, res, next) => {
  try {
    res.status(201).json({
      success: true,
      data: req.body,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
