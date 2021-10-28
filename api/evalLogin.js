const router = require('express').Router();
const  User  = require('../models/user');

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
    const validPass = await userData.checkPassword(req.body.password);

    if (!userData || !validPass) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    } 
    res.json({user: userData, message: 'Logged in...'});

    // req.session.save(() => {
    //   req.session.id = userData.id;
    //   req.session.logged_in = true;
      
    //   res.json({ user: userData, message: 'You are now logged in!' });
    // });

} catch (err) {
    res.status(400).json(err);
  }
});