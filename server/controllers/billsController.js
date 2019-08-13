const pool = require('../db');

module.exports = {
  getBills(req, res, next) {
    const username = req.body.username;

    const queryString = `SELECT info, price, username FROM bills`;

    pool.query(queryString, (err, result) => {
      if (err) return next(err);
      res.locals.bills = result.rows;
      return next();
    })
  },

  createBill(req, res, next) {
    const username = req.body.username;
    const info = req.body.info;
    const price = req.body.price.toFixed(2);

    const queryString = {
      text: 'INSERT INTO bills (info, price, username) VALUES ($1, $2, $3) RETURNING info, price',
      values: [info, price, username]
    }

    pool.query(queryString, (err, result) => {
      if (err) return next(err);
      res.locals.bill = result.rows[0];
      return next();
    })
  },

  deleteBill(req, res, next) {
    const username = req.body.username;
    const info = req.body.info;

    const queryString = {
      text: 'DELETE FROM bills WHERE username=$1 AND info=$2',
      values: [username, info]
    }

    pool.query(queryString, (err, result) => {
      if (err) return next(err);
      return next();
    })
  },

  updateBill(req, res, next) {
    const username = req.body.username;
    const info = req.body.info;
    const newInfo = req.body.newInfo;
    const newPrice = req.body.newPrice;



    const queryString = {
      text: 'UPDATE bills SET info=$1, price=$2 WHERE username=$3 AND info=$4 RETURNING info, price',
      values: [newInfo, newPrice, username, info]
    }

    pool.query(queryString, (err, result) => {
      if (err) return next(err);
      res.locals.bill = result.rows[0];
      return next();
    })

  }
}