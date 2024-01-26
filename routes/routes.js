const express = require("express");
const router = express.Router();
const { getBooks, addBook } = require("../consultas.js");

router.get("/", (req, res) => {
  res.send("Hola mundo desde express");
});

router.get("/users", (req, res) => {
  res.send("Listado de usuarios");
});

router.get('/books', async (req, res) => {
    
  const results = await getBooks()
  res.json(results)

})


router.post('/books', async (req, res) => {

  const { name, editorial, autor, price } = req.body
  await addBook(name, editorial, autor, price)
  res.send('Libro agregado')
})

module.exports = router;