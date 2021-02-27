const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const config = require('config')
// Uses express-validator to check format of data adheres to specified rules
const { checkSchema, check, validationResult } = require('express-validator')

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
 *  "type": valid type
 *
 * }
 **/
router.post('/', async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { name, org, location, date, start, end, type } = req.body

  try {
    // TODO 1 Check if event already exists
    // TODO 2 Save event to database
  } catch (err) {
    console.log(err)
    res.status(500).send('Server error')
  }
})

router.get('/:id', (req, res) => {
  //TODO 3 Get event based on id
})

module.exports = router
