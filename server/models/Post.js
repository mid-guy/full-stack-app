const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'],
    required: true
  },
  status: {
    type: String,
    enum: ['COMPLETED', 'PROCESSING'],
    default: 'PROCESSING',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
})

module.exports = mongoose.model(
  'posts' // name of collection
  , 
  PostSchema
)