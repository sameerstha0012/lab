let books = [
    {id: 1, title: 'Rich Dad Poor Dad', description: 'Good', price:99},
    {id: 2, title: 'Java From Scratch', description: 'Great', price:199},
    {id: 3, title: 'Node.js Core', description: 'Amazing', price:299}
];

let counter = 4;

module.exports = class Book {

    constructor(id, title, description, price){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
    }

    static getAllBooks(){
        return books;
    }

    static getBookById(id){
        return books.find(p => p.id == id);
    }

    save(){
        this.id = counter++;
        books.push(this);
    }

    updateById(id){
        const index = books.findIndex(p => p.id == id);
        if(index > -1){
            this.id = id;
            books[index] = this;
        }else{
            throw new Error(`Book with ID: ${id} cannot find in DB`);
        }
    }

    static deleteById(id){
        const index = books.findIndex(p => p.id == id);
        if(index > -1){
            books.splice(index, 1);
        } else {
            throw new Error(`Book with ID: ${id} cannot find in DB`);
        } 
    }

}