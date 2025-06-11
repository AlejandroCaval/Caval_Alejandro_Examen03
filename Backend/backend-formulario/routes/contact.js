const express = require('express');
const router = express.Router();
const Message = require('../models/message');

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();

    res.status(200).json({ message: 'Mensaje guardado exitosamente.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al guardar el mensaje.' });
  }
});

module.exports = router;
