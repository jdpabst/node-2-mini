let books = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books);
    },

    create: (req, res) => {
        const {title, author} = req.body;
        let book = {
            id: id,
            title: title, 
            author: author, 
        }
        books.push(book);
        id++;
        res.status(200).send(books);
    },

    update: (req, res) => {
        console.log('hello');
        for(var i = 0; i < books.length; i++){
            // the only parameter we have is 'id' in our URl in index.js to search books by. Use this to filter through the books array
            if(books[i].id == req.params.id){
                // update the books with whatever is on the body and default to the original text just in case
                books[i].author = req.body.author || books[i].author;
                books[i].title = req.body.title || books[i].title;
            }
        }
        
        res.status(200).send(books);
    },

    delete: (req, res) => {
        for(var i = 0; i < books.length; i++){
            if(books[i].id == req.params.id){
                books.splice(i, 1);
            }
        }
        res.status(200).send(books);
    }
}