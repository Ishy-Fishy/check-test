  module.exports = function(app) {
    var checklist = require('./control/checklist');
    //app.get('/test', checklist.populate_db_basic_sample_todo); // sample database population
    app.get('/checklist', checklist.findAll);
    //app.get('/checklist/:id', checklist.findById);    // TBD - read ./control/checklist.js (line 14) for explanation
    app.post('/checklist', checklist.add);
    app.put('/checklist/:id/done', checklist.done);     // not using GET because it opens up potential security & misc problems
    app.put('/checklist/:id/undone', checklist.undone); // put request payload can be empty I.E: 
                                                        // PUT -H 'Content-Type: application/json' -d '{}' http://localhost:8080/checklist/56bd060153d65c1a20915384/done
                                                        // where '{}' is the payload and 
                                                        // 'http://localhost:8080/checklist/56bd060153d65c1a20915384/done' is the ID + route that triggers the required function
    
    app.delete('/checklist/:id', checklist.delete);
  };