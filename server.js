const express = require('express')
const connectDB = require('./config/db')
const app = express()

// stuff
require('dotenv').config()

// Connect Database
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => res.send('API running'))

app.use('/api/events', require('./routes/api/events'))

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

