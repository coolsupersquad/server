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
 *  "address": "string"
 *  "zip" : 5-digit int
 *  "city": string
 *  "state": Valid state code
 *  "date": "YYYY/MM/DD",
 *  "start": "int",
 *  "end": "int",
 *  "eventType": valid type
 *
 * }
 **/
router.post('/', async (req, res) => {
  const {
    name,
    org,
    address,
    zip,
    state,
    city,
    date,
    start,
    end,
    eventType,
  } = req.body

  try {
    // TODO 1 Save event to database
    // address = location.address
    // zip = location.zip
    // state = location.state
    // city = location.city
    thisEvent = {
      name,
      org,
      address,
      zip,
      state,
      city,
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

router.get('/', (req, res) => {
  let query = {}
  for (const [key, value] of Object.entries(req.query)) {
    switch (key) {
      case 'name':
        query.name = value
        break
      case 'org':
        query.org = value
        break
      case 'zip':
        query.zip = value
        break
      case 'state':
        query.state = value
        break
      case 'city':
        query.city = value
        break
      case 'date':
        query.date = value
        break
      case 'eventType':
        query.eventType = value
        break
    }
  }
  console.log(query)
  Event.find(query, (err, data) => {
    if (err) throw err
    res.json(data)
  })
  // res.send('Did it work?')
})

module.exports = router
