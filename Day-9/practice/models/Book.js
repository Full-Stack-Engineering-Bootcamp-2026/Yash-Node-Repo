const Books = []

module.exports = class Book {
    constructor(id,title)
    {
        this.id = id;
        this.title = title
    }

    save(){
        Books.push(this)
    }

    static fetchAll()
    {
        return Books;
    }
}