  var mongoose = require( 'mongoose' );

  var Schema = mongoose.Schema;

  var todoSchema = new Schema({
      name: String,
      state: Boolean
  });

  mongoose.model( 'Checklist', todoSchema );