const express = require('express')
const router = new express.Router()
const whatsappClient = require('../service/WhatsappClient')

router.get('/', (req, res) => {
  res.send('Hello World')
})
router.post('/test', (req, res) => {
  whatsappClient.sendMessage(req.body.nohp, req.body.message)
  res.send()
})

router.post("/send-message", async (req, res) => {
  const { number, message } = req.body;

  try {
    const chatId = `${number}@c.us`;
    // Tambahkan delay 5 detik sebelum mengirim pesan menggunakan setTimeout
    setTimeout(async () => {
      await whatsappClient.sendMessage(chatId, message);
      res.send("Message sent successfully");
    }, 5000); // 5000 ms = 5 detik
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).send("Failed to send message");
  }
});




module.exports = router

