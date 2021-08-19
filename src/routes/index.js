const express = require('express');
const router = express.Router();
const si = require('systeminformation');

// promises style - new since version 3

/* GET home page. */
router.get('/', (req, res) => {
    
    console.log('Hello World!');
    si.cpu()
    .then(data => res.send(data))
    .catch(error => console.error(error));
});

/*router.get('/', function(req, res, next) {
    res.render('index', { title: 'index' });
});*/

module.exports = router;