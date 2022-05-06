'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
var commentSchema = Schema( {
  userId: ObjectId,
  classyear:String,
  comments: String,
  rating: Number,
  course: String,
} );

module.exports = mongoose.model( 'Comment', commentSchema );
