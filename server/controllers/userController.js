const pool = require('../db');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

module.exports = {
  findUser(req, res, next) {
    const user = req.body.username;
    const pass = req.body.password;

    const queryString = {
      text: `SELECT * FROM users WHERE username=$1`,
      values: [user]
    }

    pool.query(queryString, (err, result) => {
      if (err || result.rows.length === 0) res.send({ error: 'invalid username or password' });
      else {
      }
      console.log(pass)
      bcrypt.compare(pass, result.rows[0].password, (err, isMatch) => {
        if (err || !isMatch) res.send({ error: 'username or password incorrect' })
        else {
          res.locals.result = true;
          res.locals.username = user;
          return next();
        }
      })
    })

  },

  createUser(req, res, next) {
    const user = req.body.username;
    const pass = req.body.password;

    if (!user || !pass) {
      return next('please include username and password');
    } else {
      bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) {
          return next(err)
        };

        bcrypt.hash(pass, salt, (err, hash) => {
          if (err) res.send({ error: err.error });
          else {
            const queryString = {
              text: `INSERT INTO users(username, password) VALUES ($1, $2) RETURNING username, password`,
              values: [user, hash]
            }
            pool.query(queryString, (err, result) => {
              if (err) return next(err);
              else {
                res.locals.result = result.rows[0];
                return next();
              }
            })
          }
        })
      })
    }
  }
}

