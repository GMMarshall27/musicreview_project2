// const router = require('express').Router();
// const { User } = require('../../models');

// //got from homework will change
// router.post('/', async (req, res) => {
//     try {
//       const userNew = await User.create({
//         username: req.body.username,
//         password: req.body.password,
//       });
  
//       req.session.save(() => {
//         req.session.userId = newUser.id;
//         req.session.username = newUser.username;
//         req.session.loggedIn = true;
  
//         res.json(userNew);
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
//   router.post('/login', async (req, res) => {
//     try {
//       const user = await User.findOne({
//         where: {
//           username: req.body.username,
//         },
//       });
  
//       if (!user) {
//         res.status(400).json({ message: 'User/Password not found. Please try again!' });
//         return;
//       }
  
//       const validPassword = user.checkPassword(req.body.password);
  
//       if (!validPassword) {
//         res.status(400).json({ message: 'User/Password not found. Please try again!' });
//         return;
//       }
  
//       req.session.save(() => {
//         req.session.userId = user.id;
//         req.session.username = user.username;
//         req.session.loggedIn = true;
  
//         res.json({ user, message: 'Thank-you for logging in!' });
//       });
//     } catch (err) {
//       res.status(400).json({ message: 'User is not found! Sorry :(' });
//     }
//   });
  
//   router.post('/logout', (req, res) => {
//     if (req.session.loggedIn) {
//       req.session.destroy(() => {
//         res.status(204).end();
//       });
//     } else {
//       res.status(404).end();
//     }
//   });

const router = require('express').Router();
const { User } = require('../../models');

router.get('/', )

module.exports = router;