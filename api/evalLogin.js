const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    const validPass = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    console.log(userData);
    console.log(validPass);
    if (!userData || !validPass) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    res.json({ user: userData, message: "Logged in..." });

    req.session.save(() => {
      req.session.id = userData.id;
      req.session.loggedIn = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    console.log(userData);

    if (userData == req.body.username) {
      res
        .status(400)
        .json({ message: "Username already taken, try another one" });
      return;
    } else {
      User.create({
        username: req.body.username,
        password: req.body.password,
      });
      res.json({ user: userData, message: "Created new account" });
    
    req.session.save(() => {
      req.session.id = userData.id;
      req.session.loggedIn = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    })};
  } catch (err) {
    console.log("ERROR", err);
    res.status(400).json(err);
  }
});

router.delete('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(400).send('Unable to log out')
      } else {
        res.send('Logout successful')
      }
    });
  } else {
    res.end()
  }
})

module.exports = router;
