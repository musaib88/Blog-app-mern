const jwt = require('jsonwebtoken');
// const express=require('express')
// const router=express.Router();

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  console.log(token)

  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }
  const [bearer, cleantoken] = token.split(' ');

  jwt.verify(cleantoken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send('Invalid token');
    }

    req.userId = decoded.userId;
    // console.log(req.userId)

    next();
  });
};

// router.get('')

module.exports = verifyToken;
