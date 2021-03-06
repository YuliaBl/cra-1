const mongoose = require('mongoose')
const uuid = require('uuid')
const statusTypes = require('../../common/enums/task-statuses')


const Task = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    unique: true,
    default: () => uuid.v4(),
  },
  status: {
    type: String,
    enum: statusTypes,
    default: statusTypes[0]
  },
})


module.exports = mongoose.model("tasks", Task)