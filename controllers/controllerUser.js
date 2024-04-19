const User = require('../models/modelUser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  login: (req, res) => {
    const { email, password } = req.body;

    User.getUserByEmail(email, (err, results) => {
      if (err) {
        console.error(err);
      }
      let result = bcrypt.compareSync(password, results.password);
      if (results) {
        result.password = undefined;
        let jsonwebtoken = jwt.sign({ result: results }, "secretkey", {
          expiresIn: "1h"
        });
        return res.json({ jsonwebtoken });
      }
      else {
        return res.json({
          succes: 0,
          message: "username or password invalid"
        });
      }
    });
  },

  logout: (req, res) => {
    res.status(200).json({ message: 'Logout successful' });
  },
  ControlladdUser: (req, res) => {
    const { email, password } = req.body;
  
    User.AddUser({ email, password }, (err, res) => {
      if (err) {
        console.log(err);
        return res.json({
          succes: 0,
          message: "entri error"
        });
      } else {
        return res.json({
          succes: 1,
          data: results
        });
      }
    });
  },
  ControllgetAllUsers: (req, res) => {
    User.getAllUsers((error, results) => {
      if (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
        return;
      } 
  
      res.json(results);
    });
  },
  ControllgetUserById: (req, res) => {
    const id = req.params.id;
  
    User.getUserById(id, (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Failed to fetch user' });
        return;
      }
  
      if (!result) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
  
      res.json(result);
    });
  },
  ControllupdateUser: (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;
  
    User.updateUser({ id, email, password }, (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Failed to update user' });
        return;
      }
  
      res.json(result);
    });
  },
  ControlldeleteUser : (req, res) => {
    const id = req.params.id;
  
    User.deleteUser(id, (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Failed to delete user' });
        return;
      }
  
      if (!result) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
  
      res.json(result);
    });
  }
};