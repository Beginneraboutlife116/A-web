// include express and express-handlebars
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// change view engine
app.engine('handlebars', exphbs({ defaultLayouts: 'main' }))
app.set('view engine', 'handlebars')

// home page route
app.get('/', (req, res) => {
  res.render('home')
})

// listen server
app.listen(port, () => {
  console.log(`Web is running on http://localhost:${port}`)
})