var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Loop = mongoose.model('Loop');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Loop.find(function (err, loops) {
    if (err) return next(err);
    res.render('index', {
      title: 'Loop API',
      loops: loops
    });
  });
});

// READ a list of Loops
router.get('/loops', function(req, res) {
  return Loop.find(function(err, loops) {
    if(!err) {
      return res.send(loops);
    } else {
      return console.log(err);
    }
  });
});

// CREATE a single Loop
router.post('/loops', function(req, res) {
  console.log("POST: ");
  console.log(req.body);
  
  var loop;
  loop = new Loop({
    title: req.body.title,
    details: req.body.details,
  });

  loop.save(function(err) {
    if(!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(loop);
});

// READ a single Loop by ID
router.get('/loops/:id', function(req, res) {
  return Loop.findById(req.params.id, function(err, loop) {
    if(!err) {
      return res.send(product);
    } else {
      return console.log(err);
    }
  });
});

// UPDATE a single Loop by ID
router.put('/loops/:id', function(req, res) {
  return Loop.findById(req.params.id, function(err, loop) {
    loop.title = req.body.title;
    loop.details = req.body.details;
    return product.save(function(err) {
      if(!err) {
        console.log("updated");
      } else {
        console.log(err);
      }
      return res.send(product);
    });
  });
});

// DELETE a single Loop by ID
router.delete('/loops/:id', function(req, res) {
  return Loop.findById(req.params.id, function(err, loop) {
    return loop.remove(function(err) {
      if(!err) {
        console.log("removed");
        return res.send('');
      } else {
        console.log(err);
      }
    });
  });
});