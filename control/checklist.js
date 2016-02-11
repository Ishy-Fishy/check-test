var mongoose = require('mongoose'),

Checklist = mongoose.model('Checklist');

exports.findAll = function(req, res){
  Checklist.find({},function(err, results) {
      if (err) return console.log(err);
    return res.send(results);
  });
};

/*exports.findById = function(req, res){
  var id = req.params.id;
  Checklist.findOne({'_id':id},function(err, result) {                 /// No need to get a single todo, saved for future implementation
    return res.send(result);
  });
}; */

exports.add = function(req, res) {
  Checklist.create(req.body, function (err, checklist) {
    if (err) return console.log(err);
    return res.send(checklist);
  });
};

exports.done = function(req, res) {
  var id = req.params.id;

  Checklist.update({"_id":id}, { $set: { state: true}},
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d checklist items', numberAffected);
      return res.send(202);
  });
};

exports.undone = function(req, res) {
  var id = req.params.id;

  Checklist.update({"_id":id}, { $set: { state: false}},
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d checklist items', numberAffected);
      return res.send(202);
  });
};

exports.delete = function(req, res){
  var id = req.params.id;
  Checklist.remove({'_id':id},function(result) {
    return res.send(result);
  });
};

/* exports.populate_db_basic_sample_todo = function(req, res){
  Checklist.create({
      "name": "Complete API",
      "status": true
  }                                                                                     // sample DB population
  , function (err) {
    if (err) return console.log(err);
    return res.send(202);
  });
}; */