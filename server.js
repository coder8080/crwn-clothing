const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const compression = require('compression')
const enforce = require('express-sslify')

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(enforce.HTTPS({ trustProtoHeader: true }))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  }
  stripe.charges.create(body, (error, result) => {
    if (error) {
      res.status(500).json({ error })
    } else {
      res.status(200).json({ result })
    }
  })
})

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'))
})

console.log(`Start in ${process.env.NODE_ENV || 'development'} mode`)
app.listen(port, (err) => {
  if (err) {
    console.log('error starting server')
    console.log(err)
    throw err
  }
  console.log(`server was successfully started on port ${port}`)
})
