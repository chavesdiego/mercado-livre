const app = require('express')()
const routes = require('./routes')

app.use('/api', routes).listen(3001)
