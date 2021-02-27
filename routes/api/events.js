const express = require('express')
const router = express.Router()
// const bcrypt = require('bcryptjs')
const config = require('config')
// Uses express-validator to check format of data adheres to specified rules
const { checkSchema, check, validationResult } = require('express-validator')

const Event = require('../../models/Event')

/**
 * model for event data:
 * {
 *  "name": "string",
 *  "org": "string",
 *  "location": {
 *      "address": "string"
 *      "zip" : 5-digit int
 *      "state": Valid state code
 *  },
 *  "date": "YYYY/MM/DD",
 *  "start": "int",
 *  "end": "int",
 *  "eventType": valid type
 *
 * }
 **/
router.post('/', async (req, res) => {
  const { name, org, location, date, start, end, eventType } = req.body

  try {
    // TODO 1 Save event to database
    address = location.address
    zip = location.zip
    state = location.state
    thisEvent = {
      name,
      org,
      address,
      zip,
      state,
      date,
      start,
      end,
      eventType,
    }
    newEvent = new Event(thisEvent)
    await newEvent.save()
    res.send(`Event ${name} saved`)
    console.log(thisEvent)
  } catch (err) {
    console.log(err)
    res.status(500).send('Server error')
  }
})

router.get('/:', (req, res) => {
  //TODO 2 Get event based on id
})

module.exports = router
