const express = require('express')
const messageRouter = require('./routes/messageRouter')
const whatsappClient = require('./service/WhatsappClient')

whatsappClient.initialize()

const app = express()

app.use(express.json())
app.use(messageRouter)
app.listen(3000, () => console.log('Server is running on port 3000'))




