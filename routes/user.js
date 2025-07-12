const { Router } = require("express");
const User = require('../models/user');
const multer = require("multer");
const path = require("path");

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/profile`));
  },
  filename: function (req, file, cb) {
      const fileName = `${Date.now()}-${file.originalname}`;
      cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const isMimeType = allowedTypes.test(file.mimetype.toLowerCase());
    const isExtName = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (isMimeType && isExtName) {
      return cb(null, true);
    } else {
      return cb(new Error("Only image files are allowed!"));
    }
  },
});

router.get("/signin", (req, res) => {
    return res.render("signin");
});

router.get("/signup", (req, res) => {
    return res.render("signup");
});

router.post("/signup", upload.single("profileImage"), async (req, res) => {
    const { fullName, email, password } = req.body;
    
    let profileImageURL = "/uploads/profile/default.jpg";

    if (req.file) {
      profileImageURL = `/uploads/profile/${req.file.filename}`;
    }

  await User.create({
    fullName,
    email,
    password,
    profileImageURL: `/uploads/profile/${req.file.filename}`,
  });
  return res.redirect("/");
});

router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await User.matchPasswordAndGenerateToken(email, password);

        return res.cookie("token", token).redirect("/");
    } catch (error) {
        return res.render("signin", {
            error: 'Incorrect email or password',
        });
    }
});

router.get("/logout", (req, res) => {
    res.clearCookie("token").redirect("/");
});

module.exports = router;