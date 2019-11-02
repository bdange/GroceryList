const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

const User = require("../../models/user");

router.post("/", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ msg: "please enter all fields" });
  }

  User.findOne({ email }).then(user => {
    if (user) {
      return res.status(400).json({ msg: "User Already Exsists" });
    }
    const newUser = new User({
      email,
      password
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;

              res.json({
                token: token,
                user: {
                  id: user.id,
                  email: user.email
                }
              });
            }
          );
        });
      });
    });
  });
});

router.post("/auth", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ msg: "Please enter all fields" });
  }

  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User not found" });
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });
      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token: token,
            user: {
              id: user.id,
              email: user.email
            }
          });
        }
      );
    });
  });
});

router.get("/auth/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-passowrd")
    .then(user => res.json(user));
});

module.exports = router;
