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
    necessities,
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
    if (necessities) {
      thisEvent.necessities = necessities
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

router.get('/', async (req, res) => {
  let query = {}
  for (const [key, value] of Object.entries(req.query)) {
    switch (key) {
      case 'name':
        actualName = value.replace('-', ' ')
        query.name = actualName
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
      case 'necessities':
        query.necessities = value
        break
    }
  }
  console.log(query)
  await Event.find(query, (err, data) => {
    if (err) throw err
    res.json(data)
  })
  // res.send('Did it work?')
})

router.delete('/:id', async (req, res) => {
  ID = req.params.id
  await Event.findByIdAndDelete(ID, (err, data) => {
    if (err) throw err
    console.log(`Event ${ID} deleted`)
    res.json(data)
  })
})

module.exports = router
