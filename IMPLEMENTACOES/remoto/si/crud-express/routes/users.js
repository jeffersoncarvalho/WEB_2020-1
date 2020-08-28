var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list',
  function (req, res, next) {
    res.json(
      {
        users: [
          { name: 'Timmy' },
          { name: 'Lucy' },
          { name: 'Jimmy' }
        ]
      }
    );
  }
);

module.exports = router;
