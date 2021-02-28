const mongoose = require('mongoose')

/**
 * model for event data:
 * {
 *  "name": "string",
 *  "org": "string",
 *  "location": {
 *      "address": "string"
 *      "zip" : 5-digit int
 *      "state code": Valid state code
 *  },
 *  "date": "YYYY/MM/DD",
 *  "start": "int",
 *  "end": "int",
 *  "eventType": valid type
 *
 * }
 **/
const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  org: {
    type: String,
    required: [true, 'Org name is required'],
  },
  zip: {
    type: Number,
    required: [true, 'Zip code is required'],
  },
  city: {
    type: String,
    required: [true, 'City is required'],
  },
  state: {
    type: String,
    required: [true, 'State is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
  date: {
    type: String,
    required: [true, 'Date is required'],
  },
  start: {
    type: String,
    required: [true, 'Start time is required'],
  },
  end: {
    type: String,
    required: [true, 'End time is required'],
  },
  eventType: {
    type: String,
    required: [true, 'Event type is required'],
  },
  necessities: [
    {
      type: String,
      required: false,
    },
  ],
})

module.exports = Event = mongoose.model('event', EventSchema)
