let books = [];
let nextId = 1;

exports.getAllBooks = (req, res) => {
    res.status(200).json(books);
};

exports.getBookById = (req, res) => {
    const book = books.find(b => b.id === req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json(book);
};

exports.createBook = (req, res) => {
    const { title, author, genre, publishedYear } = req.body;
    if (!title || !author) {
        return res.status(400).json({ error: 'Title and author are required' });
    }
    const book = { id: String(nextId++), title, author, genre, publishedYear, isAvailable: true };
    books.push(book);
    res.status(201).json(book);
};

exports.updateBook = (req, res) => {
    const index = books.findIndex(b => b.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Book not found' });
    books[index] = { ...books[index], ...req.body };
    res.status(200).json(books[index]);
};

exports.deleteBook = (req, res) => {
    const index = books.findIndex(b => b.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Book not found' });
    books.splice(index, 1);
    res.status(204).send();
};
