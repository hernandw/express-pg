
const pool = require("./config/db");
//obtener los libros


const getBooks = async (name, editorial, autor, price) => {
    const { rows } = await pool.query("SELECT * FROM books")
    console.log(rows)
    return rows
}

//Agregar Libros
const addBook = async (name, editorial, autor, price) => {
    const { rows } = await pool.query("INSERT INTO books (name, editorial, autor, price) VALUES ($1, $2, $3, $4)", [name, editorial, autor, price])
    console.log('Libro agregado')
    return rows
}


module.exports = {
    getBooks,
    addBook
}

//Agregar libros